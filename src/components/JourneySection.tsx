export default function JourneySection() {
  return (
    <div className="border-b border-[#E5E5E5] px-6 md:px-8 lg:px-10 py-6 md:py-3 mx-0 md:mx-6 lg:mx-20 mb-8 md:mb-12 lg:mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[#FFFFFF] hover:text-white transition-colors cursor-pointer my-6 md:my-8 lg:my-10">
          <span className="text-xl">→</span>
          <span className="text-xl">View all superpowers</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mb-8">
          <h2 className="text-[#FFFFFF] text-3xl md:text-4xl lg:text-5xl font-bold">
            Your Setapp journey.
          </h2>
          <p className="text-lg md:text-xl text-[#FFFFFF] max-w-md">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

