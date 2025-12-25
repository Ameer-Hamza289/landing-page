import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import PersonSvg from '../assets/Person.svg';
import PlayButtonSvg from '../assets/PlayButton.svg';

export default function VideoTestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="min-h-[400px] md:min-h-[500px] lg:min-h-screen lg:h-screen bg-gradient-to-b from-[#2B2D32] from-50% to-[#FFFFFF] to-50% ">
        <div className="pt-6 bg-[#765070] relative mx-4 md:mx-8 rounded-xl">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full flex flex-col md:flex-row items-stretch min-h-[400px] md:min-h-[500px] rounded-t-xl overflow-hidden">
              {/* Navigation Arrows - Top Right - Positioned to avoid text overlap */}
              <div className="absolute right-2 md:right-4 top-2 md:top-4 flex flex-row gap-1 md:gap-2 z-30 pointer-events-auto">
                <button
                  onClick={prevSlide}
                  className=" rounded-full p-1 md:p-2 pl-6 md:pl-10 transition-colors pointer-events-auto"
                  aria-label="Previous slide"
                >
                  <svg className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className=" rounded-full p-1 md:p-2 transition-colors pointer-events-auto"
                  aria-label="Next slide"
                >
                  <svg className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Purple Card - Left Half */}
              <div className="relative md:w-1/2 z-10 flex flex-col justify-center p-6 md:p-8 lg:p-6 pr-20 md:pr-24 lg:pr-6 rounded-t-xl md:rounded-tr-none">
                <div>
                  <p className="text-white text-lg md:text-xl lg:text-3xl mb-4 md:mb-6 leading-relaxed">
                    {testimonials[currentSlide].quote}
                  </p>
                  <p className="text-[#FFFFFF] text-base md:text-lg lg:text-xl mb-4 md:mb-6">
                    {testimonials[currentSlide].name}
                  </p>

                  {/* Small Circular Profile Picture */}
                  <div className="mt-8 md:mt-12 lg:mt-16">
                    <div className="w-16 md:w-20 h-full">
                      <img
                        src={PersonSvg}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - White Background with Large Play Button */}
              <div className="relative md:w-1/2 flex items-center justify-center md:pt-6 md:pr-8 lg:pr-12 md:pb-0">
                {/* Large Play Button */}
                <div className="flex items-center justify-center w-full max-w-xs md:max-w-none">
                  <img
                    src={PlayButtonSvg}
                    alt="Play"
                    className="w-full h-full max-w-[200px] md:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="bg-white">
        <div className="flex justify-center gap-1 md:gap-1.5 lg:gap-2 pt-6 md:pt-8 lg:pt-4 pb-3 md:pb-3.5 lg:pb-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide || index === currentSlide + 1
                  ? 'bg-gray-200 border-2'
                  : 'bg-black'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

