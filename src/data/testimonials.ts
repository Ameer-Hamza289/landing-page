export type Testimonial = {
  quote: string;
  name: string;
}

export type TestimonialCard = {
  quote: string;
  name: string;
  handle: string;
  socialIcon: 'twitter' | 'instagram' | 'facebook';
  bgColor: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.",
    name: "Jason Staczek"
  },
  {
    quote: "Setapp has transformed how I work. All the tools I need in one place, saving me hours every week.",
    name: "Sarah Johnson"
  },
  {
    quote: "As a designer, Setapp gives me access to premium apps that would normally cost hundreds of dollars.",
    name: "Michael Chen"
  },
  {
    quote: "The best investment I've made for my Mac. Setapp pays for itself within the first month.",
    name: "Emily Rodriguez"
  }
];

export const testimonialCards: TestimonialCard[] = [
  {
    quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    socialIcon: "twitter",
    bgColor: "bg-[#8B7FA8]"
  },
  {
    quote: "Testing",
    name: "Ameer Hamza",
    handle: "@ArashPourhabibi",
    socialIcon: "twitter",
    bgColor: "bg-[#8B7FA8]"
  },
  {
    quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    socialIcon: "instagram",
    bgColor: "bg-[#D4A574]"
  },
  {
    quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Mauricio Sanchez",
    handle: "@ArashPourhabibi",
    socialIcon: "twitter",
    bgColor: "bg-[#8B7FA8]"
  },
  {
    quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    socialIcon: "facebook",
    bgColor: "bg-[#6B4C7A]"
  }
];

