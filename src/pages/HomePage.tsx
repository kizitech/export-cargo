import ServiceSection from '../components/ServiceSection'
import HeroSection from '../components/HeroSection'
import StatisticSection from '../components/StatisticSection'
import PartnershipSection from '../components/PartnershipSection'
import AboutUsSection from '../components/AboutUsSection'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <PartnershipSection />
            <AboutUsSection />
            <StatisticSection />
            <CTA />
            <ServiceSection />
            <Gallery />
        </>
    )
}

export default HomePage