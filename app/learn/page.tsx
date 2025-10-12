import { Sparkles } from 'lucide-react';
import LearningCard from "../components/learn/landing/LearningCard";
import StatCard from "../components/learn/landing/StatCard";

const LearningHubPage = () => {
    // Learning resources data
    const learningResources = [
        {
            href: '/learn/spring-annotation',
            title: 'Spring Boot Annotations',
            description: 'Comprehensive guide to Spring Boot annotations with examples and best practices.',
            icon: {
                gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
                svg: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                )
            },
            tags: [
                { label: 'Java', color: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' },
                { label: 'Spring Boot', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30' },
                { label: 'Backend', color: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' }
            ],
            delay: 0
        },
        {
            href: '/learn/java-oop',
            title: 'Java OOP Concepts',
            description: 'Master classes, abstract classes, and interfaces with real-world examples and comparisons.',
            icon: {
                gradient: 'bg-gradient-to-br from-purple-500 to-violet-600',
                svg: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                )
            },
            tags: [
                { label: 'Java', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
                { label: 'OOP', color: 'bg-violet-500/20 text-violet-300 border border-violet-500/30' },
                { label: 'Fundamentals', color: 'bg-pink-500/20 text-pink-300 border border-pink-500/30' }
            ],
            delay: 100
        }
    ];

    const stats = [
        { value: '2', label: 'Topics Available', delay: 600 },
        { value: '∞', label: 'More Coming', delay: 700 },
        { value: '100%', label: 'Free Access', delay: 800 },
        { value: '24/7', label: 'Available', delay: 900 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4 md:p-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header with glass effect */}
                <div className="text-center mb-12 pt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="text-cyan-400 text-sm font-medium">Learning Resources</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-fade-in delay-200">
                        Learning Hub
                    </h1>
                    <p className="text-blue-200/80 text-lg max-w-2xl mx-auto animate-fade-in delay-400">
                        Explore my curated collection of learning resources and notes. Dive deep into various technologies and concepts.
                    </p>
                </div>

                {/* Learning Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {learningResources.map((resource, index) => (
                        <LearningCard key={index} {...resource} />
                    ))}

                    {/* Coming Soon Cards */}
                    <LearningCard
                        href={null}
                        title={'Coming Soon'}
                        description={'More learning resources will be added here soon.'}
                        icon={null}
                        isComingSoon={true}
                        delay={200} />
                </div>

                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-12 text-center animate-fade-in delay-1000">
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

export default LearningHubPage;