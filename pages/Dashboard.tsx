
import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { label: 'total_net_worth', value: '$1,250,000.00', change: '+2.4%', color: 'bg-primary', icon: 'account_balance' },
    { label: 'monthly_income', value: '$12,500.00', change: '+1.0%', color: 'bg-success', icon: 'payments' },
    { label: 'monthly_expenses', value: '$4,200.00', change: '-5.3%', color: 'bg-warning', icon: 'shopping_cart' },
    { label: 'total_savings', value: '$8,300.00', change: '+2.1%', color: 'bg-secondary', icon: 'savings' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">{t('dashboard')}</h2>
          <p className="text-slate-400 mt-1">{t('welcome')}</p>
        </div>
        <div className="flex gap-2">
           <button className="h-10 px-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`
              bg-surface dark:bg-slate-800 rounded-card p-6 shadow-sm border border-slate-100 dark:border-slate-700 
              group hover:shadow-md hover:-translate-y-1 transition-all duration-300
            `}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${stat.color}/10 text-${stat.color.split('-')[1]} group-hover:${stat.color} group-hover:text-white transition-colors`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t(stat.label)}</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface dark:bg-slate-800 rounded-card shadow-sm border border-slate-100 dark:border-slate-700 p-6 min-h-[400px]">
          <h3 className="text-lg font-bold mb-6">Financial Trends</h3>
          <div className="h-64 flex items-center justify-center text-slate-400">
            <span className="material-symbols-outlined text-6xl opacity-20">show_chart</span>
            <p className="text-sm italic">Chart integration placeholder...</p>
          </div>
        </div>
        <div className="bg-surface dark:bg-slate-800 rounded-card shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-600 flex items-center justify-center text-slate-500">
                   <span className="material-symbols-outlined text-sm">history</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Transaction {i}</p>
                  <p className="text-xs text-slate-400">2 hours ago</p>
                </div>
                <span className="text-sm font-bold text-warning">-$45.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
