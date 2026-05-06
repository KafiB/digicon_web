import { HeroSection } from "@/components/home/HeroSection"
import { BrandsSection } from "@/components/home/BrandsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { MultipleSupportsSection } from "@/components/home/MultipleSupportsSection"




export default function Home() {
    return (
        <div>
            <HeroSection />
            <BrandsSection />
            <ServicesSection />
            <MultipleSupportsSection />
            <div className="py-12">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <p className="text-center text-gray-600 mb-12">Have questions? Get in touch with our team.</p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                        {[
                            { icon: "✉️", label: "Email", value: "hello@company.com" },
                            { icon: "📞", label: "Phone", value: "+1 (800) 555-0199" },
                            { icon: "📍", label: "Office", value: "123 Main St, NY" },
                            { icon: "🕐", label: "Hours", value: "Mon–Fri, 9am–6pm" },
                        ].map((item) => (
                            <div key={item.label} className="bg-gray-50 rounded-lg p-4 text-center">
                                <p className="text-2xl mb-1">{item.icon}</p>
                                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                                <p className="text-sm font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="border border-gray-200 rounded-xl p-6">
                            <h3 className="text-base font-medium mb-5">Send us a message</h3>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Full name</label>
                                    <input type="text" placeholder="Jane Smith" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Email address</label>
                                    <input type="email" placeholder="jane@example.com" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Subject</label>
                                    <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300">
                                        <option>General inquiry</option>
                                        <option>Technical support</option>
                                        <option>Billing question</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Message</label>
                                    <textarea placeholder="Tell us how we can help..." rows={4} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 resize-y" />
                                </div>
                                <button className="w-full bg-gray-900 text-white rounded-md py-2 text-sm font-medium hover:bg-gray-700 transition-colors">
                                    Send message
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            {/* Team */}
                            <div className="border border-gray-200 rounded-xl p-5">
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">Our team</p>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { initials: "AR", name: "Alex Rivera", role: "Head of Support", status: "Online", color: "bg-blue-100 text-blue-700" },
                                        { initials: "MK", name: "Maya Kim", role: "Sales & Partnerships", status: "Online", color: "bg-amber-100 text-amber-700" },
                                        { initials: "JP", name: "James Park", role: "Technical Support", status: "Away", color: "bg-gray-100 text-gray-600" },
                                    ].map((member) => (
                                        <div key={member.name} className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${member.color}`}>
                                                {member.initials}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium">{member.name}</p>
                                                <p className="text-xs text-gray-500">{member.role}</p>
                                            </div>
                                            <span className={`text-xs px-2 py-0.5 rounded-md ${member.status === "Online" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                                {member.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Response Times */}
                            <div className="border border-gray-200 rounded-xl p-5">
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Average response time</p>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { time: "~2h", channel: "Email" },
                                        { time: "<5m", channel: "Live chat" },
                                        { time: "1d", channel: "Phone" },
                                    ].map((item) => (
                                        <div key={item.channel} className="bg-gray-50 rounded-lg p-3 text-center">
                                            <p className="text-lg font-medium">{item.time}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.channel}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border border-gray-200 rounded-xl p-5">
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">FAQ</p>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { q: "How do I reset my password?", a: "Use the \"Forgot password\" link on the login page." },
                                        { q: "Can I change my plan anytime?", a: "Yes, upgrades take effect immediately. Downgrades apply at renewal." },
                                        { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all plans." },
                                    ].map((item, i, arr) => (
                                        <div key={item.q} className={i < arr.length - 1 ? "border-b border-gray-100 pb-3" : ""}>
                                            <p className="text-sm font-medium mb-1">{item.q}</p>
                                            <p className="text-xs text-gray-500">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}