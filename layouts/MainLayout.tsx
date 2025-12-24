
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/useAuthStore';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const navItems = [
    { path: '/', label: 'dashboard', icon: 'dashboard' },
    { path: '/expenses', label: 'expenses', icon: 'receipt_long' },
    { path: '/income', label: 'income', icon: 'payments' },
    { path: '/notifications', label: 'notifications', icon: 'notifications' },
    { path: '/settings', label: 'settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background dark:bg-slate-900">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-surface dark:bg-slate-800 border-e border-slate-200 dark:border-slate-700 shadow-sm z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-700">
          <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center me-3">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </div>
          <h1 className="font-heading font-bold text-xl tracking-tight text-slate-800 dark:text-white">{t('app_name')}</h1>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all group
                ${isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary'}
              `}
            >
              <span className={`material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform`}>
                {item.icon}
              </span>
              <span className="font-medium">{t(item.label)}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
            <img src={user?.avatar} alt="Avatar" className="size-10 rounded-full bg-slate-200" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-slate-800 dark:text-white">{user?.name}</p>
              <p className="text-[10px] text-slate-400 truncate uppercase">Premium</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header className="h-16 flex-shrink-0 bg-surface dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4 lg:hidden">
             <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <h1 className="font-heading font-bold text-lg text-slate-800 dark:text-white">{t('app_name')}</h1>
          </div>
          <div className="hidden lg:block">
            <span className="text-sm text-slate-400">{t('welcome')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input 
                className="h-10 ps-10 pe-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none text-sm w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" 
                placeholder="Search..."
              />
              <span className="material-symbols-outlined absolute start-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            </div>
            <button className="size-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 end-2.5 size-2 bg-warning rounded-full border-2 border-surface dark:border-slate-800"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar pb-24 lg:pb-8">
          <div className="max-w-6xl mx-auto animate-[fadeIn_0.3s_ease-out]">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-2 py-2 flex items-center justify-around z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[64px]
              ${isActive ? 'text-primary' : 'text-slate-400'}
            `}
          >
            <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-tight">{t(item.label)}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MainLayout;
