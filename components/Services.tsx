"use client";

import { useI18n } from "../lib/i18n";
import { Sparkles, Home, Building2 } from "lucide-react";

export function Services() {
    const { t } = useI18n();

    const services = [
        {
            icon: <Home className="w-8 h-8 text-primary" />,
            title: t("services.standard"),
            description: t("services.desc.standard")
        },
        {
            icon: <Sparkles className="w-8 h-8 text-primary" />,
            title: t("services.deep"),
            description: t("services.desc.deep")
        },
        {
            icon: <Building2 className="w-8 h-8 text-primary" />,
            title: t("services.renovation"),
            description: t("services.desc.renovation")
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-500 dark:text-slate-400 leading-relaxed">
                                {service.description} {/* Note: Descriptions should ideally be translated too, added locally for now */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
