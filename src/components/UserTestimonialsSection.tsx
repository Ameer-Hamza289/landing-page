import { useRef, useEffect, useState } from "react";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
import { getSocialIcon } from "../utils/socialIcons";
import { testimonialCards } from "../data/testimonials";

export default function UserTestimonialsSection() {
  const [currentTestimonialCard, setCurrentTestimonialCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const calculateTranslate = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const isMobile = window.innerWidth < 768; // md breakpoint
        const gap = 8; // 0.5rem = 8px (gap-2)

        let translateValue: number;
        if (isMobile) {
          // On mobile: card is w-full, translate by full container width + gap
          translateValue = currentTestimonialCard * (containerWidth + gap);
        } else {
          // On desktop: 3 cards visible, card width is container / 3
          const cardWidth = containerWidth / 3;
          translateValue = currentTestimonialCard * (cardWidth + gap);
        }

        setTranslateX(-translateValue);
      }
    };

    calculateTranslate();
    window.addEventListener("resize", calculateTranslate);
    return () => window.removeEventListener("resize", calculateTranslate);
  }, [currentTestimonialCard]);

  // Calculate max index based on screen size
  const getMaxTestimonialIndex = () => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      return Math.max(0, testimonialCards.length - (isMobile ? 1 : 3));
    }
    return Math.max(0, testimonialCards.length - 3);
  };

  const nextTestimonialCard = () => {
    const maxIndex = getMaxTestimonialIndex();
    setCurrentTestimonialCard((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevTestimonialCard = () => {
    setCurrentTestimonialCard((prev) => Math.max(prev - 1, 0));
  };

  const goToTestimonialCard = (index: number) => {
    const maxIndex = getMaxTestimonialIndex();
    setCurrentTestimonialCard(Math.min(index, maxIndex));
  };

  return (
    <div className="border-t border-[#FEFEFE] bg-white px-6 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Setapp in your words.
            </h2>
          </div>
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-end gap-4 md:gap-6">
            <p className="text-base md:text-lg text-gray-600">
              What you say about how Setapp <br className="hidden sm:block" />{" "}
              powers you up.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex items-center justify-end gap-2 my-4">
          <button
            onClick={prevTestimonialCard}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonialCard}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial Cards Carousel - Shows 3 cards at once */}
        <div className="relative overflow-hidden mb-8" ref={carouselRef}>
          <div
            className="flex gap-2 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {testimonialCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-0.5rem)]"
              >
                {/* Card Container - Grayish Background */}
                <div className="bg-gray-700 rounded-lg border border-gray-200 overflow-hidden">
                  {/* Inner Colored Background Section with Quote */}
                  <div className={`${card.bgColor} p-6 md:p-8 min-h-[200px]`}>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      {card.quote}
                    </p>
                  </div>
                  {/* Author Info Section - White Background */}
                  <div className="bg-gray-200 p-4 md:p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-base">
                        {card.name}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {card.handle}
                      </p>
                    </div>
                    {/* Social Media Icon on Right */}
                    <div className="ml-4">{getSocialIcon(card.socialIcon)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToTestimonialCard(
                  Math.min(index, testimonialCards.length - 1)
                )
              }
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonialCard ? "bg-black" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
