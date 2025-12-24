
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/useAuthStore';
import { useAppStore } from '../store/useAppStore';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useAuthStore();
  const { language, setLanguage } = useAppStore();
  const [email, setEmail] = useState('alex@finora.app');
  const [pass, setPass] = useState('password123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      id: '1',
      name: 'Alex Morgan',
      email: email,
      avatar: 'https://picsum.photos/100/100'
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-slate-900 p-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] start-[-5%] size-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] end-[-5%] size-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>

      <header className="fixed top-0 start-0 end-0 p-6 flex justify-end">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">language</span>
          <span>{language === 'en' ? 'العربية' : 'English'}</span>
        </button>
      </header>

      <div className="w-full max-w-[420px] space-y-8 relative z-10">
        <div className="text-center">
          <div className="size-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 mx-auto mb-6 transform rotate-3">
            <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{t('app_name')}</h1>
          <p className="text-slate-400 font-medium">{t('welcome')}</p>
        </div>

        <div className="bg-surface dark:bg-slate-800 p-8 rounded-card shadow-xl border border-slate-100 dark:border-slate-700">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
              <input 
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                <button type="button" className="text-xs font-bold text-primary">{t('forgot_password')}</button>
              </div>
              <input 
                type="password"
                required
                value={pass}
                onChange={e => setPass(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 uppercase tracking-wide text-sm"
            >
              {t('login')}
            </button>
          </form>

          <div className="relative my-8 flex items-center">
            <div className="flex-grow border-t border-slate-100 dark:border-slate-700"></div>
            <span className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or</span>
            <div className="flex-grow border-t border-slate-100 dark:border-slate-700"></div>
          </div>

          <button className="w-full h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="text-sm">{t('google_sign_in')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
