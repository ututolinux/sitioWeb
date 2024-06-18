import { Box, Button, ButtonGroup, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import imageHero from '../../../assets/image-hero.png'
import { IoIosNotifications, IoMdCode } from "react-icons/io";

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
      >

        <Container maxW='6xl'>
          <Flex align={'center'} h={'400px'}>
            <Box width={'50%'}>
              <Text fontSize={'64px'} fontWeight={900}>UTUTO <span style={{color:'white'}}>11</span></Text>
              <Text fontSize={'14px'} lineHeight={'22.4px'} fontWeight={600}>
                Descubre UTUTO 11, la evolución de GNU/Linux donde cada elemento es completamente libre.
                Originaria de Argentina y dedicada a usuarios que buscan transparencia y control total,
                UTUTO es tu puente hacia una computación ética. Con UTUTO 11, disfruta de una tecnología
                que respeta tu libertad y fomenta una comunidad comprometida con el avance del software libre.
                Emprende tu viaje hacia la soberanía digital ahora.
              </Text>
              <ButtonGroup mt={2}>
                <Button leftIcon={<IoIosNotifications />} size={'sm'} bg={'#4A2554'} color={'white'} _hover={{ bg: '#5d3e65' }}>
                  Unirse a la lista de espera
                </Button>
                <Button leftIcon={<IoMdCode />} size={'sm'}>
                  ¡Quiero ser parte!
                </Button>
              </ButtonGroup>
            </Box>
            <Box width={'50%'}>
              <Image src={imageHero} />
            </Box>
          </Flex>
        </Container>

      </Box>

    </Box>
  )
}