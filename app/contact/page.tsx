"use client";

import { useI18n } from "../../lib/i18n";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "../../components/WhatsAppIcon";

export default function ContactPage() {
    const { t, language } = useI18n();
    const whatsappNumber = "995558234455";
    const whatsappMessage = language === "ka" ? "გამარჯობა, მაინტერესებს დასუფთავების სერვისი." : "Hello, I am interested in your cleaning service.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-white min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t("contact.msg")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-primary-50 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            {t("contact.info")}
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
                                    <p className="text-xl font-bold text-gray-900">558 23 44 55 | 558 25 44 55</p>
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
                                    <p className="text-xl font-bold text-gray-900">info@fastandclean.ge</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                                        {t("contact.address")}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">Batumi, Georgia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {language === "ka" ? "მოგვწერეთ WhatsApp-ზე" : "Chat with us on WhatsApp"}
                            </h3>
                            <p className="text-gray-500">
                                {language === "ka"
                                    ? "დააჭირეთ ღილაკს და პირდაპირ გაგიხსნით ჩატს ჩვენს გუნდთან."
                                    : "Tap the button below to open a direct chat with our team."}
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#1ebe5d] transition-colors inline-flex items-center justify-center gap-3"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                <span>{language === "ka" ? "WhatsApp ჩატის გახსნა" : "Open WhatsApp Chat"}</span>
                            </a>
                            <p className="text-sm text-gray-400">
                                {language === "ka" ? "ნომერი: 558 23 44 55" : "Number: 558 23 44 55"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
