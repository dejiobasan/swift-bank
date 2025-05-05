import Hero from '@/components/Hero';
import AppDemo from '@/components/AppDemoSection';
import AboutUs from '@/components/AboutUsSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-custombg">
      <Hero />
      <AppDemo/>
      <AboutUs />
      <FeedbackSection />
      <Footer />
    </main>
  )
}