"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function TechExcellenceSection() {
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
        <section ref={sectionRef} className="w-full py-16 bg-white overflow-hidden">
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ── LEFT SIDE ── */}
                    <div
                        className="flex-1 flex flex-col gap-8"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(-80px)",
                            transition: "all 0.7s ease-in-out",
                        }}
                    >
                        {/* Heading */}
                        <h2
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                            className="text-[32px] sm:text-[40px] md:text-[48px] leading-tight text-gray-900"
                        >
                            Stay In{" "}
                            <span className="text-[#7C3AED]">Control</span>{" "}
                            With
                            <br />
                            Tech{" "}
                            <span className="bg-[#FFE599] text-[#1F1F29] px-2 inline-block">
                                Excellence
                            </span>
                        </h2>

                        {/* Feature 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                                <img
                                    src="/icons/5th row/img1.png"
                                    alt="Secure BPO"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-900 text-[18px]"
                                >
                                    Secure BPO Infrastructure
                                </h3>
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-gray-500 text-[14px] leading-relaxed"
                                >
                                    Robust, end-to-end encrypted communication
                                    channels and data management processes
                                    designed for high-volume global call centers.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                                <img
                                    src="/icons/5th row/img2.png"
                                    alt="Scalable Training"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-900 text-[18px]"
                                >
                                    Scalable Training & Software
                                </h3>
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-gray-500 text-[14px] leading-relaxed"
                                >
                                    Dynamic agent upskilling platforms combined with
                                    bespoke enterprise software solutions that grow
                                    alongside your business needs.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                            className="bg-[#7C3AED] text-white rounded-full px-7 py-3 h-auto w-fit hover:bg-purple-700 transition-colors flex items-center gap-2"
                        >
                            Get Started
                            <span className="text-lg">↗</span>
                        </Button>
                    </div>

                    {/* ── RIGHT SIDE ── */}
                    <div
                        className="flex-1 relative w-full"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(80px)",
                            transition: "all 0.7s ease-in-out",
                        }}
                    >
                        {/* Wrapper to position cards */}
                        <div className="relative mx-auto w-full max-w-[480px] h-[380px] sm:h-[420px]">

                            {/* ── CLIENT ROI BADGE (top right, overlaps black card) ── */}
                            <div className="absolute top-[-18] right-[19] z-30 bg-[#7C3AED] text-white rounded-2xl px-4 py-3 shadow-xl w-[150px]">
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                    className="text-[9px] font-medium opacity-80 uppercase tracking-wider"
                                >
                                    Client ROI
                                </p>
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-[20px]"
                                >
                                    $52,341
                                </p>
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                    className="text-[10px] opacity-80"
                                >
                                    ↗ +7.6% growth
                                </p>
                            </div>

                            {/* ── MAIN BLACK CARD (Operational Transactions) ── */}
                            <div className="absolute top-[50px] right-0 z-20 bg-[#1A1A2E] rounded-2xl p-5 w-[280px] sm:w-[320px] shadow-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <h4
                                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                        className="text-white text-[13px] sm:text-[14px]"
                                    >
                                        Operational Transactions
                                    </h4>
                                    <span className="text-gray-500 text-[18px] tracking-widest">···</span>
                                </div>

                                {/* Row 1 */}
                                <div className="flex items-center justify-between py-3 border-b border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                            className="text-gray-400 text-[12px]"
                                        >
                                            Active Call Streams
                                        </span>
                                    </div>
                                    <span
                                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                        className="text-white text-[16px]"
                                    >
                                        1,402
                                    </span>
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-between py-3 border-b border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 text-[11px]">👤</span>
                                        <span
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                            className="text-gray-400 text-[12px]"
                                        >
                                            Agent Training Progress
                                        </span>
                                    </div>
                                    <div className="w-[70px] h-[5px] bg-gray-700 rounded-full">
                                        <div className="h-full w-[70%] bg-[#7C3AED] rounded-full" />
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="flex items-center justify-between py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                                        <span
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                            className="text-gray-400 text-[12px]"
                                        >
                                            System Uptime
                                        </span>
                                    </div>
                                    <span
                                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                        className="text-white text-[13px]"
                                    >
                                        99.98%
                                    </span>
                                </div>
                            </div>

                            {/* ── MONTHLY PERFORMANCE CARD (Adjusted positioning) ── */}
                            <div className="absolute bottom-[15px] left-[10px] z-30 bg-white rounded-2xl p-4  sm:w-[200px] h-[160px] shadow-xl border border-gray-100">
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-800 text-[12px] mb-3"
                                >
                                    Monthly Performance
                                </p>
                                {/* Mini Bar Chart */}
                                <div className="flex items-end gap-1 h-[100px]">
                                    {[35, 55, 100, 40, 50, 60].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-t-sm transition-all duration-300"
                                            style={{
                                                height: `${h}%`,
                                                // Keep the purple bar index based on your preference
                                                backgroundColor: i === 2 ? "#7C3AED" : "#E5E7EB",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* ── SHAPE ICONS (bottom right) ── */}
                            <div className="absolute bottom-10 right-0 flex items-center gap-2 sm:gap-3">
                                <img
                                    src="/icons/5th row/rectangle.png"
                                    alt="rectangle"
                                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                                />
                                <img
                                    src="/icons/5th row/circle.png"
                                    alt="circle"
                                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                                />
                                <img
                                    src="/icons/5th row/diamond.png"
                                    alt="diamond"
                                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                                />
                                <img
                                    src="/icons/5th row/rectangle.png"
                                    alt="rectangle2"
                                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}