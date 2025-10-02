import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import {Metadata} from "next";

export const metadata  : Metadata= {
    title: 'sinthujan | learning hub',
    description: 'learn something new with me.',
};

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4 md:p-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header with glass effect */}
                <div className="text-center mb-12 pt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 text-sm font-medium">Learning Resources</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-fade-in [animation-delay:200ms]">
                        Learning Hub
                    </h1>
                    <p className="text-blue-200/80 text-lg max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
                        Explore my curated collection of learning resources and notes. Dive deep into various technologies and concepts.
                    </p>
                </div>

                {/* Learning Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Spring Boot Annotations Card */}
                    <Link
                        href="/learn/spring-annotation"
                        className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up"
                    >
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>

                        <div className="relative p-6 sm:p-8">
                            {/* Icon */}
                            <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-between">
                                Spring Boot Annotations
                                <GoArrowUpRight className="w-6 h-6 text-cyan-400 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>

                            {/* Description */}
                            <p className="text-blue-200/70 text-sm mb-4 leading-relaxed">
                                Comprehensive guide to Spring Boot annotations with examples and best practices.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                                    Java
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                                    Spring Boot
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-sm">
                                    Backend
                                </span>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                    {/* Coming Soon Card 1 */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 border-dashed rounded-2xl p-6 sm:p-8 opacity-60 animate-fade-in-up [animation-delay:200ms]">
                        <div className="w-14 h-14 mb-6 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10">
                            <svg className="w-8 h-8 text-blue-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-200/60">
                            Coming Soon
                        </h3>
                        <p className="text-blue-200/50 text-sm leading-relaxed">
                            More learning resources will be added here soon.
                        </p>
                    </div>

                    {/* Coming Soon Card 2 */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 border-dashed rounded-2xl p-6 sm:p-8 opacity-60 animate-fade-in-up [animation-delay:400ms]">
                        <div className="w-14 h-14 mb-6 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10">
                            <svg className="w-8 h-8 text-blue-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-200/60">
                            Coming Soon
                        </h3>
                        <p className="text-blue-200/50 text-sm leading-relaxed">
                            More learning resources will be added here soon.
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fade-in-up [animation-delay:600ms]">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">1</div>
                        <div className="text-blue-200/60 text-sm">Topics Available</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fade-in-up [animation-delay:700ms]">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">∞</div>
                        <div className="text-blue-200/60 text-sm">More Coming</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fade-in-up [animation-delay:800ms]">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">100%</div>
                        <div className="text-blue-200/60 text-sm">Free Access</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fade-in-up [animation-delay:900ms]">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">24/7</div>
                        <div className="text-blue-200/60 text-sm">Available</div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center animate-fade-in [animation-delay:1000ms]">
                    <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                        <p className="text-blue-200/60 text-sm">
                            Created with ❤ for learners
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;