"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-loam-border bg-loam-beige/95 sticky top-0 z-50 backdrop-blur-sm">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-sm font-semibold tracking-tight z-50 relative">
                    loam.market
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-4 text-sm">
                    <NavLinks />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative p-2 -mr-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span
                            className={`h-0.5 w-full bg-loam-ink transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-full bg-loam-ink transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-full bg-loam-ink transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </div>
                </button>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`fixed inset-0 bg-loam-beige z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <nav className="flex flex-col items-center gap-8 text-lg">
                        <NavLinks onClick={() => setIsMenuOpen(false)} />
                    </nav>
                </div>
            </div>
        </header>
    );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
    return (
        <>
            <Link href="/" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                Home
            </Link>
            <Link href="/fractal" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                Fractal Network
            </Link>
            <Link href="/communities" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                For communities
            </Link>
            <Link href="/traders" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                For traders
            </Link>
            <Link href="/faq" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                FAQ
            </Link>
        </>
    );
}
