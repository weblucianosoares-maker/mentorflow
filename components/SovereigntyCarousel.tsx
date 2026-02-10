import React, { useState, useEffect } from 'react';

interface CarouselBanner {
    id: number;
    title: string;
    caption: string;
    imageUrl: string;
}

const banners: CarouselBanner[] = [
    {
        id: 1,
        title: "Liberdade",
        caption: "Tempo para o que realmente importa.",
        imageUrl: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=1200&h=800&fit=crop&q=85" // Família feliz brincando na praia - pai, mãe e filhos desfrutando
    },
    {
        id: 2,
        title: "Poder",
        caption: "O comando nas suas mãos.",
        imageUrl: "/bmw-x7.png" // BMW X7 - SUV de luxo premium
    },
    {
        id: 3,
        title: "Reconhecimento",
        caption: "Autoridade que impõe respeito.",
        imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop&q=85" // Executivo palestrando em evento premium
    },
    {
        id: 4,
        title: "Ativo",
        caption: "Seu negócio trabalhando por você.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=85" // Dashboard de negócios e analytics premium
    }
];

export const SovereigntyCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000); // Troca suave a cada 5 segundos - tempo ideal para absorver a imagem

        return () => clearInterval(interval);
    }, []);

    const current = banners[currentIndex];

    return (
        <div className="relative w-full h-full">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/30 shadow-2xl h-full">
                {/* Image with smooth transition */}
                <div className="relative w-full h-full">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${index === currentIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-105'
                                }`}
                        >
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="space-y-2">
                        <h3 className="text-gold-400 font-serif font-bold text-2xl tracking-wide">
                            {current.title}
                        </h3>
                        <p className="text-white text-sm md:text-base font-medium italic">
                            "{current.caption}"
                        </p>
                    </div>
                </div>

                {/* Elegant corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-500/50"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-500/50"></div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-gold-500 w-8'
                            : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
