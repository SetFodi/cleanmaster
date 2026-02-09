"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Globe, Moon, Sun } from "lucide-react";
import { useI18n, Language } from "../lib/i18n";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
    const { t, language, setLanguage } = useI18n();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    const languages: { code: Language; label: string }[] = [
        { code: "ka", label: "GE" },
        { code: "en", label: "EN" },
        { code: "ru", label: "RU" },
    ];

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/fastandclean.png"
                        alt="Fast&Clean Logo"
                        width={180}
                        height={48}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                        {t("nav.home")}
                    </Link>
                    <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                        {t("nav.services")}
                    </Link>
                    <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                        {t("nav.pricing")}
                    </Link>
                    <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                        {t("nav.contact")}
                    </Link>

                    <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <div className="flex gap-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`text-sm font-medium px-2 py-1 rounded transition-colors ${language === lang.code
                                        ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                                        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu Button & Actions */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Compact Language Switcher for Mobile */}
                    <div className="flex gap-2 mr-2 bg-gray-50 dark:bg-slate-800/50 p-1 rounded-lg border border-gray-100 dark:border-slate-800">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={`text-xs font-bold px-2 py-1 rounded transition-all ${language === lang.code
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* Theme Toggle Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="p-1.5 text-gray-600 dark:text-gray-300 focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium"
                        >
                            {t("nav.home")}
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium"
                        >
                            {t("nav.services")}
                        </Link>
                        <Link
                            href="#pricing"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium"
                        >
                            {t("nav.pricing")}
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium"
                        >
                            {t("nav.contact")}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
