"use client";

import { useI18n } from "../../lib/i18n";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    const { t, language } = useI18n();

    return (
        <div className="bg-white min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {language === 'ka'
                            ? "მზად ხართ სისუფთავისთვის? დაგვიკავშირდით ან შეავსეთ ფორმა."
                            : "Ready for a clean start? Contact us or fill out the form."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-primary-50 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            {language === 'ka' ? "საკონტაქტო ინფო" : "Contact Information"}
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                                        {t("contact.phone")}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">+995 555 00 00 00</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {language === 'ka' ? "ორშაბათი - კვირა (09:00 - 21:00)" : "Mon - Sun (09:00 - 21:00)"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                                        {t("contact.email")}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">info@cleanmaster.ge</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                                        {language === 'ka' ? "მისამართი" : "Address"}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">Tbilisi, Georgia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {language === 'ka' ? "სახელი" : "Name"}
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder={language === 'ka' ? "თქვენი სახელი" : "Your Name"}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {language === 'ka' ? "ტელეფონი" : "Phone Number"}
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="+995 5xx xx xx xx"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {language === 'ka' ? "შეტყობინება" : "Message"}
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    placeholder={language === 'ka' ? "რისი დალაგება გსურთ?" : "What would you like to clean?"}
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-700 transition-colors">
                                {language === 'ka' ? "გაგზავნა" : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
