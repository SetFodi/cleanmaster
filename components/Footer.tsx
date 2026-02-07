"use client";

import { useI18n } from "../lib/i18n";

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-primary mb-4">CleanMaster</h3>
                        <p className="text-gray-500 max-w-sm">
                            {t("hero.subtitle")}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t("nav.services")}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>{t("services.standard")}</li>
                            <li>{t("services.deep")}</li>
                            <li>{t("services.commercial")}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t("nav.contact")}</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>{t("contact.phone")}: +995 555 00 00 00</li>
                            <li>{t("contact.email")}: info@cleanmaster.ge</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} CleanMaster. {t("footer.rights")}
                </div>
            </div>
        </footer>
    );
}
