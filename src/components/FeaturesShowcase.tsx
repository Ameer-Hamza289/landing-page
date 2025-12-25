import image3 from '../assets/image3.svg';

export default function FeaturesShowcase() {
  return (
    <div className="border-t border-[#E5E5E5] py-6 md:py-8 lg:py-10 md:pb-8 lg:pb-10 px-6 md:px-8 lg:mx-20 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What you get on Setapp.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>
      </div>
      {/* Feature Showcase Section - image3 */}
      <div className="relative w-full flex justify-center items-center mt-6 md:mt-10 lg:mt-20 md:px-8 lg:px-0">
        <img
          src={image3}
          alt="App categories and features showcase"
          className="w-full max-w-6xl lg:max-w-7xl h-auto"
        />
      </div>
    </div>
  );
}

