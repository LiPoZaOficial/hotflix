
import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './constants';
import { ContentCard } from './types';

const App: React.FC = () => {
  const [gridData, setGridData] = useState<ContentCard[]>([]);
  const [siteName, setSiteName] = useState('HOTFLIX');
  const [siteSubtitle, setSiteSubtitle] = useState('Conteúdo Privado & Exclusivo');

  useEffect(() => {
    const savedData = localStorage.getItem('hotflix_grid_data');
    const savedSiteName = localStorage.getItem('hotflix_site_name');
    const savedSubtitle = localStorage.getItem('hotflix_site_subtitle');
    
    if (savedSiteName) setSiteName(savedSiteName);
    if (savedSubtitle) setSiteSubtitle(savedSubtitle);

    if (savedData) {
      setGridData(JSON.parse(savedData));
    } else {
      const initial = CATEGORIES.map((item, idx) => ({
        ...item,
        id: `card-${Date.now()}-${idx}`,
        modelName: item.modelName || 'Modelo Premium',
        imageUrl: item.imageUrl || '',
        price: '27,00',
        videoCount: '12',
        paymentUrl: '#',
        category: 'EXCLUSIVO'
      }));
      setGridData(initial);
    }
  }, []);

  const handlePaymentRedirect = (url?: string) => {
    if (url && url !== '#') window.open(url, '_blank');
    else alert('Link em breve.');
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col select-none relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_-20%,_#e5091433_0%,_transparent_70%)] z-0"></div>

      {/* Header */}
      <header className="relative z-10 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-b from-white to-[#e50914] bg-clip-text text-transparent italic pr-10 py-2">
          {siteName}
        </h1>
        <div className="mt-4">
          <p className="text-xs md:text-sm text-[#e50914] font-black tracking-[0.5em] uppercase opacity-80">
            {siteSubtitle}
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <main className="relative z-10 flex-1 px-4 md:px-20 pb-40">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10">
          {gridData.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div 
                onClick={() => handlePaymentRedirect(item.paymentUrl)}
                className="group relative aspect-[9/16] bg-zinc-900 rounded-2xl border border-white/5 hover:border-[#e50914]/50 hover:shadow-[0_0_50px_rgba(229,9,20,0.3)] hover:-translate-y-2 transition-all duration-700 overflow-hidden cursor-pointer"
              >
                {/* Media Container */}
                <div className="absolute inset-0 z-0">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt={item.modelName} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                      <i className="fa-solid fa-video text-4xl opacity-10 text-[#e50914]"></i>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                {/* Video Count Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 animate-pulse shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                  <i className="fa-solid fa-video text-[10px] text-[#e50914]"></i>
                  <span className="text-[10px] font-black text-white">{item.videoCount || '0'} VÍDEOS</span>
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 pointer-events-none">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#e50914] text-[8px] font-black text-white rounded-md tracking-widest uppercase shadow-[0_0_15px_rgba(229,9,20,0.5)]">
                      {item.category || 'EXCLUSIVO'}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white leading-tight uppercase tracking-tighter mb-2 drop-shadow-md">
                    {item.modelName || 'Modelo Premium'}
                  </h3>
                </div>
              </div>

              {/* Action Button Below Block */}
              <button 
                onClick={() => handlePaymentRedirect(item.paymentUrl)}
                className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-4 rounded-xl flex items-center justify-center shadow-lg transition-all hover:brightness-110 active:scale-95 group"
              >
                <span className="text-sm font-black uppercase tracking-widest">ACESSE AGORA</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="relative z-10 py-16 border-t border-white/5 flex flex-col items-center bg-black">
        <p className="text-[10px] text-gray-600 font-black tracking-[0.5em] uppercase">
          © 2024 {siteName} PRIVATE • LUXURY EXPERIENCE
        </p>
      </footer>
    </div>
  );
};

export default App;
