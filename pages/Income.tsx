
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Income: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{t('income')}</h2>
          <p className="text-slate-400 text-sm">Manage your monthly and one-time revenue streams.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="h-11 px-5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:bg-primary/90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">add</span>
          {t('add_income')}
        </button>
      </div>

      <div className="bg-surface dark:bg-slate-800 rounded-card shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 text-start">{t('source_name')}</th>
                <th className="px-6 py-4 text-start">{t('amount')}</th>
                <th className="px-6 py-4 text-start">{t('recurrence')}</th>
                <th className="px-6 py-4 text-end"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <div>
                      <p className="font-bold">Main Salary</p>
                      <p className="text-xs text-slate-400">Tech Corp Inc.</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 font-bold text-slate-800 dark:text-white">$8,500.00</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20">
                    <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                    {t('monthly')}
                  </span>
                </td>
                <td className="px-6 py-5 text-end">
                  <button className="size-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors text-slate-400">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Income Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-surface dark:bg-slate-800 w-full max-w-md rounded-card shadow-2xl animate-[fadeIn_0.2s_ease-out] overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-lg font-bold">{t('add_income')}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-warning"><span className="material-symbols-outlined">close</span></button>
            </div>
            <form className="p-6 space-y-5" onSubmit={e => { e.preventDefault(); setShowModal(false); }}>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('source_name')}</label>
                <input className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Freelance project" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('amount')}</label>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input type="number" className="w-full h-12 ps-8 pe-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t('recurrence')}</label>
                <select className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 appearance-none">
                  <option value="monthly">{t('monthly')}</option>
                  <option value="weekly">{t('weekly')}</option>
                  <option value="once">{t('once')}</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 h-12 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">{t('cancel')}</button>
                <button type="submit" className="flex-1 h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20">{t('save')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Income;
