import { useEffect, useState } from "react";
import axios from "axios";

import TopNavigation from "../../components/messages/TopNavigation";
import Sidebar from "../../components/messages/Sidebar";
import JobStats from "../../components/jobs/JobStats";
import JobFilters from "../../components/jobs/JobFilters";
import JobSort from "../../components/Jobs/JobSort";
import JobCard from "../../components/Jobs/JobCard";

import JobDetails from "../../components/Jobs/JobDetails";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5005/api/jobs");
        const fetchedJobs = res.data.jobs.map((job) => ({
          id: job._id,
          logo: job.companyLogo || "https://via.placeholder.com/80",
          status: job.status || "Active",
          postedTime: new Date(job.createdAt).toLocaleDateString(),
          saved: false,
          title: job.title,
          company: job.company,
          location: job.location,
          tags: [
            ...(job.skills || []),
            job.jobType,
            `${job.experience?.min || 0}-${job.experience?.max || 0} Years`,
            `${job.salary?.min || 0} - ${job.salary?.max || 0} ${
              job.salary?.currency || "INR"
            } / year`,
          ],
          matchPercentage: Math.floor(Math.random() * 21) + 80,
        }));
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1 overflow-hidden pt-16 mb-7 mr-20 ml-18">
        <Sidebar />

        <div className="flex flex-1 ml-[300px] mt-9 mb-5 overflow-y-auto p-6">
          <div className="w-full max-w-5xl mx-auto">
            <JobStats />
            <JobFilters />
            <JobSort totalResults={jobs.length} />

            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => setSelectedJobId(job.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right-side drawer */}
      {selectedJobId && (
        <JobDetails
          jobId={selectedJobId}
          onClose={() => setSelectedJobId(null)}
        />
      )}
    </div>
  );
};

export default JobPage;
