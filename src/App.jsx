import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Destinations from './components/Destinations'
import PlansCTA from './components/PlansCTA'
import Footer from './components/Footer'
import ScrollTopFab from './components/ScrollTopFab'

export default function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Container maxWidth="lg">
          <Features />
          <HowItWorks />
          <PlansCTA />
        </Container>
      </main>
      <Footer />
      <ScrollTopFab />
    </Box>
  )
}
