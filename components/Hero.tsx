"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../lib/i18n";
import { Sparkles, CheckCircle } from "lucide-react";

export function Hero() {
    const { t, language } = useI18n();

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-16 pb-20 md:pt-24 md:pb-32">
            <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-700 text-sm font-semibold mb-6 border border-primary-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4" />
                        <span>#1 Cleaning Service in Tbilisi</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-100">
                        {t("hero.title")}
                        <span className="text-primary-600">.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both delay-300">
                        <Link
                            href="#pricing"
                            className="px-8 py-4 bg-[#0284c7] text-white text-lg rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 hover:bg-[#0369a1] transition-all text-center"
                        >
                            {t("hero.cta")}
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary-700 text-lg rounded-full font-bold border-2 border-primary-100 hover:border-primary-200 hover:bg-primary-50 transition-all hover:-translate-y-1 shadow-sm text-center"
                        >
                            {t("nav.contact")}
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary-600" />
                            <span>{language === 'ka' ? "ეკო-მეგობრული" : "Eco-friendly"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary-600" />
                            <span>{language === 'ka' ? "დაზღვეული" : "Fully Insured"}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="md:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-4 border-white">
                        <Image
                            src="/hero-new.png"
                            alt="Clean bright living room"
                            width={800}
                            height={600}
                            className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce duration-[3000ms]">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{t("hero.badge.label")}</p>
                                <p className="text-xs text-gray-500">{t("hero.badge.satisfaction")}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
