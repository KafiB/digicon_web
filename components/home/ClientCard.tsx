interface ClientCardProps {
    src: string
    alt: string
}

export function ClientCard({ src, alt }: ClientCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 aspect-square">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain max-h-[80px]"
            />
        </div>
    )
}