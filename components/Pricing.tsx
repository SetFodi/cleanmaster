"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { Calculator } from "lucide-react";

export function Pricing() {
    const { t, language } = useI18n();
    const [area, setArea] = useState<number | "">("");

    // Simple pricing logic: 
    // Standard: ~3 GEL/m2
    // Deep: ~5 GEL/m2
    const standardPrice = typeof area === "number" ? (area * 3).toFixed(0) : "0";
    const deepPrice = typeof area === "number" ? (area * 5).toFixed(0) : "0";

    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("pricing.title")}</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {language === 'ka'
                            ? "გამოთვალეთ სავარაუდო ღირებულება თქვენი ბინის ფართობის მიხედვით."
                            : "Calculate estimated cost based on your apartment area."}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    {/* Input Section */}
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 block">
                            {language === 'ka' ? "შეიყვანეთ ფართობი (მ²)" : "Enter Area (m²)"}
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                placeholder="50"
                                className="w-full px-6 py-4 text-2xl font-bold text-gray-900 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                            />
                            <Calculator className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            {language === 'ka' ? "* ფასები საორიენტაციოა" : "* Prices are estimated"}
                        </p>
                    </div>

                    {/* Results Section */}
                    <div className="bg-primary p-8 md:p-12 md:w-1/2 text-white flex flex-col justify-center gap-6">
                        <div className="flex justify-between items-center border-b border-white/20 pb-6">
                            <span className="font-medium opacity-90">{t("services.standard")}</span>
                            <div className="text-right">
                                <span className="text-3xl font-bold">{standardPrice} ₾</span>
                                <span className="block text-xs opacity-70">~3 ₾ / m²</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium opacity-90">{t("services.deep")}</span>
                            <div className="text-right">
                                <span className="text-3xl font-bold">{deepPrice} ₾</span>
                                <span className="block text-xs opacity-70">~5 ₾ / m²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
