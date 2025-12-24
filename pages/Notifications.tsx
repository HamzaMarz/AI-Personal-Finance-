
import React from 'react';
import { useTranslation } from 'react-i18next';

const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t('notifications')}</h2>
        <button className="text-sm font-bold text-primary">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {[
          { title: 'Salary Credited', desc: 'Your monthly salary of $5,200.00 was successfully received.', time: '10:42 AM', type: 'success', icon: 'account_balance' },
          { title: 'Budget Alert', desc: "You've reached 85% of your Shopping budget.", time: 'Yesterday', type: 'warning', icon: 'priority_high' },
          { title: 'New Tip', desc: 'Learn how to maximize your tax deductions this season.', time: '2 days ago', type: 'primary', icon: 'lightbulb' },
        ].map((notif, i) => (
          <div key={i} className="bg-surface dark:bg-slate-800 p-5 rounded-card border-s-4 border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 hover:border-primary transition-all">
            <div className={`size-12 rounded-xl bg-${notif.type}/10 text-${notif.type} flex items-center justify-center shrink-0`}>
              <span className="material-symbols-outlined">{notif.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm">{notif.title}</h4>
                <span className="text-[10px] text-slate-400 font-bold uppercase">{notif.time}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
