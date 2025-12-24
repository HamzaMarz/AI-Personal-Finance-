
import React from 'react';
import { useTranslation } from 'react-i18next';

const Expenses: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{t('expenses')}</h2>
          <p className="text-slate-400 text-sm">Track your spending across different categories.</p>
        </div>
        <button className="h-11 px-5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:bg-primary/90 transition-all">
          <span className="material-symbols-outlined">add</span>
          Add Expense
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface dark:bg-slate-800 p-6 rounded-card border border-slate-100 dark:border-slate-700 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Fixed</p>
          <h3 className="text-2xl font-bold">$2,450.00</h3>
        </div>
        <div className="bg-surface dark:bg-slate-800 p-6 rounded-card border border-slate-100 dark:border-slate-700 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Variable</p>
          <h3 className="text-2xl font-bold">$1,750.00</h3>
        </div>
        <div className="bg-surface dark:bg-slate-800 p-6 rounded-card border border-slate-100 dark:border-slate-700 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Monthly Trend</p>
          <h3 className="text-2xl font-bold text-success">-4.5%</h3>
        </div>
      </div>

      <div className="bg-surface dark:bg-slate-800 rounded-card shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <h3 className="font-bold">Transaction History</h3>
          <button className="text-sm font-bold text-primary">Filter By Category</button>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <div className="size-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center">
                 <span className="material-symbols-outlined">shopping_cart</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Grocery Store {i}</p>
                <p className="text-xs text-slate-400">Shopping • Today at 10:30 AM</p>
              </div>
              <div className="text-end">
                <p className="font-bold">-$84.20</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Once</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
