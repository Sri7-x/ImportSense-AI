import { useState, useEffect } from 'react';

const DEMO_PRODUCTS = [
    { id: 'airpods-pro', name: 'Apple AirPods Pro', emoji: '🎧', url: 'https://amazon.com/airpods-pro-2nd-generation' },
    { id: 'logitech-mx', name: 'Logitech MX Master 3S', emoji: '🖱️', url: 'https://amazon.com/logitech-mx-master-3s-mouse' },
    { id: 'nike-shoes', name: 'Nike Air Max 90', emoji: '👟', url: 'https://nike.com/air-max-90-sneakers' },
    { id: 'vitamin-d', name: 'Vitamin D3 Supplements', emoji: '💊', url: 'https://iherb.com/vitamin-d3-supplement' },
    { id: 'samsung-watch', name: 'Samsung Galaxy Watch 6', emoji: '⌚', url: 'https://samsung.com/galaxy-watch-6-classic' },
    { id: 'shein-dress', name: 'SHEIN Maxi Dress', emoji: '👗', url: 'https://shein.com/floral-dress-fashion' },
];

export default function LandingPage({ onAnalyze, error }) {
    const [url, setUrl] = useState('');
    const [showDemo, setShowDemo] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.trim()) {
            onAnalyze(url.trim());
        }
    };

    const handleDemoClick = (demoUrl) => {
        setUrl(demoUrl);
        onAnalyze(demoUrl);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ background: 'rgba(15, 12, 41, 0.8)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🌍</span>
                    <span className="text-xl font-bold gradient-text">ImportSense AI</span>
                </div>
                <div className="flex gap-4 text-sm text-gray-400">
                    <span className="cursor-pointer hover:text-white transition-colors">How it works</span>
                    <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setShowDemo(!showDemo)}>Demo</span>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mt-16 animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                    <span className="text-xs font-semibold tracking-wide text-indigo-300">🤖 MULTI-AGENT AI SYSTEM</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                    <span className="text-white">Know the </span>
                    <span className="gradient-text">Real Cost</span>
                    <br />
                    <span className="text-white">Before You Import</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Paste any product link from AliExpress, Amazon US, Shein, or iHerb — our 6 AI agents will calculate
                    the <span className="text-indigo-300 font-medium">true landed cost</span>, compare with Indian prices,
                    and give you a smart recommendation.
                </p>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6" id="analyze-form">
                    <div className="glass-card flex flex-col sm:flex-row items-stretch gap-3 p-3">
                        <div className="flex-1 flex items-center gap-3 px-4">
                            <span className="text-xl">🔗</span>
                            <input
                                id="product-url-input"
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Paste a product link from any international marketplace..."
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-base py-3"
                            />
                        </div>
                        <button
                            id="analyze-button"
                            type="submit"
                            disabled={!url.trim()}
                            className="btn-gradient px-8 py-3 rounded-xl text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            ✨ Analyze Cost
                        </button>
                    </div>
                </form>

                {/* Error message */}
                {error && (
                    <div className="max-w-2xl mx-auto mb-4 px-4 py-3 rounded-xl text-red-300 text-sm" style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                        ⚠️ {error}
                    </div>
                )}

                {/* Demo Products Button */}
                <button
                    id="demo-toggle"
                    onClick={() => setShowDemo(!showDemo)}
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer font-medium"
                >
                    {showDemo ? '▲ Hide' : '▼ Try'} demo products for quick testing
                </button>
            </div>

            {/* Demo Products Grid */}
            {showDemo && (
                <div className="max-w-4xl mx-auto mt-8 animate-fade-in">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {DEMO_PRODUCTS.map((product) => (
                            <button
                                key={product.id}
                                id={`demo-${product.id}`}
                                onClick={() => handleDemoClick(product.url)}
                                className="glass-card p-4 text-left cursor-pointer hover:border-indigo-500/40 transition-all group"
                            >
                                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{product.emoji}</span>
                                <span className="text-sm font-semibold text-white">{product.name}</span>
                                <span className="text-xs text-gray-500 mt-1 block truncate">{product.url}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Features Grid */}
            <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in animate-delay-3">
                <div className="glass-card p-6 text-center">
                    <div className="text-3xl mb-3">🔍</div>
                    <h3 className="font-semibold text-white mb-2">Smart Extraction</h3>
                    <p className="text-sm text-gray-400">AI agents extract product details, pricing, and category from any link</p>
                </div>
                <div className="glass-card p-6 text-center">
                    <div className="text-3xl mb-3">🏛️</div>
                    <h3 className="font-semibold text-white mb-2">Customs Intelligence</h3>
                    <p className="text-sm text-gray-400">Calculates exact customs duty, IGST, and shipping costs for India</p>
                </div>
                <div className="glass-card p-6 text-center">
                    <div className="text-3xl mb-3">💡</div>
                    <h3 className="font-semibold text-white mb-2">AI Recommendation</h3>
                    <p className="text-sm text-gray-400">Get a clear Import or Buy Locally recommendation with savings data</p>
                </div>
            </div>

            {/* Agent Pipeline Visual */}
            <div className="max-w-4xl mx-auto mt-16 animate-fade-in animate-delay-5">
                <h3 className="text-center text-sm font-semibold text-gray-500 mb-6 tracking-widest uppercase">6-Agent AI Pipeline</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        { name: 'Product', icon: '📦' },
                        { name: 'Currency', icon: '💱' },
                        { name: 'Duty', icon: '🏛️' },
                        { name: 'Price Compare', icon: '📊' },
                        { name: 'Risk', icon: '⚠️' },
                        { name: 'Recommend', icon: '🎯' },
                    ].map((agent, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="glass-card px-4 py-2 flex items-center gap-2 text-sm">
                                <span>{agent.icon}</span>
                                <span className="font-medium text-gray-300">{agent.name}</span>
                            </div>
                            {i < 5 && <span className="text-indigo-400 text-lg">→</span>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-center text-xs text-gray-600 pb-8">
                <p>Built with ❤️ for Hackathon | Multi-Agent AI Architecture</p>
            </footer>
        </div>
    );
}
