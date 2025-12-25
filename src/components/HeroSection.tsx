import logo from "../assets/logo.svg";
import appleIcon from "../assets/apple.svg";
import googleIcon from "../assets/google.svg";
import workwithpics from "../assets/workwithpics.svg";
import pdf from "../assets/pdf.svg.svg";
import boostteamwork from "../assets/boostteamwork.svg";
import staysecure from "../assets/staysecure.svg";
import fixwifi from "../assets/fixwifi.svg";
import plan from "../assets/plan.svg";
import converter from "../assets/converter.svg";
import manage from "../assets/manage.svg";
import codeeasier from "../assets/codeeasier.svg";
import macpaw from "../assets/macpaw.svg";

export default function HeroSection() {
  return (
    <main className="relative px-6 md:px-8 py-6 md:py-8 lg:py-20 overflow-hidden min-h-screen md:min-h-screen">
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex items-center justify-center">
        {/* Central Content - Compact and Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center pb-8 md:pb-12 lg:pb-20">
          {/* Logo - Top Center */}
          <div className="mb-4 md:mb-6 lg:mb-8 p-4 bg-black rounded-lg">
            <img
              src={logo}
              alt="Setapp Logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
          </div>
          {/* center content */}
          <div className="flex flex-col items-center justify-center max-w-[680px]">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-3 lg:mb-4 text-center leading-tight">
              Dozens of apps. One subscription.
            </h1>

            {/* Price */}
            <div className="mb-4 md:mb-5 lg:mb-7">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                $9.99
              </span>
            </div>

            {/* CTA Buttons and App Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 md:mb-5 lg:mb-6">
              <button className="bg-white hover:bg-[#4a4d50] text-[#26262B] px-6 md:px-8 py-3 md:py-3.5 rounded-lg text-base md:text-lg font-normal transition-colors">
                Try free for 7 days
              </button>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="py-[10px] px-[15px] bg-white rounded-lg transition-colors flex items-center justify-center"
                >
                  <img
                    src={appleIcon}
                    alt="Apple App Store"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white px-[15px] py-[10px] rounded-lg transition-colors flex items-center justify-center"
                >
                  <img
                    src={googleIcon}
                    alt="Google Play"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </a>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-center text-sm md:text-base text-gray-300">
              Power up your workflow with Setapp, a smart way to get apps.
            </p>
          </div>
          {/* center content ends */}
        </div>

        {/* Floating Bubble Images - Left Side */}
        <div className="hidden md:flex absolute left-0 md:left-[2%] top-0 flex-col gap-[110px] h-full z-0 pointer-events-none">
          {/* First Group - Overlapping workwithpics and pdf */}
          <div className="relative">
            <img
              src={workwithpics}
              alt="Work with pics"
              className="relative opacity-90 transform rotate-[15deg] z-10"
              style={{ width: "173px", height: "173px" }}
            />
            <img
              src={macpaw}
              alt="Macpaw"
              className="absolute right-[70%] top-[70%] opacity-90 transform -rotate-[10deg] z-20"
              style={{ width: "52px", height: "52px" }}
            />
            <img
              src={pdf}
              alt="VPN AD BLOCKER PDF"
              className="absolute left-[38%] top-[80%] opacity-90 transform -rotate-[10deg] z-20"
              style={{ width: "142px", height: "142px" }}
            />
          </div>

          {/* Second Group - Overlapping boostteamwork and staysecure */}
          <div className="relative mt-8">
            <img
              src={boostteamwork}
              alt="Boost teamwork"
              className="relative opacity-90 transform -rotate-[8deg] z-10"
              style={{ width: "227px", height: "114px" }}
            />
            <img
              src={staysecure}
              alt="Stay secure"
              className="absolute left-[10%] top-[85%] opacity-90 transform rotate-[8deg] z-20"
              style={{ width: "175px", height: "175px" }}
            />
          </div>
        </div>

        {/* Floating Bubble Images - Right Side */}
        <div className="hidden absolute right-0 md:right-[2%] top-0 md:flex flex-col gap-[110px] h-full z-0 pointer-events-none">
          {/* First Group - Overlapping fixwifi and plan */}
          <div className="relative">
            <img
              src={fixwifi}
              alt="Fix wifi"
              className="relative opacity-90 z-10"
              style={{ width: "173px", height: "173px" }}
            />
            <img
              src={plan}
              alt="Plan your day"
              className="absolute left-[-20%] top-[60%] opacity-90 transform rotate-[12deg] z-20"
              style={{ width: "227px", height: "114px" }}
            />
          </div>

          {/* Second Group - Overlapping manage, converter, and codeeasier */}
          <div className="relative">
            <img
              src={manage}
              alt="Manage your Mac"
              className="relative opacity-90  z-10 mr-4"
              style={{ width: "175px", height: "175px" }}
            />
            <img
              src={converter}
              alt="Convert HEIC to JPG"
              className="absolute right-0 -top-[40%] opacity-90 transform -rotate-[8deg] z-20"
              style={{ width: "142px", height: "142px" }}
            />
            <img
              src={codeeasier}
              alt="Code easier"
              className="absolute left-0 top-[70%] opacity-90 transform  z-20"
              style={{ width: "152px", height: "153px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
