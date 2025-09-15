"use client";

import { Button } from "@/components/ui/button";
import { Search, Bell, User, Sparkles, Zap, Brain, Compass, Camera, Settings, Images, HelpCircle } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
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
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 bg-gray-100 rounded-lg px-3 py-2">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Sparkles className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Zap className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Brain className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            <Compass className="w-5 h-5" />
          </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Camera className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Settings className="w-5 h-5" />           
          </a>
        </div>

        {/* Right Section - Search, Notifications, Profile */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm placeholder-gray-500 w-40"
            />
          </div>

          <div className="hidden md:flex items-center space-x-1 items-center bg-gray-100 rounded-lg px-3 py-2">
            <Images className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Gallery</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 items-center bg-gray-100 rounded-lg px-3 py-2">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Support</span>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5 text-gray-600" />
          </Button>

          <Button variant="ghost" size="sm" className="p-2">
            <User className="w-5 h-5 text-gray-600" />
          </Button>

          <Button variant="ghost" size="sm" className="md:hidden p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Sparkles className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Zap className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Brain className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Compass className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Camera className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium py-2">
            <Settings className="w-5 h-5" />
          </a>
          
          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mt-3">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm placeholder-gray-500 flex-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
