"use client";

import { useI18n } from "../lib/i18n";
import Image from "next/image";

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <Image
                                src="/fastandclean.png"
                                alt="Fast&Clean Logo"
                                width={150}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-500 dark:text-slate-400 max-w-sm">
                            {t("hero.subtitle")}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t("nav.services")}</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-slate-400">
                            <li>{t("services.standard")}</li>
                            <li>{t("services.deep")}</li>
                            <li>{t("services.renovation")}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t("nav.contact")}</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-slate-400">
                            <li>{t("contact.phone")}: 558 23 44 55, 558 25 44 55</li>
                            <li>{t("contact.email")}: info@fastandclean.ge</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-slate-800 pt-8 text-center text-sm text-gray-400 dark:text-slate-500">
                    &copy; {new Date().getFullYear()} Fast&Clean. {t("footer.rights")}
                </div>
            </div>
        </footer>
    );
}
