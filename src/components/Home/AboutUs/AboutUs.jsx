import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function AboutUs() {
  return (
    <Box w="full" minH="100svh" position="relative" overflow="hidden">
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        left="0"
        zIndex={-1}
        bg={'#4A2554'}
        clipPath="ellipse(91% 43% at 48% 51%)"
      >
      </Box>
      <Text mt={40} color="white" position="relative" zIndex={1}>
        sobre nosotros
      </Text>
    </Box>
  )
}
