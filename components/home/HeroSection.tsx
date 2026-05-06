import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="w-full min-h-[calc(100vh-80px)] flex items-center">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* ── LEFT SIDE ── */}
                <div className="flex-1 flex flex-col gap-5 md:gap-6 max-w-full lg:max-w-[600px] animate-[slide-in-left_0.8s_ease-out_forwards] text-center lg:text-left items-center lg:items-start">

                    {/* Badge */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-fit">
                        <Image
                            src="/logo/small_logo.svg"
                            alt="Digicon Icon"
                            width={24}
                            height={24}
                        />
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "127%",
                                color: "#656565",
                            }}
                        >
                            Create Your Dream Project With Us
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            lineHeight: "1.1",
                            letterSpacing: "-1px",
                        }}
                        className="text-gray-900 text-[32px] sm:text-[42px] md:text-[52px] "
                    >
                        Experience With BPO <br />
                        <span className="text-[#7C3AED]">Call Centre </span>
                        <span className="inline-flex items-center">
                            <span className="bg-[#FFE599] text-[#1F1F29] px-[4px] -mx-[2px] rounded-[1px] leading-[0.8]">
                                Solutions
                            </span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "151%",
                            color: "#646466",
                        }}
                        className="max-w-full lg:max-w-[520px]"
                    >
                        Outsourcing your{" "}
                        <strong className="font-semibold text-gray-900">call center</strong>{" "}
                        operations can revolutionize the way manage customer support,
                        with our expert an team handling every
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center lg:justify-start gap-0 w-full sm:w-fit flex-wrap sm:flex-nowrap">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center lg:items-start px-4 sm:pr-8 sm:pl-0">
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 600,
                                fontSize: "clamp(22px, 3vw, 36px)",
                                lineHeight: "151%",
                                color: "#111",
                            }}>
                                200K
                            </span>
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "151%",
                                color: "#646466",
                            }}>
                                Happy Customer
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-[50px] bg-gray-300 mx-2 sm:mx-4" />

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center lg:items-start px-4 sm:px-8">
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 600,
                                fontSize: "clamp(22px, 3vw, 36px)",
                                lineHeight: "151%",
                                color: "#111",
                            }}>
                                20+
                            </span>
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "151%",
                                color: "#646466",
                            }}>
                                Years Experience
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-[50px] bg-gray-300 mx-2 sm:mx-4" />

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center lg:items-start px-4 sm:pl-8 sm:pr-0">
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 600,
                                fontSize: "clamp(22px, 3vw, 36px)",
                                lineHeight: "151%",
                                color: "#111",
                            }}>
                                24/7
                            </span>
                            <span style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "151%",
                                color: "#646466",
                            }}>
                                Customer Support
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-3 mt-2">
                        <Button
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                            className="bg-[#7C3AED] text-white text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-purple-700 transition-colors duration-200 h-auto"
                        >
                            Boast Your Customer Support
                        </Button>
                      
                    </div>

                </div>

                {/* ── RIGHT SIDE ── */}
                <div className="flex flex-1 items-center justify-center relative w-full lg:w-auto">

                    {/* Shadow Effect Background */}
                    <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px]">
                        <Image
                            src="/shadow_effect/shadow_effect.svg"
                            alt="Shadow Effect"
                            fill
                            className="object-contain"
                        />

                        {/* Agent Console — slides in from right */}
                        <div className="absolute inset-0 flex items-center justify-center animate-[slide-in-right_0.8s_ease-out_forwards]">
                            <Image
                                src="/home/agent_console.svg"
                                alt="Agent Console"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}