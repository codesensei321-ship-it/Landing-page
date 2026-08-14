import HeroSection from '@/components/hero-section-6'
import VideoSection from '@/components/video-section'
import Integrations1 from '@/components/integrations-1'
import FeaturesSection5 from '@/components/features-5'
import FeaturesSection6 from '@/components/features-6'
import Comparator from '@/components/comparator-1'
import SavingsCalculator from '@/components/savings-calculator'
import Testimonials from '@/components/testimonials-2'
import Pricing from '@/components/pricing-1'
import StarterKit from '@/components/starter-kit'
import ManagedServiceBanner from '@/components/managed-service-banner'
import FAQs from '@/components/faqs-1'
import CallToAction from '@/components/call-to-action-4'
import Footer from '@/components/footer-3'

export default function Home() {
    return (
        <>
            <HeroSection />
            <VideoSection />
            <Testimonials />
            <Integrations1 />
            <FeaturesSection5 />
            <FeaturesSection6 />
            <Comparator />
            <SavingsCalculator />
            <Pricing />
            <StarterKit />
            <ManagedServiceBanner />
            <FAQs />
            <CallToAction />
            <Footer />
        </>
    )
}
