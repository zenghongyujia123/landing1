<template>
  <NuxtLayout>
    <Navbar />
    <Hero />
    <Sponsors />
    <Benefits />
    <Features />
    <Services />
    <HowItWorks />
    <Testimonials />
    <Team />
    <Community />
    <Pricing />
    <Contact />
    <FAQ />
    <Footer />
  </NuxtLayout>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Sponsors from '@/components/Sponsors.vue'
import Benefits from '@/components/Benefits.vue'
import Features from '@/components/Features.vue'

import Services from '@/components/Services.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Testimonials from '@/components/Testimonials.vue'
import Team from '@/components/Team.vue'
import Community from '@/components/Community.vue'
import Pricing from '@/components/Pricing.vue'
import Contact from '@/components/Contact.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'










definePageMeta({
  layout: 'default'
})

const router = useRouter()

const features = [
  {
    title: 'Modern Technology Stack',
    description: 'Built with Vue 3 and Nuxt 3, using the latest web technologies',
    icon: '/images/feature-tech.svg'
  },
  {
    title: 'Performance First',
    description: 'Optimized for speed with automatic code splitting and server-side rendering',
    icon: '/images/feature-performance.svg'
  },
  {
    title: 'Developer Experience',
    description: 'Enjoy hot module replacement and powerful development tools',
    icon: '/images/feature-dev.svg'
  },
  {
    title: 'Production Ready',
    description: 'Deploy with confidence using our production-optimized build system',
    icon: '/images/feature-production.svg'
  }
]

const navigateToContact = () => {
  router.push('/contact')
}

const navigateToAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
</style>