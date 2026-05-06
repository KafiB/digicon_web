import Image from "next/image"

interface ServiceCardProps {
    icon: string
    title: string
    description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-[#1E1E2E] rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            
            {/* Icon Circle */}
            <div className="w-14 h-14 rounded-full bg-[#2A2A3E] flex items-center justify-center">
                <img
                    src={icon}
                    alt={title}
                />
            </div>

            {/* Title */}
            <h3
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                className="text-white text-[18px] leading-snug"
            >
                {title}
            </h3>

            {/* Description */}
            <p
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                className="text-gray-400 text-[14px] leading-relaxed"
            >
                {description}
            </p>

        </div>
    )
}