import { ArrowRight, Image as ImageIcon, Layout } from "lucide-react";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";

export function Hero() {
    return (
        <div className='relative min-h-screen w-full bg-gradient-to-tr from-blue-950 to-blue-700'>
            <div className='relative z-10 pb-16 px-4 sm:px-6 lg:px-8'>
                <Navbar />

                <div className='max-w-7xl mx-auto pt-12 md:pt-44'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src='/logos/logo-light.svg'
                            width={200}
                            height={200}
                            alt='Brushly'
                            className='md:hidden pb-8'
                        />
                    </div>
                    <div className='text-center'>
                        <h1 className='relative z-10 text-5xl md:text-6xl font-bold text-[#03045e] mb-6'>
                            <TextGenerateEffect
                                words={"Designing made simple for everyone"}
                            />
                        </h1>
                        <p className='relative z-10 text-blue-50 text-xl w-3/4 md:w-1/2 font-light mx-auto pt-4'>
                            Create stunning designs effortlessly with Brushify —
                            the free, open-source alternative to Canva. No
                            hidden fees, no gimmicks — just pure creativity.
                        </p>
                        <div className='relative z-10 flex justify-center gap-4 pt-12'>
                            <Link
                                href='https://x.com/zaidahmad25'
                                className='bg-[#03045e] text-white px-8 py-3 rounded-lg hover:bg-[#0077b6] transition-colors flex items-center gap-2 shadow-lg'
                            >
                                Follow the journey
                                <ArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>

                    <div className='relative z-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                        <div className='bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20'>
                            <Layout className='w-12 h-12 text-[#00b4d8] mb-4' />
                            <h3 className='text-xl font-semibold text-white mb-4'>
                                Easy to Use Interface
                            </h3>
                            <p className='text-blue-100 mb-6'>
                                Intuitive design tools that make creating
                                beautiful graphics a breeze.
                            </p>
                            <div className='rounded-xl overflow-hidden bg-transparent'>
                                <Image
                                    src='/etu.png'
                                    alt='Brushly UI Interface'
                                    className='w-full h-auto'
                                    width={800}
                                    height={500}
                                />
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20'>
                            <ImageIcon className='w-12 h-12 text-[#00b4d8] mb-4' />
                            <h3 className='text-xl font-semibold text-white mb-4'>
                                Multiple Export Options
                            </h3>
                            <p className='text-blue-100 mb-6'>
                                Export your designs in various formats with
                                customizable quality settings.
                            </p>
                            <div className='rounded-xl overflow-hidden bg-transparent'>
                                <Image
                                    src='/mco.png'
                                    alt='Export Options Interface'
                                    className='w-full h-auto'
                                    width={800}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
