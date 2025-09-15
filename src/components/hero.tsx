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
    backgroundImage: "/wan.jpg",
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
    backgroundImage: "/wan2.jpg",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroCards.map((card) => (
              <div key={card.id} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.backgroundImage}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={card.id === 1}
                    />
                  </div>
               
                  {/* background decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                    <div>
                      <span className="text-white/70 text-xs font-medium uppercase tracking-wider">{card.tag}</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-white text-6xl font-bold mb-6 leading-tight text-center">{card.title}</h2>
                      <h3 className="text-white text-2xl font-medium mb-4">{card.subtitle}</h3>
                      <div className="flex items-start justify-between">
                        <p className="text-white/80 text-base max-w-2xl leading-relaxed flex-1 mr-8">
                          {card.description}
                        </p>
                        <div className="flex-shrink-0">
                          <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 py-3 text-base font-medium">
                            {card.buttonText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* navigation overlay */}
        </div>

        <div className="flex items-center justify-between">
          {/* Dots Navigation */}
          <div className="flex justify-center flex-1">
            <div className="flex space-x-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Controls - Right */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={prevSlide}
              className="hover:bg-gray-100 p-3"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={nextSlide}
              className="hover:bg-gray-100 p-3"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;