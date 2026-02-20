"use client";

import { WhatsAppIcon } from "./WhatsAppIcon";

const whatsappNumber = "995558234455";
const whatsappMessage = "Hello! I am interested in your cleaning service.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function ChatWidget() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-white"
                aria-label="Open WhatsApp Chat"
            >
                <WhatsAppIcon className="w-7 h-7" />
            </a>
        </div>
    );
}
