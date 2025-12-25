import { useState } from 'react';
import { testimonialCards } from '../data/testimonials';
import { getSocialIcon } from '../utils/socialIcons';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

export default function UserTestimonialsSection() {
  const [currentTestimonialCard, setCurrentTestimonialCard] = useState(0);

  const nextTestimonialCard = () => {
    setCurrentTestimonialCard((prev) => (prev + 1) % testimonialCards.length);
  };

  const prevTestimonialCard = () => {
    setCurrentTestimonialCard((prev) => (prev - 1 + testimonialCards.length) % testimonialCards.length);
  };

  const goToTestimonialCard = (index: number) => {
    setCurrentTestimonialCard(index);
  };

  return (
    <div className="border-t border-[#FEFEFE] bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-6 md:py-8 lg:py-16 md:pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex-1 text-center md:text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl text-center md:text-center lg:text-left md:text-4xl lg:text-5xl font-bold text-[#26262B]">
              Setapp in your words.
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-center lg:items-end gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-center lg:justify-end gap-3 md:gap-4 lg:gap-6">
              <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center md:text-center lg:text-right">
                What you say about how Setapp <br className="hidden sm:block" /> powers you up.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-2 md:gap-3">
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <img src={facebookIcon} alt="Facebook" className="w-full h-full" />
                </a>
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <img src={twitterIcon} alt="Twitter" className="w-full h-full" />
                </a>
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <img src={instagramIcon} alt="Instagram" className="w-full h-full" />
                </a>
                <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <img src={youtubeIcon} alt="YouTube" className="w-full h-full" />
                </a>
              </div>
            </div>
            {/* Navigation Arrows */}
            <div className="flex items-center justify-center md:justify-center lg:justify-end gap-2">
              <button
                onClick={prevTestimonialCard}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonialCard}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Carousel - Shows 3 cards at once */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-between">
            {testimonialCards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]">
                {/* Card Container - Grayish Background */}
                <div className="bg-gray-700 rounded-lg border border-gray-200 overflow-hidden">
                  {/* Inner Colored Background Section with Quote */}
                  <div className={`${card.bgColor} p-4 md:p-6 lg:p-8 min-h-[180px] md:min-h-[200px]`}>
                    <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                      {card.quote}
                    </p>
                  </div>
                  {/* Author Info Section - White Background */}
                  <div className="bg-gray-200 p-3 md:p-4 lg:p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-sm md:text-base">{card.name}</p>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">{card.handle}</p>
                    </div>
                    {/* Social Media Icon on Right */}
                    <div className="ml-3 md:ml-4">
                      {getSocialIcon(card.socialIcon)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 border-b border-gray-700 pb-6 md:pb-8">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonialCard(Math.min(index, testimonialCards.length - 1))}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonialCard ? 'bg-black' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

