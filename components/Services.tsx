"use client";

import { useI18n } from "../lib/i18n";
import { Sparkles, Home, Droplets, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Services() {
    const { t } = useI18n();
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    type ServiceItem = {
        title: string;
        desc?: string;
        price?: string;
    };

    type Category = {
        id: string;
        icon: React.ReactNode;
        title: string;
        items: ServiceItem[];
    };

    const categories: Category[] = [
        {
            id: "cleaning",
            icon: <Home className="w-10 h-10 text-primary" />,
            title: t("services.cat.cleaning"),
            items: [
                { title: t("services.standard"), desc: t("services.desc.standard") },
                { title: t("services.deep"), desc: t("services.desc.deep") },
                { title: t("services.renovation"), desc: t("services.desc.renovation") },
            ]
        },
        {
            id: "dry_cleaning",
            icon: <Droplets className="w-10 h-10 text-primary" />,
            title: t("services.cat.dry_cleaning"),
            items: [
                { title: t("services.dc.armchair"), price: "35-40 ₾" },
                { title: t("services.dc.sofa_1"), price: "60-80 ₾" },
                { title: t("services.dc.sofa_2"), price: "80-120 ₾" },
                { title: t("services.dc.mattress"), price: "40-60 ₾" },
                { title: t("services.dc.pouffe"), price: "25-35 ₾" },
            ]
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative group rounded-3xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm transition-all duration-300"
                            onMouseEnter={() => setOpenCategory(category.id)}
                            onMouseLeave={() => setOpenCategory(null)}
                        >
                            <div
                                className="p-8 md:p-12 flex flex-col items-center text-center cursor-pointer"
                                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-slate-600 transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                                <div className={`mt-4 transform transition-transform duration-300 ${openCategory === category.id ? "rotate-180" : ""}`}>
                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                </div>
                            </div>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openCategory === category.id ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 border-t border-gray-100 dark:border-slate-700 pt-6 mx-4">
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors border border-transparent">
                                                <div>
                                                    <span className="font-semibold text-gray-800 dark:text-slate-200 block text-left">{item.title}</span>
                                                    {item.desc && <span className="text-sm text-gray-500 dark:text-slate-400 mt-1 block text-left leading-snug">{item.desc}</span>}
                                                </div>
                                                {item.price && (
                                                    <span className="whitespace-nowrap font-bold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 px-3 py-1 rounded-full text-sm self-start sm:self-auto border border-primary-100 dark:border-primary-800">
                                                        {item.price}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
