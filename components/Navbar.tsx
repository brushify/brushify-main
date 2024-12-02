"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Rocket, Sparkles, Github } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className='fixed w-full top-0 z-50 hidden md:block'>
                <div className='max-w-7xl mx-auto px-6 py-4 mt-4'>
                    <div
                        className={`backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 ${
                            scrolled ? "bg-white/65 shadow-lg" : "bg-white/30"
                        }`}
                    >
                        <div className='flex items-center justify-between h-16 px-6'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={
                                        scrolled
                                            ? "/logos/logo.svg"
                                            : "/logos/logo-light.svg"
                                    }
                                    width={150}
                                    height={150}
                                    alt='Brushly'
                                    className='hover:opacity-80 transition-opacity'
                                />
                            </div>
                            <div className='flex items-center gap-8'>
                                <a
                                    href='#features'
                                    className={`font-medium transition-colors flex items-center gap-2 ${
                                        scrolled
                                            ? "text-gray-800 hover:text-blue-600"
                                            : "text-white hover:text-blue-100"
                                    }`}
                                >
                                    <Sparkles className='w-5 h-5' />
                                    Features
                                </a>
                                <Link
                                    href='https://github.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`font-medium transition-colors flex items-center gap-2 ${
                                        scrolled
                                            ? "text-gray-800 hover:text-blue-600"
                                            : "text-white hover:text-blue-100"
                                    }`}
                                >
                                    <Github className='w-5 h-5' />
                                    GitHub
                                </Link>
                                <Link
                                    href='https://x.com/intent/user?screen_name=zaidahmad25'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className={`px-6 py-2 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2 ${
                                        scrolled
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-white text-blue-600 hover:bg-blue-50"
                                    }`}
                                >
                                    <Rocket className='w-5 h-5' />
                                    Follow the journey
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className='fixed bottom-0 left-0 right-0 z-50 md:hidden'>
                <div className='px-4 py-2 bg-white/80 backdrop-blur-lg border-t'>
                    <div className='flex items-center justify-around'>
                        <a
                            href='#features'
                            className='flex flex-col items-center p-2 text-gray-700 hover:text-blue-600'
                        >
                            <Sparkles className='w-6 h-6' />
                            <span className='text-xs mt-1'>Features</span>
                        </a>
                        <a
                            href='https://github.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-col items-center p-2 text-gray-700 hover:text-blue-600'
                        >
                            <Github className='w-6 h-6' />
                            <span className='text-xs mt-1'>GitHub</span>
                        </a>
                        <Link
                            href='https://x.com/intent/user?screen_name=zaidahmad25'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='flex flex-col items-center p-2 text-gray-700 hover:text-blue-600'
                        >
                            <Rocket className='w-6 h-6' />
                            <span className='text-xs mt-1'>Follow</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
