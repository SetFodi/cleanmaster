"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ka' | 'en' | 'ru';

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    ka: {
        "nav.home": "მთავარი",
        "nav.services": "სერვისები",
        "nav.pricing": "ფასები",
        "nav.contact": "კონტაქტი",
        "hero.title": "სისუფთავე, რომელიც გამშვიდებთ",
        "hero.subtitle": "პროფესიონალური დალაგების სერვისი თქვენი სახლისა და ოფისისთვის.",
        "hero.cta": "გამოთვალე ფასი",
        "services.title": "ჩვენი სერვისები",
        "services.standard": "სტანდარტული დალაგება",
        "services.desc.standard": "მტვრის გადაწმენდა, მტვერსასრუტი, იატაკის მოწმენდა და სველი წერტილების დასუფთავება.",
        "services.deep": "გენერალური დალაგება",
        "services.desc.deep": "საფუძვლიანი წმენდა, პლინტუსების, ფანჯრების და ცხიმის მოშორების ჩათვლით.",
        "services.commercial": "კომერციული ფართები",
        "services.desc.commercial": "ოფისის დალაგება თქვენი ბიზნესის განრიგზე მორგებით.",
        "pricing.title": "გამჭვირვალე ფასები",
        "pricing.per_m2": "ფასი კვ.მ-ზე",
        "pricing.start_from": "-დან",
        "contact.title": "დაგვიკავშირდით",
        "contact.phone": "ტელეფონი",
        "contact.email": "ელ-ფოსტა",
        "hero.badge.satisfaction": "კმაყოფილება",
        "hero.badge.label": "100%",
        "footer.rights": "ყველა უფლება დაცულია."
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.pricing": "Pricing",
        "nav.contact": "Contact",
        "hero.title": "Cleanliness That Calms",
        "hero.subtitle": "Professional cleaning service for your home and office.",
        "hero.cta": "Get a Quote",
        "hero.badge.satisfaction": "Satisfaction",
        "hero.badge.label": "100%",
        "services.title": "Our Services",
        "services.standard": "Standard Cleaning",
        "services.desc.standard": "Dusting, vacuuming, mopping, and bathroom sanitation for regular maintenance.",
        "services.deep": "Deep Cleaning",
        "services.desc.deep": "Thorough cleaning including baseboards, interior windows, and grease removal.",
        "services.commercial": "Commercial Spaces",
        "services.desc.commercial": "Office cleaning solutions tailored to your business schedule and needs.",
        "pricing.title": "Transparent Pricing",
        "pricing.per_m2": "Price per m²",
        "pricing.start_from": "From",
        "contact.title": "Contact Us",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "footer.rights": "All rights reserved."
    },
    ru: {
        "nav.home": "Главная",
        "nav.services": "Услуги",
        "nav.pricing": "Цены",
        "nav.contact": "Контакты",
        "hero.title": "Чистота, которая успокаивает",
        "hero.subtitle": "Профессиональная уборка для вашего дома и офиса.",
        "hero.cta": "Узнать цену",
        "hero.badge.satisfaction": "Сотисфакция",
        "hero.badge.label": "100%",
        "services.title": "Наши услуги",
        "services.standard": "Стандартная уборка",
        "services.desc.standard": "Удаление пыли, пылесос, мытье полов и дезинфекция ванных комнат.",
        "services.deep": "Генеральная уборка",
        "services.desc.deep": "Тщательная уборка, включая плинтусы, окна изнутри и удаление жира.",
        "services.commercial": "Коммерческие помещения",
        "services.desc.commercial": "Уборка офисов, адаптированная к вашему расписанию и потребностям.",
        "pricing.title": "Прозрачные цены",
        "pricing.per_m2": "Цена за м²",
        "pricing.start_from": "От",
        "contact.title": "Контакты",
        "contact.phone": "Телефон",
        "contact.email": "Эл. адрес",
        "footer.rights": "Все права защищены."
    }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ka');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
