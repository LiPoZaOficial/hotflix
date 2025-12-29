
import React, { useRef } from 'react';
import { CATEGORIES } from '../constants';

const ContentGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 overflow-hidden flex flex-col relative bg-[#0c0c0c] pt-16">
      {/* Banner */}
      <section className="h-64 bg-black flex items-center justify-center shrink-0 border-b border-white/5">
        <h1 className="text-8xl font-black text-red-600 tracking-tighter drop-shadow-2xl animate-pulse">
          HOTSHORTS
        </h1>
      </section>

      {/* Grid Controls */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-8 z-10 pointer-events-none">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 border border-white/5"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 border border-white/5"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden flex items-stretch gap-0 no-scrollbar pb-10"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {CATEGORIES.map((card) => (
          <div 
            key={card.id} 
            className="h-full min-w-[320px] max-w-[400px] flex-1 relative group cursor-pointer border-r border-white/5 overflow-hidden bg-[#111111]"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none transition-all duration-500 group-hover:opacity-30 group-hover:scale-110">
               <i className="fa-solid fa-clapperboard text-[150px] rotate-12"></i>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Decorative Hover Element (Replacing text) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.4)]">
                  <i className="fa-solid fa-play text-white text-2xl ml-1"></i>
               </div>
            </div>

            {/* Hover Indicator Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
        ))}
      </div>

      {/* Bottom Nav Arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <div 
          onClick={() => scroll('left')}
          className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white/50 border-b-[8px] border-b-transparent cursor-pointer hover:border-r-red-600 transition-colors"
        ></div>
        <div 
          onClick={() => scroll('right')}
          className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white/50 border-b-[8px] border-b-transparent cursor-pointer hover:border-l-red-600 transition-colors"
        ></div>
      </div>
    </main>
  );
};

export default ContentGrid;
