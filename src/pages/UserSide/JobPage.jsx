import TopNavigation from "../../components/messages/TopNavigation";
import Sidebar from "../../components/messages/Sidebar";
import JobStats from "../../components/jobs/JobStats";
import JobFilters from "../../components/jobs/JobFilters";
import JobSort from "../../components/Jobs/JobSort";
import JobCard from "../../components/jobs/JobCard";

const JobPage = () => {
  const jobs = [
    {
      id: 1,
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "Recently active",
      postedTime: "Posted 2 days ago",
      saved: false,
      title: "Dermatologist Specialist",
      company: "Apollo Hospital",
      location: "Mumbai, Maharashtra",
      tags: ["MBBS", "Full-Time", "10-15 Years", "7.2 - 10L / year"],
      matchPercentage: 85,
    },
    {
      id: 2,
      logo: "https://randomuser.me/api/portraits/men/2.jpg",
      status: "Recently active",
      postedTime: "Posted 1 day ago",
      saved: true,
      title: "Cardiologist",
      company: "Fortis Hospital",
      location: "Delhi, NCR",
      tags: ["MD", "Full-Time", "8-12 Years", "12 - 15L / year"],
      matchPercentage: 92,
    },
    {
      id: 3,
      logo: "https://randomuser.me/api/portraits/women/3.jpg",
      status: "Urgently hiring",
      postedTime: "Posted 3 days ago",
      saved: false,
      title: "Pediatric Surgeon",
      company: "Manipal Hospital",
      location: "Bangalore, Karnataka",
      tags: ["MS", "Part-Time", "5-8 Years", "6 - 8L / year"],
      matchPercentage: 78,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1 overflow-hidden pt-16 mb-7 mr-20 ml-18">
        <Sidebar />

        {/* Main Job Content */}
        <div className="flex flex-1 ml-[300px] mt-9 mb-5 overflow-y-auto p-6">
          <div className="w-full max-w-5xl mx-auto">
            <JobStats />
            <JobFilters />
            <JobSort totalResults="1,202" />

            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
