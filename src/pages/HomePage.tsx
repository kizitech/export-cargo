import ServiceSection from '../components/ServiceSection'
import HeroSection from '../components/HeroSection'
import StatisticSection from '../components/StatisticSection'
import PartnershipSection from '../components/PartnershipSection'
import AboutUsSection from '../components/AboutUsSection'
import Gallery from '../components/Gallery'
import CTASection from '../components/CTASection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <PartnershipSection />
            <AboutUsSection />
            <StatisticSection />
            <CTASection />
            <ServiceSection />
            <Gallery />
        </>
    )
}

export default HomePage