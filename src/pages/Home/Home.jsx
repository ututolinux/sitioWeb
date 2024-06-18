import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import Info from '../../components/Home/Info/Info'
import AboutUs from '../../components/Home/AboutUs/AboutUs'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      
      <Hero />
      <Info />
      <AboutUs />
    </Box>
  )
}
