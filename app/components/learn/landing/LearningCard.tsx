import {GoArrowUpRight} from "react-icons/go";

const LearningCard = ({
                          href,
                          title,
                          description,
                          icon,
                          tags = [],
                          delay = 0,
                          isComingSoon = false
                      }) => {
    const CardWrapper = href ? 'a' : 'div';

    if (isComingSoon) {
        return (
            <div
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 border-dashed rounded-2xl p-6 sm:p-8 opacity-60 animate-fade-in-up"
                style={{ animationDelay: `${delay}ms` }}
            >
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
        );
    }

    return (
        <CardWrapper
            href={href}
            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up block"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>

            <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className={`w-14 h-14 mb-6 rounded-xl ${icon.gradient} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {icon.svg}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-between">
                    {title}
                    <GoArrowUpRight className="w-6 h-6 text-cyan-400 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                {/* Description */}
                <p className="text-blue-200/70 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 text-xs rounded-full ${tag.color} backdrop-blur-sm`}
                            >
                {tag.label}
              </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
        </CardWrapper>
    );
};

export default LearningCard;