"use client"
import { useEffect, useRef, useState } from "react"
import { ClientCard } from "./ClientCard"

const ROW_1 = [
    { src: "/icons/6th row/Xiaomi_logo_(2021-).svg 1.png", alt: "Xiaomi" },
    { src: "/icons/6th row/gp.svg", alt: "GP" },
    { src: "/icons/6th row/Haier_logo.svg 1 (1).png", alt: "Haier" },
    { src: "/icons/6th row/Akash-logo-blue.svg 1.png", alt: "Akash" },
    { src: "/icons/6th row/sonali.png", alt: "Sonali Bank" },
    { src: "/icons/6th row/Logo_of_Modhumoti_Bank-en.svg 1.png", alt: "Modhumoti Bank" },
    { src: "/icons/6th row/Hatil 1.png", alt: "Hatil" },
]

const ROW_2 = [
    { src: "/icons/6th row/Starlink_Logo.svg 1.png", alt: "Starlink" },
    { src: "/icons/6th row/Coca-Cola_logo.svg 1.png", alt: "Coca Cola" },
    { src: "/icons/6th row/Daraz_Logo 1.png", alt: "Daraz" },
    { src: "/icons/6th row/webinterpret.png", alt: "WebInterpret" },
    { src: "/icons/6th row/uttara.png", alt: "Uttara Motors" },
    { src: "/icons/6th row/Link3_Technologies_Ltd_Logo 1.png", alt: "Link3" },
    { src: "/icons/6th row/Singer_Bangladesh 1.png", alt: "Singer" },
]

const ROW_3 = [
    { src: "/icons/6th row/BPDB.png", alt: "Bangladesh Power Development Board" },
    { src: "/icons/6th row/breb.png", alt: "BREB" },
    { src: "/icons/6th row/runner.png", alt: "Runner" },
    { src: "/icons/6th row/Eicher.png", alt: "Eicher" },
    { src: "/icons/6th row/west.png", alt: "West Zone Power" },
    { src: "/icons/6th row/Logo_of_NESCO.svg 1.png", alt: "NESCO" },
    { src: "/icons/6th row/wasa.png", alt: "WASA" },
]

export function ClientsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.intersectionRatio >= 0.25),
            { threshold: [0, 0.25, 0.75, 1] }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="w-full py-16 bg-[#F5F5FA]">
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

                {/* ── Header ── */}
                <div
                    className="flex flex-col items-center gap-3 mb-12"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(-30px)",
                        transition: "all 0.7s ease-in-out",
                    }}
                >
                    <h2
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                        className="text-[36px] md:text-[42px] text-gray-900"
                    >
                        Our{" "}
                        <span className="text-[#7C3AED]">Client</span>
                    </h2>

                    {/* Purple underline */}
                    <div className="w-16 h-[3px] bg-[#7C3AED] rounded-full" />

                    <p
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                        className="text-gray-400 text-[13px] tracking-[4px] uppercase mt-1"
                    >
                        Testimonials
                    </p>
                </div>

                {/* ── Row 1 ── */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-4"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.7s ease-in-out 0.1s",
                    }}
                >
                    {ROW_1.map((client) => (
                        <ClientCard
                            key={client.alt}
                            src={client.src}
                            alt={client.alt}
                        />
                    ))}
                </div>

                {/* ── Row 2 ── */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-4"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.7s ease-in-out 0.2s",
                    }}
                >
                    {ROW_2.map((client) => (
                        <ClientCard
                            key={client.alt}
                            src={client.src}
                            alt={client.alt}
                        />
                    ))}
                </div>

                {/* ── Row 3 ── */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.7s ease-in-out 0.3s",
                    }}
                >
                    {ROW_3.map((client) => (
                        <ClientCard
                            key={client.alt}
                            src={client.src}
                            alt={client.alt}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}