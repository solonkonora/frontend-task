"use client";

import { Button } from "@/components/ui/button";
import { Bell, User, Zap, Brain, Compass, Camera, Settings, Images, HelpCircle, ChevronDown, Home, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle theme in your app
    document.documentElement.classList.toggle('dark');
  };
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/Krea.png"
              alt="Krea AI"
              width={32}
              height={32}
              className="rounded"
            />
          </div>

          {/* Current User Display */}
          <div className="hidden md:flex items-center space-x-3 ml-6 px-3 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">john@example.com</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

        </div>

        {/* Center Section*/}
        <div className="hidden md:flex items-center space-x-8 bg-gray-100 rounded-lg px-2 py-2">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors bg-white rounded-md p-2">
            <Home className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Zap className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Brain className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Compass className="w-4 h-4" />
          </a>
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Camera className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Settings className="w-4 h-4" />           
          </a>
        </div>

        {/* Notifications, Profile */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1 items-center bg-gray-100 rounded-lg py-2 px-2">
            <Images className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Gallery</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 items-center bg-gray-100 rounded-lg py-2 px-2">
            <HelpCircle className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Support</span>
          </div>

          <Button variant="ghost" size="sm" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Bell className="w-4 h-4 text-gray-600" />
          </Button>

          {/* Theme Switcher */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-gray-600" />
            )}
          </Button>

           <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium"></span>
            </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2 bg-white rounded-md p-2">
            <Home className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Zap className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Brain className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Compass className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Camera className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Settings className="w-4 h-4" />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
