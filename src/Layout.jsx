import React from 'react'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box minH={'50vh'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout