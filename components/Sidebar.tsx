
import React from 'react';
import { MenuOption } from '../types';

interface SidebarProps {
  activeMenu: MenuOption;
  onMenuChange: (menu: MenuOption) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuChange }) => {
  return (
    <aside className="w-72 h-screen bg-[#111111] flex flex-col border-r border-white/5 shrink-0">
      {/* Brand Icon */}
      <div className="p-8">
        <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-black text-2xl text-black">
          H
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <button 
          onClick={() => onMenuChange(MenuOption.INICIO)}
          className={`w-full flex items-center px-4 py-4 rounded-md transition-all duration-200 ${
            activeMenu === MenuOption.INICIO 
              ? 'bg-red-600/10 text-red-600 border-l-4 border-red-600 rounded-l-none' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <i className="fa-solid fa-house w-6 text-xl"></i>
          <span className="ml-3 font-semibold text-base">Início</span>
        </button>

        <button 
          onClick={() => onMenuChange(MenuOption.MINHA_CONTA)}
          className={`w-full flex items-center px-4 py-4 rounded-md transition-all duration-200 ${
            activeMenu === MenuOption.MINHA_CONTA 
              ? 'bg-red-600/10 text-red-600 border-l-4 border-red-600 rounded-l-none' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <i className="fa-regular fa-user w-6 text-xl"></i>
          <span className="ml-3 font-semibold text-base">Minha Conta</span>
        </button>

        <button 
          onClick={() => onMenuChange(MenuOption.ADMINISTRADOR)}
          className={`w-full flex items-center px-4 py-4 rounded-md transition-all duration-200 ${
            activeMenu === MenuOption.ADMINISTRADOR 
              ? 'bg-red-600/10 text-red-600 border-l-4 border-red-600 rounded-l-none' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <i className="fa-solid fa-gear w-6 text-xl"></i>
          <span className="ml-3 font-semibold text-base">Administrador</span>
        </button>
      </nav>

      {/* Footer Links */}
      <footer className="p-8 border-t border-white/5 space-y-3">
        <a href="#" className="block text-xs text-gray-500 hover:text-red-500 transition-colors">Suporte para Alunos</a>
        <a href="#" className="block text-xs text-gray-500 hover:text-red-500 transition-colors">Termos de Uso</a>
        <a href="#" className="block text-xs text-gray-500 hover:text-red-500 transition-colors">Políticas de Privacidade</a>
        <p className="pt-4 text-[10px] text-gray-700 font-medium tracking-widest uppercase">© 2024 HOTSHORTS</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
