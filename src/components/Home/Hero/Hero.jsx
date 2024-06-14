import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <Box position={'relative'} w={'full'} h={'80vh'} zIndex={1}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        left="0"
        bg="#BBA126"
        clipPath="ellipse(91% 54% at 50% 39%)"
      ></Box>
    </Box>
  )
}
