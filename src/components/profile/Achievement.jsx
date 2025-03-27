import { PlusIcon } from "lucide-react";

const Achievement = () => {
  return (
    <div className=" h-screen overflow-hidden">
      {/* Left Side - Form */}

      <div className="w-full h-full flex flex-col p-8">
        <div></div>
      </div>
      <div className="flex flex-row justify-between px-2">
        <button className="flex items-center gap-1">
          <PlusIcon /> Add
        </button>
      </div>
    </div>
  );
};

export default Achievement;
