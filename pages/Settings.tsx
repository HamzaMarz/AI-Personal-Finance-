
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore';
import { useAuthStore } from '../store/useAuthStore';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme, language, setLanguage, aiEnabled, setAiEnabled } = useAppStore();
  const { logout } = useAuthStore();
  const [encPass, setEncPass] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <div>
        <h2 className="text-3xl font-bold">{t('settings')}</h2>
        <p className="text-slate-400 mt-1">Customize your experience and manage data security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Localization & Theme */}
        <section className="bg-surface dark:bg-slate-800 rounded-card shadow-sm p-6 border border-slate-100 dark:border-slate-700 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-primary">language</span>
            <h3 className="font-bold">{t('language')} & {t('theme')}</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('language')}</label>
              <div className="flex p-1 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${language === 'en' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('ar')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${language === 'ar' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400'}`}
                >
                  العربية
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('theme')}</label>
              <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 appearance-none text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>
          </div>
        </section>

        {/* AI Insights Toggle */}
        <section className="bg-surface dark:bg-slate-800 rounded-card shadow-sm p-6 border border-slate-100 dark:border-slate-700 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">auto_awesome</span>
              <h3 className="font-bold">{t('ai_insights')}</h3>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={aiEnabled} onChange={(e) => setAiEnabled(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed italic">
            "{t('ai_disclaimer')}"
          </p>
          <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20 text-[11px] text-secondary">
             Powered by Gemini Pro Vision (Encrypted Sandbox)
          </div>
        </section>

        {/* Sync & Backup */}
        <section className="md:col-span-2 bg-surface dark:bg-slate-800 rounded-card shadow-sm p-6 border border-slate-100 dark:border-slate-700 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-success">cloud_sync</span>
            <h3 className="font-bold">{t('sync_backup')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('encryption_password')}</label>
                <input 
                  type="password"
                  value={encPass}
                  onChange={(e) => setEncPass(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••••••"
                />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className={`size-2 rounded-full ${encPass.length > 8 ? 'bg-success' : 'bg-warning'}`}></span>
                <span className="text-slate-400">Password Strength: {encPass.length > 8 ? 'Strong' : 'Weak'}</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">Status</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-success/10 text-success uppercase">Secured</span>
              </div>
              <p className="text-xs text-slate-400">Last synced: Just now</p>
              <button className="mt-4 w-full py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors">
                Run Manual Backup
              </button>
            </div>
          </div>
        </section>

        <section className="md:col-span-2 pt-6">
           <button 
            onClick={logout}
            className="w-full h-12 rounded-xl bg-warning/10 text-warning font-bold flex items-center justify-center gap-2 hover:bg-warning hover:text-white transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">logout</span>
            {t('logout')}
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
