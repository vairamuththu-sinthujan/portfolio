'use client'

import React, { useState, useEffect } from 'react';

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Loading');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 3;
            });
        }, 150);

        const textInterval = setInterval(() => {
            setLoadingText(prev => {
                if (prev === 'Loading...') return 'Loading';
                return prev + '.';
            });
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-white animate-pulse"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '3s'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white opacity-5 animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${20 + Math.random() * 40}px`,
                            height: `${20 + Math.random() * 40}px`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '4s',
                            transform: 'rotate(45deg)'
                        }}
                    />
                ))}
            </div>

            {/* Main Loading Container */}
            <div className="relative z-10 text-center">
                {/* Central Logo/Icon Area */}
                <div className="mb-12">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        {/* Spinning Outer Ring */}
                        <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin" />

                        {/* Pulsing Inner Circle */}
                        <div className="absolute inset-3 bg-white rounded-full animate-pulse opacity-80" />

                        {/* Central Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Text */}
                    <h1 className="text-4xl font-thin text-white tracking-[0.3em] mb-2 animate-pulse">
                        PORTFOLIO
                    </h1>
                    <div className="w-32 h-px bg-white mx-auto animate-pulse" />
                </div>

                {/* Progress Section */}
                <div className="w-80 mx-auto">
                    {/* Progress Bar */}
                    <div className="relative mb-6">
                        <div className="w-full h-px bg-white bg-opacity-20">
                            <div
                                className="h-full bg-white transition-all duration-300 ease-out relative"
                                style={{ width: `${progress}%` }}
                            >
                                {/* Glowing effect */}
                                <div className="absolute right-0 top-0 w-4 h-px bg-white blur-sm opacity-80" />
                            </div>
                        </div>

                        {/* Progress Percentage */}
                        <div className="flex justify-between mt-4 text-sm font-mono">
                            <span className="text-white opacity-60">{loadingText}</span>
                            <span className="text-white opacity-80">{Math.floor(progress)}%</span>
                        </div>
                    </div>

                    {/* Loading Steps */}
                    <div className="space-y-3 text-left">
                        {[
                            { step: 'Initializing', delay: 0 },
                            { step: 'Loading assets', delay: 1 },
                            { step: 'Preparing experience', delay: 2 },
                            { step: 'Almost ready', delay: 3 }
                        ].map((item, index) => (
                            <div
                                key={item.step}
                                className={`flex items-center space-x-3 transition-opacity duration-500 ${
                                    progress > index * 25 ? 'opacity-100' : 'opacity-30'
                                }`}
                                style={{
                                    transitionDelay: `${item.delay * 0.5}s`
                                }}
                            >
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    progress > index * 25 ? 'bg-white' : 'bg-white bg-opacity-30'
                                }`} />
                                <span className="text-white text-sm font-light tracking-wide">
                  {item.step}
                </span>
                                {progress > index * 25 && (
                                    <div className="flex space-x-1 ml-auto">
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Signature */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="text-white opacity-40 text-xs font-mono tracking-widest animate-pulse">
                        CRAFTED WITH PRECISION
                    </div>
                </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-ping"
                     style={{ animationDuration: '4s' }} />
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-white opacity-30" />
            <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-white opacity-30" />
            <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-white opacity-30" />
            <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-white opacity-30" />
        </div>
    );
}