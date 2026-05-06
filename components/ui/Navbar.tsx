"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    {
        label: "Service",
        href: "/service",
        subLinks: [
            { label: "BPO Solution", href: "/service/bpo-solution" },
            { label: "Training", href: "/service/training" },
            { label: "Tech Solution", href: "/service/tech-solution" },
        ]
    },
    {
        label: "About Us",
        href: "/about",
        subLinks: [
            { label: "Overview", href: "/about/overview" },
            { label: "Leadership", href: "/about/leadership" },
            { label: "International Certification", href: "/about/certification" },
            { label: "Recognitions & Awards", href: "/about/awards" },
        ]
    },
    {
        label: "Industries",
        href: "/industries",
        subLinks: [
            { label: "Telecommunication", href: "/industries/telecom" },
            { label: "Utility Industries", href: "/industries/utility" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "Logistics & Supply Chain", href: "/industries/logistics" },
            { label: "Security Agencies", href: "/industries/security" },
            { label: "DTH", href: "/industries/dth" },
            { label: "Banking & Fin. Services", href: "/industries/banking" },
            { label: "Automobile", href: "/industries/automobile" },
            { label: "MFS", href: "/industries/mfs" },
            { label: "Consumer Electric Industries", href: "/industries/consumer" },
        ]
    },
    { label: "Investors", href: "/investors" },
    { label: "Career", href: "/career" },
]

export function Navbar() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false)
        setOpenDropdown(null)
    }, [pathname])

    return (
        <>
            {/* ── MAIN NAV WRAPPER ── */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${scrolled ? "px-4 md:px-8 pt-4" : "px-0 pt-0"}`}
            >
                <nav className={`
                    flex items-center justify-between transition-all duration-500
                    ${scrolled
                        ? "mx-auto max-w-[900px] px-4 md:px-6 py-3 rounded-[178px] bg-[#FFFFFFD4] backdrop-blur-[30px] shadow-[0px_0px_11.8px_3px_#00000040]"
                        : "w-full px-6 md:px-12 lg:px-16 py-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                    }
                `}>

                    {/* ── LOGO ── */}
                    <Link href="/">
                        <Image
                            src={scrolled ? "/logo/small_logo.svg" : "/logo/logo.svg"}
                            alt="Digicon Logo"
                            width={scrolled ? 40 : 96}
                            height={32}
                        />
                    </Link>

                    {/* ── DESKTOP NAV LINKS ── */}
                    <div className="hidden lg:flex items-center gap-5">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

                            if (item.subLinks) {
                                return (
                                    <div key={item.label} className="relative group">
                                        <button
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                            className={`
                                                flex items-center gap-1 px-1 py-1.5 text-[14px] font-medium 
                                                transition-colors duration-200 border-b-[3px] rounded-none bg-transparent
                                                ${isActive
                                                    ? "text-[#7C3AED] border-[#7C3AED]"
                                                    : "text-gray-800 border-transparent hover:text-[#7C3AED] hover:border-[#7C3AED]"
                                                }
                                            `}
                                        >
                                            {item.label}
                                            <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
                                        </button>

                                        {/* Dropdown */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-[999]">
                                            <ul className="flex flex-col w-[260px] p-2 bg-white rounded-xl shadow-xl border border-gray-100">
                                                {item.subLinks.map((subItem) => (
                                                    <li key={subItem.href}>
                                                        <Link
                                                            href={subItem.href}
                                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                                            className={`
                                                                no-underline block px-3 py-2.5 text-[13px] font-medium
                                                                text-center transition-all duration-200 rounded-lg
                                                                ${pathname === subItem.href
                                                                    ? "text-[#7C3AED] bg-purple-50"
                                                                    : "text-gray-600 hover:text-[#7C3AED] hover:bg-gray-50"
                                                                }
                                                            `}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        style={{ fontFamily: "Poppins, sans-serif" }}
                                        className={`
                                            block no-underline px-1 py-1.5 text-[14px] font-medium
                                            transition-colors duration-200 border-b-[3px] rounded-none
                                            ${isActive
                                                ? "text-[#7C3AED] border-[#7C3AED]"
                                                : "text-gray-800 border-transparent hover:text-[#7C3AED] hover:border-[#7C3AED]"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

                    {/* ── RIGHT SIDE: Contact + Hamburger ── */}
                    <div className="flex items-center gap-3">
                        {/* Contact button — hidden on small screens */}
                        <Link href="/contact" className="hidden sm:block">
                            <Image
                                src="/buttons/contact.svg"
                                alt="Contact Button"
                                width={115}
                                height={39}
                            />
                        </Link>

                        {/* Hamburger — visible on mobile/tablet */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                            aria-label="Toggle Menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </nav>

                {/* ── MOBILE MENU ── */}
                {mobileOpen && (
                    <div className="lg:hidden mx-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="flex flex-col p-4 gap-1">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

                                if (item.subLinks) {
                                    return (
                                        <div key={item.label}>
                                            {/* Mobile Dropdown Trigger */}
                                            <button
                                                onClick={() => setOpenDropdown(
                                                    openDropdown === item.label ? null : item.label
                                                )}
                                                style={{ fontFamily: "Poppins, sans-serif" }}
                                                className={`
                                                    w-full flex items-center justify-between px-4 py-3 
                                                    text-[14px] font-medium rounded-xl transition-colors
                                                    ${isActive
                                                        ? "text-[#7C3AED] bg-purple-50"
                                                        : "text-gray-800 hover:text-[#7C3AED] hover:bg-gray-50"
                                                    }
                                                `}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 
                                                        ${openDropdown === item.label ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            {/* Mobile Submenu */}
                                            {openDropdown === item.label && (
                                                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-purple-100 pl-3">
                                                    {item.subLinks.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                                            className={`
                                                                block px-3 py-2.5 text-[13px] font-medium 
                                                                rounded-lg transition-colors
                                                                ${pathname === subItem.href
                                                                    ? "text-[#7C3AED] bg-purple-50"
                                                                    : "text-gray-600 hover:text-[#7C3AED] hover:bg-gray-50"
                                                                }
                                                            `}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        style={{ fontFamily: "Poppins, sans-serif" }}
                                        className={`
                                            block px-4 py-3 text-[14px] font-medium 
                                            rounded-xl transition-colors
                                            ${isActive
                                                ? "text-[#7C3AED] bg-purple-50"
                                                : "text-gray-800 hover:text-[#7C3AED] hover:bg-gray-50"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}

                            {/* Contact in mobile menu */}
                            <div className="mt-2 pt-2 border-t border-gray-100">
                                <Link href="/contact" className="block">
                                    <Image
                                        src="/buttons/contact.svg"
                                        alt="Contact Button"
                                        width={115}
                                        height={39}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}