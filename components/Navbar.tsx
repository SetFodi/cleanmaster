"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n, Language } from "../lib/i18n";

export function Navbar() {
    const { t, language, setLanguage } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const languages: { code: Language; label: string }[] = [
        { code: "ka", label: "GE" },
        { code: "en", label: "EN" },
        { code: "ru", label: "RU" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                    CleanMaster
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        {t("nav.home")}
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        {t("nav.services")}
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        {t("nav.pricing")}
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        {t("nav.contact")}
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${language === lang.code
                                        ? "bg-white text-primary shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600 hover:text-primary font-medium"
                        >
                            {t("nav.home")}
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600 hover:text-primary font-medium"
                        >
                            {t("nav.services")}
                        </Link>
                        <Link
                            href="#pricing"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600 hover:text-primary font-medium"
                        >
                            {t("nav.pricing")}
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600 hover:text-primary font-medium"
                        >
                            {t("nav.contact")}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
