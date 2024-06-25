import { Box, Button, ButtonGroup, Center, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import imageAboutUs from '../../../assets/aboutus-image.png'
import imageAboutUsDeco from '../../../assets/aboutUs-deco.png'

export default function AboutUs() {
  return (
    <Box w="full" minH="100svh" position="relative" >
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

        <Container maxW='6xl' h={'inherit'} color={'white'}>
          <a id="nosotros"></a>
          <Center h={'inherit'}>
          <Flex align={'center'} gap={3} mb={6} justify={'space-between'}>
            <Box width={{base:'full', md:'50%'}}>
              <Text fontSize={'20px'} fontWeight={900}>Sobre nosotros</Text>
              <Text fontSize={'36px'} fontWeight={900} lineHeight={'50.4px'}>¿Como comenzó Ututo?</Text>

              <Flex align={'center'} direction={'row'}>
                <Box border={'1px solid white'} borderRadius={'20px'} p={4} mr={2} display={'inline-block'} verticalAlign={'top'} flexShrink={0} >
                  <Image src={imageAboutUsDeco} w={'30px'} />
                </Box>
                <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={400} display={'inline-block'}>
                  UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU,
                  gracias a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina,
                  se popularizó por su accesibilidad y la novedad del CD vivo.
                </Text>

              </Flex>

              <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={400} mt={2}>
                A lo largo de los años, UTUTO ha evolucionado con variantes como UTUTO-R y UTUTO XS,
                manteniendo siempre su espíritu original.
                Tras una pausa, la comunidad se ha organizado para revivir y actualizar UTUTO para los usuarios actuales.
                Conoce más sobre esta fascinante historia en la entrevista a Diego Saravia, alma y fundador de UTUTO.
              </Text>
            </Box>

            <Box width={'50%'} display={{base:'none', md:'flex'}}>
              <Image src={imageAboutUs} />
            </Box>
          </Flex>
          </Center>
        </Container>
      </Box>
    </Box>
  )
}
