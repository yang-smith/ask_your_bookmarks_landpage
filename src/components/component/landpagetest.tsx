import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers';
import WaitlistPopup from "./WaitlistPopup";
import Twitter from '../svgs/twitter'

export function Landpage() {
    const [showPopup, setShowPopup] = useState(false);
    const handleWaitlistClick = () => {
        setShowPopup(true);
    };


    return (
        <section className="relative py-12 sm:py-16 lg:pb-40">
            <div className="absolute bottom-0 right-0 overflow-hidden">
                <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
            </div>
            <div className="absolute px-4 mx-4 top-4 flex">
                <img className="mr-2 w-5 h-5 text-[#FDB241]" src="bookmark-svgrepo-com.svg" alt="AI-Powered Bookmark Assistant" />
                <p className="text-s text-gray-500">BookmarkBot</p>
            </div>


            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                    <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">
                            Smart & Efficient Bookmark Assitant</h1>
                        <p className="mt-1 text-lg text-gray-600 sm:mt-4 font-inter">
                            Struggling with a cluttered Google Chrome bookmarks bar? Our plugin transforms the chaos into clarity. Forget sifting through hundreds of bookmarks; simply describe what you're looking for, however vaguely remembered, and let our AI do the rest. It adapts to your habits, prioritizing what matters most to you. Say goodbye to the mess and hello to a smarter, organized browsing experience.
                        </p>

                        <a href="#" title="" onClick={handleWaitlistClick} className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Join the waitlist
                        </a>

                        <div className="mt-8 sm:mt-16">
                            <div className="flex items-center justify-center lg:justify-start">
                                <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                                <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                                <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                                <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                                <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center justify-center mt-3 lg:justify-start">
                                <a href="https://twitter.com/jordenAAA" target="_blank" rel="noopener noreferrer" className="w-6 h-6 mr-2">
                                    <Twitter className="w-full h-full" />
                                </a>
                                <a href="https://twitter.com/jordenAAA" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <span className="ml-2 text-base font-bold text-gray-900 font-pj">AutumnRiver</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
                    <div className="xl:col-span-1">
                        {/* <img className="w-full mx-auto" src="/bookmarks.png" alt="" /> */}
                        <video className="w-full mx-auto" controls autoPlay>
                            <source src="/bookmarks.mp4" type="video/mp4" />
                            您的瀏覽器不支持Video標籤。
                        </video>
                    </div>
                </div>
            </div>
        </section>

    )
}