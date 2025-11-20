"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

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

                {isMenuOpen && createPortal(
                    <div
                        className="fixed inset-0 z-[100] md:hidden bg-loam-beige opacity-100"
                        style={{ backgroundColor: '#f5efe5' }}
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex h-16 items-center justify-between border-b border-loam-border bg-loam-beige/95 px-4">
                                <Link href="/" className="text-sm font-semibold tracking-tight">
                                    loam.market
                                </Link>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg p-2 hover:bg-loam-border/20"
                                    aria-label="Close menu"
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <nav className="flex flex-col gap-1 p-4">
                                <Link href="/fractal" className="rounded-lg px-4 py-3 text-base hover:bg-loam-border/20" onClick={() => setIsMenuOpen(false)}>
                                    Vetted Pools
                                </Link>

                                <Link href="/traders" className="rounded-lg px-4 py-3 text-base hover:bg-loam-border/20" onClick={() => setIsMenuOpen(false)}>
                                    Interviewers
                                </Link>
                                <Link href="/faq" className="rounded-lg px-4 py-3 text-base hover:bg-loam-border/20" onClick={() => setIsMenuOpen(false)}>
                                    FAQ
                                </Link>
                            </nav>
                        </div>
                    </div>,
                    document.body
                )}
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
                Vetted Pools
            </Link>

            <Link href="/traders" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                Interviewers
            </Link>
            <Link href="/faq" className="hover:text-loam-accent transition-colors" onClick={onClick}>
                FAQ
            </Link>
        </>
    );
}
