const StatCard = ({ value, label, delay = 0 }) => (
    <div
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            {value}
        </div>
        <div className="text-blue-200/60 text-sm">{label}</div>
    </div>
);



export default StatCard;