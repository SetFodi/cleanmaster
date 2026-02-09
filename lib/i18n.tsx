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
        "hero.badge.satisfaction": "კმაყოფილება",
        "hero.badge.label": "100%",
        "hero.badge.text": "№1 დასუფთავების სერვისი ბათუმში",
        "hero.eco": "ეკო-მეგობრული",
        "hero.insured": "დაზღვეული",
        "services.title": "ჩვენი სერვისები",
        "services.standard": "სტანდარტული დალაგება",
        "services.desc.standard": "მტვრის გადაწმენდა, მტვერსასრუტი, იატაკის მოწმენდა და სველი წერტილების დასუფთავება.",
        "services.deep": "გენერალური დალაგება",
        "services.desc.deep": "საფუძვლიანი წმენდა, პლინტუსების, ფანჯრების და ცხიმის მოშორების ჩათვლით.",
        "services.renovation": "რემონტის შემდეგ",
        "services.desc.renovation": "სრული დასუფთავება რემონტის ან მშენებლობის შემდეგ. მტვრის და ლაქების მოშორება.",
        "services.commercial": "კომერციული ფართები",
        "services.desc.commercial": "ოფისის დალაგება თქვენი ბიზნესის განრიგზე მორგებით.",
        "pricing.title": "გამჭვირვალე ფასები",
        "pricing.service_type": "აირჩიეთ სერვისი",
        "pricing.calc_desc": "გამოთვალეთ ღირებულება მომსახურების ტიპისა და ფართობის მიხედვით.",
        "pricing.area": "ფართობი (მ²)",
        "pricing.estimated_total": "სავარაუდო ღირებულება",
        "pricing.windows_note": "ფანჯრების და ვიტრაჟების წმენდა: 12₾/მ².",
        "pricing.per_m2": "ფასი კვ.მ-ზე",
        "pricing.start_from": "-დან",
        "contact.title": "დაგვიკავშირდით",
        "contact.phone": "ტელეფონი",
        "contact.email": "ელ-ფოსტა",
        "contact.address": "მისამართი",
        "contact.info": "საკონტაქტო ინფო",
        "contact.msg": "მზად ხართ სისუფთავისთვის? დაგვიკავშირდით ან შეავსეთ ფორმა.",
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
        "hero.badge.text": "#1 Cleaning Service in Batumi",
        "hero.eco": "Eco-friendly",
        "hero.insured": "Fully Insured",
        "services.title": "Our Services",
        "services.standard": "Standard Cleaning",
        "services.desc.standard": "Dusting, vacuuming, mopping, and bathroom sanitation for standard maintenance.",
        "services.deep": "Deep Cleaning",
        "services.desc.deep": "Thorough cleaning including baseboards, interior windows, and grease removal.",
        "services.renovation": "After Renovation",
        "services.desc.renovation": "Complete cleanup after construction or renovation. Dust and stain removal.",
        "pricing.title": "Transparent Pricing",
        "pricing.service_type": "Select Service",
        "pricing.calc_desc": "Calculate cost based on service type and area.",
        "pricing.area": "Area (m²)",
        "pricing.estimated_total": "Estimated Total",
        "pricing.windows_note": "Windows and stained glass cleaning: 12₾/m².",
        "pricing.per_m2": "Price per m²",
        "pricing.start_from": "From",
        "contact.title": "Contact Us",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.address": "Address",
        "contact.info": "Contact Information",
        "contact.msg": "Ready for a clean start? Contact us or fill out the form.",
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
        "hero.badge.satisfaction": "Удовлетворенность",
        "hero.badge.label": "100%",
        "hero.badge.text": "№1 Служба уборки в Батуми",
        "hero.eco": "Эко-дружелюбный",
        "hero.insured": "Полностью застраховано",
        "services.title": "Наши услуги",
        "services.standard": "Стандартная уборка",
        "services.desc.standard": "Удаление пыли, пылесос, мытье полов и дезинфекция ванных комнат.",
        "services.deep": "Генеральная уборка",
        "services.desc.deep": "Тщательная уборка, включая плинтусы, окна изнутри и удаление жира.",
        "services.renovation": "После ремонта",
        "services.desc.renovation": "Полная уборка после строительства или ремонта. Удаление пыли и пятен.",
        "pricing.title": "Прозрачные цены",
        "pricing.service_type": "Выберите услугу",
        "pricing.calc_desc": "Рассчитайте стоимость в зависимости от типа услуги и площади.",
        "pricing.area": "Площадь (м²)",
        "pricing.estimated_total": "Примерная стоимость",
        "pricing.windows_note": "Мытье окон и витражей: 12₾/м².",
        "pricing.per_m2": "Цена за м²",
        "pricing.start_from": "От",
        "contact.title": "Контакты",
        "contact.phone": "Телефон",
        "contact.email": "Эл. адрес",
        "contact.address": "Адрес",
        "contact.info": "Контактная информация",
        "contact.msg": "Готовы к чистоте? Свяжитесь с нами или заполните форму.",
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
