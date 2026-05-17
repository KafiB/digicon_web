"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const RECENT_UPDATES = [
    "/icons/8th row/gp.png",
    "/icons/8th row/mi.png",
    "/icons/8th row/lg.png",
    "/icons/8th row/ai.png",
    "/icons/8th row/tk.png",
    "/icons/8th row/nagad.png",
]

export function Footer() {
    const [email, setEmail] = useState("")

    return (
        <div className="w-full">

            {/* ── WHITE BACKGROUND SECTION ── */}
            <div className="w-full bg-white relative z-20 pb-10">
                <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 relative -mb-32">

                    {/* Purple CTA Banner */}
                    <div className="relative bg-[#7C3AED] shadow-xl rounded-3xl overflow-hidden px-8 md:px-14 py-12 max-w-[1280px] mx-auto translate-y-10">
                        
                        {/* Background circles */}
                        <div className="absolute right-[32%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-[50px] border-[#9333EA] opacity-25 pointer-events-none" />
                        <div className="absolute right-[26%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[35px] border-[#9333EA] opacity-15 pointer-events-none" />

                        {/* 
                          FIXED FLEX CONTAINER: 
                          Removed justify-between, added lg:gap-32 to push items into the middle, 
                          and lg:pr-[300px] to protect the area where the image sits 
                        */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-10 lg:gap-32 relative w-full lg:pr-[300px]">

                            {/* LEFT: Text + Email */}
                            <div className="flex flex-col gap-5 max-w-[480px] z-10 shrink-0">
                                <h2
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                                    className="text-white text-[26px] sm:text-[32px] md:text-[38px] leading-tight"
                                >
                                    Get Started with Expert
                                    BPO Solutions Services
                                </h2>
                                <p
                                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                    className="text-purple-200 text-[14px] leading-relaxed"
                                >
                                    Are you ready to elevate your customer service streamline your
                                    operations? At Digicon, we specialize provide tailored.
                                </p>

                                {/* Email Input */}
                                <div className="flex items-center bg-[#6D28D9] rounded-full p-1.5 gap-2 mt-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address"
                                        style={{ fontFamily: "Poppins, sans-serif" }}
                                        className="flex-1 bg-transparent text-white placeholder-purple-300 text-[14px] px-4 outline-none min-w-0"
                                    />
                                    <div className="flex items-center gap-1 shrink-0">
                                        <Button
                                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                            className="bg-white text-[#7C3AED] rounded-full px-5 py-2.5 h-auto hover:bg-purple-50 text-[13px]"
                                        >
                                            Subscribe
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* MIDDLE: Service Tags (Now sits cleanly in the red box area) */}
                            <div className="flex flex-col gap-4 z-10 w-full max-w-[300px] mt-4 lg:mt-6">
                                {["IT Solution Service", "Cyber Security Service", "Software Development"].map((service) => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 shadow-sm"
                                    >
                                        <img src="/icons/8th row/tick.png" alt="tick" className="w-5 h-5 object-contain" />
                                        <span
                                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                                            className="text-white text-[14px]"
                                        >
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* RIGHT: Girl Image (Kept entirely separate from the flexbox layout) */}
                        <div className="hidden lg:block absolute right-4 lg:right-8 bottom-0 z-10 pointer-events-none">
                            <img
                                src="/icons/8th row/girl.png"
                                alt="BPO Agent"
                                className="h-[320px] object-contain object-bottom"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ── DARK FOOTER ── */}
            <footer className="w-full bg-[#12121E] pt-[150px] relative z-10">
                {/* TOP INFO BAR */}
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-6 border-b border-gray-800">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">

                        <div className="flex items-center gap-3">
                            <img src="/icons/8th row/tick.png" alt="phone" className="w-4 h-4 object-contain opacity-70" />
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                                className="text-gray-300 text-[14px]">+1234 5678 910</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">✉</span>
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                                className="text-gray-300 text-[14px]">info@digicontechnologies.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">📍</span>
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                                className="text-gray-300 text-[14px]">
                                242/A Tejgaon I/A, Gulshan Link Road, Dhaka-1208, Bangladesh
                            </span>
                        </div>

                    </div>
                </div>

                {/* MAIN FOOTER LINKS */}
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                        {/* Col 1: Logo */}
                        <div className="lg:col-span-1 flex flex-col gap-4">
                            <img src="/icons/8th row/digicon.png" alt="Digicon"
                                className="h-14 w-auto object-contain object-left" />
                            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                className="text-gray-400 text-[13px] leading-relaxed">
                                Empowering enterprises through strategic
                                outsourcing and automated excellence.
                            </p>
                            <div className="flex items-center gap-3 mt-1">
                                {[
                                    { src: "/icons/8th row/twi.png", alt: "Twitter" },
                                    { src: "/icons/8th row/liknd.png", alt: "LinkedIn" },
                                    { src: "/icons/8th row/ins.png", alt: "Instagram" },
                                ].map((s) => (
                                    <Link key={s.alt} href="#">
                                        <img src={s.src} alt={s.alt}
                                            className="w-7 h-7 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Col 2: Shortcuts */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-700 rounded-lg px-4 py-2 w-fit">
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-300 text-[13px]">Shortcuts</span>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {["About", "Contact Support", "Contact Support", "Service"].map((item, i) => (
                                    <li key={i}>
                                        <Link href="#"
                                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                            className="text-gray-400 text-[13px] hover:text-[#7C3AED] transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Useful Links */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-700 rounded-lg px-4 py-2 w-fit">
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-300 text-[13px]">Useful links</span>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {["Career in", "Community", "Blog"].map((item) => (
                                    <li key={item}>
                                        <Link href="#"
                                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                            className="text-gray-400 text-[13px] hover:text-[#7C3AED] transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Social Media */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-700 rounded-lg px-4 py-2 w-fit">
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-300 text-[13px]">Social Media</span>
                            </div>
                            <ul className="flex flex-col gap-4">
                                {[
                                    { src: "/icons/8th row/insta.png", alt: "Instagram" },
                                    { src: "/icons/8th row/fb.png", alt: "Facebook" },
                                    { src: "/icons/8th row/yt.png", alt: "YouTube" },
                                    { src: "/icons/8th row/linki.png", alt: "LinkedIn" },
                                ].map((s) => (
                                    <li key={s.alt}>
                                        <Link href="#">
                                            <img src={s.src} alt={s.alt}
                                                className="h-5 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 5: Recent Updates */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-700 rounded-lg px-4 py-2 w-fit">
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                                    className="text-gray-300 text-[13px]">Recent Updates</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {RECENT_UPDATES.map((src, i) => (
                                    <div key={i}
                                        className="w-full aspect-square rounded-xl bg-[#1E1E2E] flex items-center justify-center p-2 hover:bg-[#2A2A3E] transition-colors cursor-pointer">
                                        <img src={src} alt={`update-${i}`} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="w-full border-t border-gray-800">
                    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                            className="text-gray-500 text-[12px] text-center sm:text-left">
                            © 2024 Digicon BPO. Delivering Excellence in Business Process Outsourcing.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="#"
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                className="text-gray-500 text-[12px] hover:text-[#7C3AED] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#"
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                                className="text-gray-500 text-[12px] hover:text-[#7C3AED] transition-colors">
                                Security
                            </Link>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}