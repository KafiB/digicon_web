import { HeroSection } from "@/components/home/HeroSection"
import { BrandsSection } from "@/components/home/BrandsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { MultipleSupportsSection } from "@/components/home/MultipleSupportsSection"
import { TechExcellenceSection } from "@/components/home/TechExcellenceSection"
import { ClientsSection } from "@/components/home/ClientsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"



export default function Home() {
    return (
        <div>
            <HeroSection />
            <BrandsSection />
            <ServicesSection />
            <MultipleSupportsSection />
            <TechExcellenceSection />
            <ClientsSection />
            <TestimonialsSection />
        </div>
    )
}