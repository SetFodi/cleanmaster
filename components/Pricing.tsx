"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { Calculator, CheckCircle2 } from "lucide-react";

export function Pricing() {
    const { t, language } = useI18n();
    const [area, setArea] = useState<number | "">("");
    const [windowArea, setWindowArea] = useState<number | "">("");
    const [serviceType, setServiceType] = useState<"regular" | "deep" | "renovation">("deep");

    const prices = {
        regular: 2,
        deep: 4,
        renovation: 6
    };

    const calculatePrice = () => {
        const totalArea = typeof area === "number" ? area : 0;
        const winArea = typeof windowArea === "number" ? windowArea : 0;

        let total = totalArea * prices[serviceType];

        if (serviceType === "renovation") {
            total += winArea * 12; // Extra for windows in renovation
        }

        return total.toFixed(0);
    };

    return (
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("pricing.title")}</h2>
                    <p className="text-gray-500 dark:text-slate-400 max-w-xl mx-auto">
                        {t("pricing.calc_desc")}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row">
                    {/* Input Section */}
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col gap-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3 block">
                                {t("pricing.service_type")}
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => setServiceType("regular")}
                                    className={`px-4 py-3 rounded-xl border-2 text-left transition-all flex items-center justify-between ${serviceType === "regular" ? "border-primary bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300" : "border-gray-100 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-gray-200 dark:hover:border-slate-600"}`}
                                >
                                    <span className="font-medium">{t("services.standard")}</span>
                                    <span className="text-sm font-bold">2 ₾ / m²</span>
                                </button>
                                <button
                                    onClick={() => setServiceType("deep")}
                                    className={`px-4 py-3 rounded-xl border-2 text-left transition-all flex items-center justify-between ${serviceType === "deep" ? "border-primary bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300" : "border-gray-100 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-gray-200 dark:hover:border-slate-600"}`}
                                >
                                    <span className="font-medium">{t("services.deep")}</span>
                                    <span className="text-sm font-bold">4 ₾ / m²</span>
                                </button>
                                <button
                                    onClick={() => setServiceType("renovation")}
                                    className={`px-4 py-3 rounded-xl border-2 text-left transition-all flex items-center justify-between ${serviceType === "renovation" ? "border-primary bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300" : "border-gray-100 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-gray-200 dark:hover:border-slate-600"}`}
                                >
                                    <span className="font-medium">{t("services.renovation")}</span>
                                    <span className="text-sm font-bold">6 ₾ / m²</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3 block">
                                    {t("pricing.area")}
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={area}
                                        onChange={(e) => setArea(e.target.value === "" ? "" : Number(e.target.value))}
                                        placeholder="50"
                                        className="w-full px-6 py-4 text-2xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-700 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-600 focus:outline-none transition-all"
                                    />
                                    <Calculator className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                                </div>
                            </div>

                            {serviceType === "renovation" && (
                                <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3 block">
                                        {t("pricing.window_area")} (12 ₾ / m²)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={windowArea}
                                            onChange={(e) => setWindowArea(e.target.value === "" ? "" : Number(e.target.value))}
                                            placeholder="10"
                                            className="w-full px-6 py-4 text-2xl font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-700 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-600 focus:outline-none transition-all"
                                        />
                                        <Calculator className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="bg-primary dark:bg-slate-900 p-8 md:p-12 md:w-1/2 text-white flex flex-col justify-center gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-white/10 dark:bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <span className="text-blue-100 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">{t("pricing.estimated_total")}</span>
                            <div className="text-6xl font-bold mt-2 tracking-tight">
                                {calculatePrice()} <span className="text-4xl">₾</span>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-white/20 dark:border-slate-700/50 pt-8 relative z-10">
                            <div className="flex items-start gap-3 opacity-90">
                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{t("hero.eco")} & {t("hero.insured")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
