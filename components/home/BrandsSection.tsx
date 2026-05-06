import React from "react"

const BRANDS = [
    { name: "Nagad", src: "/brands/nagad.png" },
    { name: "Haier", src: "/brands/haier.png" },
    { name: "Akash", src: "/brands/akash.png" },
    { name: "Sonali Bank", src: "/brands/sonali.png" },
    { name: "Modhumita", src: "/brands/modhumoti.png" },
    { name: "Hatil", src: "/brands/hatil.png" },
    { name: "Starlink", src: "/brands/starlink.png" },
]

export function BrandsSection() {
    return (
        <section className="w-full bg-[#F5F5F5] py-6">
            <div className="w-full px-3">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center">
                    {BRANDS.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            {/* Responsive box */}
                            <div className="
                                h-[40px] w-[90px]
                                sm:h-[45px] sm:w-[100px]
                                md:h-[50px] md:w-[120px]
                                lg:h-[60px] lg:w-[140px]
                                flex items-center justify-center
                            ">
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}