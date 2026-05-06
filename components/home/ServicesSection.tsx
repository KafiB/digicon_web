"use client"
import { useEffect, useRef, useState } from "react"
import { ServiceCard } from "./ServiceCard"

const SERVICES = [
    {
        icon: "/icons/3rd row/call.svg",
        title: "BPO Call Center",
        description: "Efficient customer support and lead generation powered by intelligent routing.",
    },
    {
        icon: "/icons/3rd row/professional.svg",
        title: "Professional Training",
        description: "Upskilling teams for modern challenges with customized certification programs.",
    },
    {
        icon: "/icons/3rd row/software.svg",
        title: "Software Solutions",
        description: "Custom development and SaaS products built on scalable cloud architecture.",
    },
    {
        icon: "/icons/3rd row/consultancy.svg",
        title: "Consultancy",
        description: "Strategic advice for business growth, process optimization, and digital audit.",
    },
]

export function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show when 25%+ visible, hide when less than 25% visible
                setVisible(entry.intersectionRatio >= 0.25)
            },
            {
                threshold: [0, 0.25, 0.75, 1],
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="w-full py-16 bg-white overflow-hidden">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* ── LEFT SIDE ── */}
                    <div
                        className="flex-1 relative transition-all duration-700 ease-in-out"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(-120px)",
                        }}
                    >
                        {/* Shadow Container */}
                        {/* Shadow Container */}
                        <div className="relative">
                            {/* Shadow — pushed down */}
                            <img
                                src="/icons/3rd row/shadow.png"
                                alt="Shadow"
                                className="absolute bottom-0 left-0 w-full h-[85%] object-contain opacity-60 pointer-events-none"
                            />

                            {/* 2x2 Grid — sits above shadow */}
                            <div className="relative grid grid-cols-2 gap-4 p-6 mb-6">
                                {SERVICES.map((service) => (
                                    <ServiceCard
                                        key={service.title}
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT SIDE ── */}
                    <div
                        className="flex-1 flex flex-col gap-6 text-center lg:text-left transition-all duration-700 ease-in-out"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(120px)",
                        }}
                    >
                        {/* Heading */}
                        <h2
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                            className="text-[36px] md:text-[48px] leading-tight text-gray-900"
                        >
                            Digital{" "}
                            <span className="text-[#7C3AED]">Solutions</span>
                            <br />
                            That Drive{" "}
                             <span className="bg-[#FFE599] text-[#1F1F29] px-[4px] -mx-[2px] rounded-[1px] leading-[0.8]">
                                Success
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                            className="text-gray-600 text-[16px] leading-relaxed"
                        >
                            Optimize customer service, empower teams, and digitize operations
                            with scalable business solutions.
                        </p>

                        <p
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                            className="text-gray-600 text-[16px] leading-relaxed"
                        >
                            Your End-to-End Partner for BPO, Training & Digital Solutions
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-center lg:justify-start gap-8 mt-4">

                            <div className="flex flex-col gap-1">
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-[#7C3AED] text-[36px] leading-none"
                                >
                                    150+
                                </span>
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-gray-600 text-[14px]"
                                >
                                    Enterprise<br />Clients
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-[#7C3AED] text-[36px] leading-none"
                                >
                                    25+
                                </span>
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-gray-600 text-[14px]"
                                >
                                    Industries<br />Supported
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-[#7C3AED] text-[36px] leading-none"
                                >
                                    10M+
                                </span>
                                <span
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-gray-600 text-[14px]"
                                >
                                    Calls<br />Handled
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}