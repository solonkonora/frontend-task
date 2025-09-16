"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface HeroCard {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const heroCards: HeroCard[] = [
  {
    id: 1,
    tag: "TRENDING MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description: "Generate complex images with the Gan-2 rnn col powerful WAN 2.2 model. Enhanced prompt understanding and high quality outputs.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/wan2.jpg",
  },
  {
    id: 2,
    tag: "FLUX MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "White image in the second to FLUX.1 krea model public. Source control on your model training. Real-time technical report, opt.",
    buttonText: "Try FLUX.1",
    backgroundImage: "/wan1.jpg",
  },
  {
    id: 3,
    tag: "NEW MODEL",
    title: "DALLE 3",
    subtitle: "Advanced AI Generation",
    description: "Experience the next generation of AI image creation with DALLE 3. Superior quality and unprecedented creative control.",
    buttonText: "Try DALLE 3",
    backgroundImage: "/wan.jpg",
  }
];

const HeroSection = () => {
  // Remove discrete state management for true continuous scrolling
  const [isPlaying, setIsPlaying] = useState(true);

  // Pause/resume on hover for marquee
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Marquee-style Continuous Carousel */}
        <div 
          className="relative overflow-hidden rounded-2xl mb-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Continuous scrolling container */}
          <div 
            className={`flex ${isPlaying ? 'animate-marquee' : 'animate-marquee-paused'}`}
            style={{ 
              width: 'max-content',
            }}
          >
            {/* Duplicate cards multiple times for seamless infinite scroll */}
            {[...heroCards, ...heroCards, ...heroCards].map((card, index) => (
              <div 
                key={`${card.id}-${index}`}
                className="flex-shrink-0 mx-3"
                style={{ width: '66.67vw' }} // Each card takes 2/3 of viewport width
              >
                <div className="relative h-96 overflow-hidden rounded-xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.backgroundImage}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
               
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider text-background">
                        {card.tag}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <h2 className="text-white font-bold text-5xl leading-tight justify-center flex">
                        {card.title}
                      </h2>
                      
                      <h3 className="text-white/90 text-lg font-medium">
                        {card.subtitle}
                      </h3>
                      
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-3 w-1/2">
                          {card.description}
                        </p>
                        
                        <Button className="bg-background hover:bg-white/30 text-foreground px-4 py-2 font-medium text-sm font-semibold rounded-full flex-shrink-0">
                          {card.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots and controls */}
        <div className="flex items-center justify-between">
          <div className="flex justify-center flex-1">
            <div className="flex space-x-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 transition-colors"
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-0 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-0 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee-paused {
          animation: marquee 20s linear infinite;
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;