"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Array of available videos
  const videos = [
    "/social_u2177861489_httpss.mj.runaYT_zClo0so_Chilling_gaming_room_the_afb50633-6fa3-4278-91a6-fcd6c8451949_2.mp4",
    "/social_u2177861489_httpss.mj.runaYT_zClo0so_Create_a_chilling_gaming_8c607097-256b-4ae7-8739-63a2dfea0bf2_0.mp4",
    "/social_u2177861489_httpss.mj.runaYT_zClo0so_Create_a_chilling_gaming_8c607097-256b-4ae7-8739-63a2dfea0bf2_3.mp4"
  ];

  // Random video selection on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(videos[randomIndex]);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    // Set fixed target date - Change this to your desired launch date
    const targetDate = new Date("2025-07-31T00:00:00+07:00").getTime(); // Đặt ngày 1/6/2025 múi giờ VN

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        // Timer has reached zero - Launch time!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Chạy ngay lập tức
    updateTimer();

    // Sau đó cập nhật mỗi giây
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Video */}
      {currentVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80"></div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-1"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse z-1"></div>
      <div className="absolute top-0 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000 z-1"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 md:w-72 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000 z-1"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Brand */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 animate-pulse group-hover:animate-spin transition-all duration-1000"></div>

            {/* Particle effects */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute bottom-3 left-4 w-0.5 h-0.5 bg-pink-300 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping animation-delay-1500"></div>
            </div>

            {/* Main icon */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto transform hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 border border-white/20 backdrop-blur-sm group-hover:bg-gradient-to-tl group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500">
              {/* Inner glow */}
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-lg sm:rounded-xl"></div>

              {/* The Logo with special effects */}
              <div className="relative transform group-hover:scale-125 transition-transform duration-300">
                <Image
                  src="/logo-sone.jpeg"
                  alt="Sone Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover drop-shadow-lg group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Sparkle effects */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-white transform rotate-45 animate-ping"></div>
              </div>
              <div className="absolute bottom-1 left-1 w-1 h-1 sm:w-1.5 sm:h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-200">
                <div className="w-full h-full bg-yellow-300 transform rotate-45 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg font-display">
            SONE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2 drop-shadow-md font-medium">
            Something Amazing is Coming
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md mx-auto drop-shadow-sm italic px-2">
            "We're building something special. Sign up to be the first to know when we launch!"
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 sm:mb-12 animate-slide-up animation-delay-300">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center max-w-sm sm:max-w-none mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/15 backdrop-blur-md rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] border border-white/20 shadow-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md font-display">{value}</div>
                <div className="text-xs sm:text-sm text-gray-200 capitalize font-medium">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription */}
        <div className="mb-8 sm:mb-12 w-full max-w-xs sm:max-w-md px-4 sm:px-0 animate-slide-up animation-delay-600">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 shadow-lg text-sm sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-display text-sm sm:text-base"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-4 sm:p-6 shadow-lg">
              <div className="text-green-200 text-base sm:text-lg font-semibold mb-2 font-display">
                Thank You! 🎉
              </div>
              <p className="text-gray-200 text-sm sm:text-base">
                We'll notify you when we launch.
              </p>
            </div>
          )}
        </div>

        {/* Social Link - X Only */}
        <div className="flex justify-center animate-slide-up animation-delay-900">
          <a
            href="https://x.com/Sone_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transform hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Video Indicator */}
        <div className="mt-6 sm:mt-8 animate-slide-up animation-delay-1200">
          <div className="flex space-x-2 justify-center">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${currentVideo === videos[index]
                  ? 'bg-white shadow-lg'
                  : 'bg-white/30'
                  }`}
              />
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-2">
            Refresh to see a different video
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4">
          <p className="text-gray-300 text-xs sm:text-sm drop-shadow-sm">
            © 2025 Sone. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
