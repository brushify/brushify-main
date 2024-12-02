import { Check, Download, Image as ImageIcon, Palette } from "lucide-react";
import React from "react";

export function Features() {
    return (
        <div
            id='features'
            className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50'
        >
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl font-bold text-center text-[#03045e] mb-20'>
                    Everything You Need for
                    <span className='block bg-gradient-to-r from-[#03045e] to-[#0077b6] bg-clip-text text-transparent mt-2'>
                        Professional Design
                    </span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    <div className='space-y-12'>
                        <div className='group p-6 rounded-xl transition-all duration-300'>
                            <div className='flex gap-6'>
                                <div className='flex-shrink-0'>
                                    <div className='p-3 bg-blue-50 rounded-lg'>
                                        <Palette className='w-8 h-8 text-[#0077b6]' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-[#03045e] mb-3'>
                                        Advanced Design Tools
                                    </h3>
                                    <p className='text-[#0077b6] leading-relaxed'>
                                        Access powerful design tools including
                                        layers, filters, and effects to create
                                        stunning visuals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='group p-6 rounded-xl transition-all duration-300'>
                            <div className='flex gap-6'>
                                <div className='flex-shrink-0'>
                                    <div className='p-3 bg-blue-50 rounded-lg'>
                                        <ImageIcon className='w-8 h-8 text-[#0077b6]' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-[#03045e] mb-3'>
                                        Extensive Asset Library
                                    </h3>
                                    <p className='text-[#0077b6] leading-relaxed'>
                                        Thousands of free elements, photos, and
                                        illustrations ready to enhance your
                                        designs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='group p-6 rounded-xl transition-all duration-300'>
                            <div className='flex gap-6'>
                                <div className='flex-shrink-0'>
                                    <div className='p-3 bg-blue-50 rounded-lg'>
                                        <Download className='w-8 h-8 text-[#0077b6]' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-[#03045e] mb-3'>
                                        Flexible Export Options
                                    </h3>
                                    <p className='text-[#0077b6] leading-relaxed'>
                                        Export your designs in multiple formats
                                        with customizable size and quality
                                        settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white border border-blue-100 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                        <h3 className='text-2xl font-bold text-[#03045e] mb-8'>
                            Why Choose Brushly?
                        </h3>
                        <ul className='space-y-6'>
                            {[
                                "100% Free and Open Source",
                                "No Account Required",
                                "Professional-Grade Tools",
                                "Regular Updates",
                                "Active Community",
                                "No Watermarks",
                            ].map((feature, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-4'
                                >
                                    <div className='p-1 bg-blue-50 rounded-full'>
                                        <Check className='w-5 h-5 text-[#0077b6]' />
                                    </div>
                                    <span className='text-[#03045e] text-lg'>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
