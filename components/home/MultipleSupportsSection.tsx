"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import React from "react"


export function MultipleSupportsSection() {
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
        <section ref={sectionRef} className="w-full py-10 md:py-16 bg-[#12121E] overflow-hidden">
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-6">

                {/* ── TOP ROW ── */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* ── CARD 1: Multiple Service Supports ── */}
                    <div className="w-full lg:w-[60%] bg-[#1E1E2E] rounded-2xl p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4">

                            {/* Left Text */}
                            <div
                                className="flex flex-col gap-4 max-w-[55%]"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateX(0)" : "translateX(-80px)",
                                    transition: "all 0.7s ease-in-out",
                                }}
                            >
                                <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-snug">
                                    Multiple Service Supports
                                </h3>
                                <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed">
                                    Our ecosystem bridges the gap between human expertise
                                    and automated precision across three core pillars.
                                </p>
                                <Button
                                    className="bg-[#7C3AED] text-white rounded-full px-6 py-2 hover:bg-purple-700 transition-colors w-fit h-auto text-[13px] md:text-[14px]"
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                                >
                                    Get Started
                                </Button>
                            </div>

                            {/* Right Images */}
                            <div
                                className="flex flex-col items-end gap-3"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateX(0)" : "translateX(80px)",
                                    transition: "all 0.7s ease-in-out",
                                }}
                            >
                                <img
                                    src="/icons/4th row/1st_container_1st_image.svg"
                                    alt="Service 1"
                                    className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain hover:scale-110 transition-transform duration-300"
                                />
                                <div className="flex gap-3">
                                    <img
                                        src="/icons/4th row/1st_container_2nd_image.svg"
                                        alt="Service 2"
                                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                    <img
                                        src="/icons/4th row/1st_container_3rd_image.svg"
                                        alt="Service 3"
                                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ── CARD 2: Performance Stats ── */}
                    <div className="w-full lg:w-[40%] bg-[#1E1E2E] rounded-2xl p-6 md:p-8 flex flex-col gap-4">

                        {/* Title */}
                        <h3
                            className="text-white text-[18px] md:text-[20px] font-bold"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(-20px)",
                                transition: "all 0.7s ease-in-out",
                            }}
                        >
                            Performance Stats
                        </h3>

                        {/* Uptime */}
                        <div
                            className="flex flex-col gap-1"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(-20px)",
                                transition: "all 0.7s ease-in-out 0.1s",
                            }}
                        >
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-[11px] md:text-[12px] uppercase tracking-wider">Uptime</span>
                                <span className="text-white text-[11px] md:text-[12px] font-semibold">99.98%</span>
                            </div>
                            <div className="w-full h-[5px] bg-gray-700 rounded-full">
                                <div className="h-full w-[99%] bg-[#7C3AED] rounded-full" />
                            </div>
                        </div>

                        {/* Efficiency */}
                        <div
                            className="flex flex-col gap-1"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(-20px)",
                                transition: "all 0.7s ease-in-out 0.2s",
                            }}
                        >
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-[11px] md:text-[12px] uppercase tracking-wider">Efficiency Increase</span>
                                <span className="text-[#7C3AED] text-[11px] md:text-[12px] font-semibold">+42%</span>
                            </div>
                            <div className="w-full h-[5px] bg-gray-700 rounded-full">
                                <div className="h-full w-[42%] bg-cyan-400 rounded-full" />
                            </div>
                        </div>

                        {/* Bar Chart */}
                        <div
                            className="flex items-end gap-1 md:gap-2 h-[70px] md:h-[80px] mt-2"
                            style={{
                                opacity: visible ? 1 : 0,
                                transition: "all 0.7s ease-in-out 0.3s",
                            }}
                        >
                            {[30, 45, 35, 50, 60, 75, 90].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 rounded-t-sm"
                                    style={{
                                        height: `${h}%`,
                                        backgroundColor: i >= 5 ? "#7C3AED" : "#22D3EE",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Daily Call Volume */}
                        <div
                            className="flex justify-between mt-1"
                            style={{
                                opacity: visible ? 1 : 0,
                                transition: "all 0.7s ease-in-out 0.4s",
                            }}
                        >
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 text-[10px] md:text-[11px] uppercase tracking-wider">Daily Call Volume</span>
                                <span className="text-gray-500 text-[9px] md:text-[10px]">Real-time load balancing active</span>
                            </div>
                            <span className="text-white text-[13px] md:text-[14px] font-semibold">1.2M+</span>
                        </div>

                    </div>
                </div>

                {/* ── BOTTOM ROW ── */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* ── CARD 3: Worldwide Reach ── */}
                    <div className="w-full lg:w-[35%] bg-[#1E1E2E] rounded-2xl p-6 md:p-8 flex flex-col gap-4">

                        <h3
                            className="text-white text-[18px] md:text-[22px] font-bold"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateX(0)" : "translateX(-40px)",
                                transition: "all 0.7s ease-in-out",
                            }}
                        >
                            Worldwide Reach
                        </h3>

                        {/* Globe */}
                        {/* Globe — shows 50%, rotates on hover */}
                        <div className="flex justify-center overflow-hidden h-[80px] md:h-[100px]">
                            <img
                                src="/icons/4th row/earth.svg"
                                alt="Earth"
                                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-contain hover:rotate-180 transition-transform duration-700 -mt-4"
                            />
                        </div>
                        {/* Stats */}
                        <div
                            className="flex items-center justify-between mt-2"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateX(0)" : "translateX(-40px)",
                                transition: "all 0.7s ease-in-out 0.3s",
                            }}
                        >
                            {[
                                { value: "14", label: "Hubs" },
                                { value: "40+", label: "Countries" },
                                { value: "32", label: "Languages" },
                            ].map((stat, i) => (
                                <React.Fragment key={stat.label}>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[#7C3AED] text-[22px] md:text-[28px] font-bold">{stat.value}</span>
                                        <span className="text-gray-400 text-[10px] md:text-[11px] tracking-widest uppercase">{stat.label}</span>
                                    </div>
                                    {i < 2 && <div className="w-[1px] h-[40px] bg-gray-700" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* ── CARD 4: Integrated Solutions ── */}
                    <div className="w-full lg:w-[65%] bg-[#1E1E2E] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">

                        {/* Left Text */}
                        <div
                            className="flex flex-col gap-4 flex-1"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateX(0)" : "translateX(-80px)",
                                transition: "all 0.7s ease-in-out",
                            }}
                        >
                            <h3 className="text-white text-[18px] md:text-[22px] font-bold leading-snug">
                                We Provide<br />Integrated Solutions
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    "Unified Command Center",
                                    "Cross-Platform Integration",
                                    "Automated Reporting Cycles",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-300 text-[13px] md:text-[14px]">
                                        <span className="text-[#7C3AED] text-lg">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div
                            className="flex-1 flex justify-center"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateX(0)" : "translateX(80px)",
                                transition: "all 0.7s ease-in-out",
                            }}
                        >
                            <img
                                src="/icons/4th row/4th_container_image.svg"
                                alt="Fully Integrated Solutions"
                                className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[220px] h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}