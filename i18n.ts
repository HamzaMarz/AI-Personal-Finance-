
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_name": "Finora",
      "dashboard": "Dashboard",
      "expenses": "Expenses",
      "income": "Income",
      "savings": "Savings",
      "investments": "Investments",
      "tips": "Tips",
      "settings": "Settings",
      "notifications": "Notifications",
      "total_net_worth": "Total Net Worth",
      "monthly_income": "Monthly Income",
      "monthly_expenses": "Monthly Expenses",
      "total_savings": "Total Savings",
      "add_income": "Add Income Source",
      "source_name": "Source Name",
      "amount": "Amount",
      "recurrence": "Recurrence",
      "monthly": "Monthly",
      "weekly": "Weekly",
      "once": "Once",
      "save": "Save",
      "cancel": "Cancel",
      "ai_insights": "AI Insights",
      "ai_disclaimer": "Your financial data is processed anonymously for smart analysis.",
      "sync_backup": "Sync & Backup",
      "encryption_password": "Encryption Password",
      "theme": "Theme",
      "language": "Language",
      "logout": "Sign Out",
      "login": "Log In",
      "welcome": "Welcome back!",
      "google_sign_in": "Sign in with Google",
      "forgot_password": "Forgot Password?"
    }
  },
  ar: {
    translation: {
      "app_name": "فينورا",
      "dashboard": "لوحة التحكم",
      "expenses": "المصاريف",
      "income": "الدخل",
      "savings": "المدخرات",
      "investments": "الاستثمارات",
      "tips": "نصائح",
      "settings": "الإعدادات",
      "notifications": "التنبيهات",
      "total_net_worth": "إجمالي صافي القيمة",
      "monthly_income": "الدخل الشهري",
      "monthly_expenses": "المصاريف الشهرية",
      "total_savings": "إجمالي المدخرات",
      "add_income": "إضافة مصدر دخل",
      "source_name": "اسم المصدر",
      "amount": "المبلغ",
      "recurrence": "التكرار",
      "monthly": "شهرياً",
      "weekly": "أسبوعياً",
      "once": "مرة واحدة",
      "save": "حفظ",
      "cancel": "إلغاء",
      "ai_insights": "رؤى الذكاء الاصطناعي",
      "ai_disclaimer": "تتم معالجة بياناتك المالية بشكل مجهول للتحليل الذكي.",
      "sync_backup": "المزامنة والنسخ الاحتياطي",
      "encryption_password": "كلمة مرور التشفير",
      "theme": "المظهر",
      "language": "اللغة",
      "logout": "تسجيل الخروج",
      "login": "تسجيل الدخول",
      "welcome": "مرحباً بعودتك!",
      "google_sign_in": "الدخول بواسطة جوجل",
      "forgot_password": "نسيت كلمة المرور؟"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
