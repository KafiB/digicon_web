"use client"
import { useEffect, useRef, useState } from "react"

const TESTIMONIALS = [
    {
        id: 0,
        avatar: "/icons/7th row/c1.png",
        name: "Sarah Johnson",
        role: "Operations Director",
        company: "Eastern Fintech",
        title: "Reliable Outsourcing Partner",
        quote: "Digicon has become an essential extension of our support team. Their responsiveness, professionalism, and operational efficiency have helped us maintain exceptional service standards.",
        rating: 5,
    },
    {
        id: 1,
        avatar: "/icons/7th row/c2.png",
        name: "Fahim Rahman",
        role: "Head of IT",
        company: "Eastern Fintech",
        title: "Reliable Outsourcing Partner",
        quote: "Digicon has become an essential extension of our support team. Their responsiveness, professionalism, and operational efficiency have helped us maintain exceptional service standards.",
        rating: 5,
    },
    {
        id: 2,
        avatar: "/icons/7th row/c4.png",
        name: "Arif Hossain",
        role: "CTO",
        company: "Eastern Fintech",
        title: "World Class BPO Service",
        quote: "Working with Digicon transformed our customer support operations. Their team is highly trained, responsive, and always goes above and beyond to deliver results.",
        rating: 5,
    },
    {
        id: 3,
        avatar: "/icons/7th row/c3.png",
        name: "Priya Sharma",
        role: "Head of Customer Success",
        company: "Eastern Fintech",
        title: "Exceptional Team & Results",
        quote: "The level of professionalism and dedication from the Digicon team is unmatched. They have significantly improved our customer satisfaction scores.",
        rating: 5,
    },
]

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [active, setActive] = useState(1)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.intersectionRatio >= 0.25),
            { threshold: [0, 0.25, 0.75, 1] }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const current = TESTIMONIALS[active]

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 bg-[#1E1060] overflow-hidden"
        >
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
                        className="text-[36px] md:text-[42px] text-white"
                    >
                        Our{" "}
                        <span className="text-[#A78BFA]">Client Say</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[#7C3AED] rounded-full" />
                    <p
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                        className="text-gray-300 text-[13px] tracking-[4px] uppercase mt-1"
                    >
                        Testimonials
                    </p>
                </div>

                {/* ── Main Content ── */}
                <div
                    className="flex flex-col lg:flex-row items-stretch gap-6"
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: "all 0.7s ease-in-out 0.2s",
                    }}
                >

                    {/* ── LEFT: Office Image ── */}
                    <div className="w-full lg:w-[42%] rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[420px]">
                        <img
                            src="/icons/7th row/img.png"
                            alt="Digicon Team"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* ── RIGHT: Testimonial Card ── */}
                    <div className="flex-1 flex flex-col justify-between gap-6">

                        {/* Quote Card */}
                        <div className="bg-[#2D1B8E] rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative">

                            {/* Stars + Quote Icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: current.rating }).map((_, i) => (
                                        <img
                                            key={i}
                                            src="/icons/7th row/star.png"
                                            alt="star"
                                            className="w-5 h-5 object-contain"
                                        />
                                    ))}
                                </div>
                                <img
                                    src="/icons/7th row/Subtract.png"
                                    alt="quote"
                                    className="w-8 h-8 object-contain opacity-60"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                className="text-white text-[18px] italic"
                            >
                                {current.title}
                            </h3>

                            {/* Quote Text */}
                            <p
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed"
                            >
                                "{current.quote}"
                            </p>

                            {/* Speech bubble tail */}
                            <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-[#2D1B8E]" />
                        </div>

                        {/* Author + Company */}
                        <div className="flex items-center justify-between mt-4 px-2">
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={current.avatar}
                                    alt={current.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-[#7C3AED]"
                                />
                                <div>
                                    <p
                                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                        className="text-white text-[15px]"
                                    >
                                        {current.name}
                                    </p>
                                    <p
                                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                        className="text-gray-400 text-[13px]"
                                    >
                                        {current.role}
                                    </p>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="flex items-center gap-2">
                                <img
                                    src="/icons/7th row/Vector.png"
                                    alt="Eastern Fintech"
                                    className="w-8 h-8 object-contain"
                                />
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-white text-[15px]"
                                >
                                    {current.company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── FAR RIGHT: Avatar Selector ── */}
                    <div className="hidden lg:flex flex-col items-center justify-center gap-3">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={t.id} className="flex items-center gap-2">
                                <button
                                    onClick={() => setActive(i)}
                                    className={`rounded-full overflow-hidden transition-all duration-300 
                                        ${active === i
                                            ? "w-14 h-14 ring-4 ring-[#7C3AED] ring-offset-2 ring-offset-[#1E1060]"
                                            : "w-11 h-11 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-full h-full object-cover"
                                    />
                                </button>

                                {/* Dot indicator */}
                                <div className={`w-2 h-2 rounded-full transition-all duration-300
                                    ${active === i ? "bg-[#7C3AED] scale-125" : "bg-gray-600"}`}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* ── Mobile Dots ── */}
                <div className="flex lg:hidden items-center justify-center gap-2 mt-6">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-300
                                ${active === i
                                    ? "w-6 h-2 bg-[#7C3AED]"
                                    : "w-2 h-2 bg-gray-600"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}