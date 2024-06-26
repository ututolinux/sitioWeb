import { Box, Button, ButtonGroup, Center, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import imageAboutUs from '../../../assets/aboutus-image.png'
import imageAboutUsDeco from '../../../assets/aboutUs-deco.png'

export default function AboutUs() {
  return (
   
      <Box
        w="full"
        h="full"
        bg={'#4A2554'}
        clipPath="ellipse(91% 43% at 48% 51%)"
        py={{base:'150px'}}
      >

        <Container maxW='7xl'  color={'white'}>
          <a id="nosotros"></a>
          <Center >
            <Flex align={'center'} gap={3} mb={6} justify={{ base: 'center', xl: 'space-between' }} w={{ base: 'full', md: '650px', xl: 'full' }} direction={{ base: 'column', xl: 'row' }}>
              <Box width={{ base: 'full', xl: '50%' }}>
                <Box textAlign={{ base: 'center', xl: 'left' }} mb={2}>
                  <Text fontSize={'20px'} fontWeight={900} color={"#CFCFCF"} >Sobre nosotros</Text>
                  <Text fontSize={'36px'} fontWeight={900} lineHeight={'50.4px'}>¿Como comenzó Ututo?</Text>
                </Box>

                <Box align={'center'} direction={'row'} >
                  <Text fontSize={'16px'} lineHeight={'25.6px'} mb={1} fontWeight={400} display={'inline-block'} textAlign={{base:'center',xl:'left'}} color={"#CFCFCF"}>
                    <Box border={'1px solid white'} borderRadius={'20px'} p={4} mr={2} display={{base:'none',xl:'inline-block'}} verticalAlign={'top'} flexShrink={0} float={'left'} >
                      <Image src={imageAboutUsDeco} w={'30px'} />
                    </Box>
                    UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU,
                    gracias a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina,
                    se popularizó por su accesibilidad y la novedad del CD vivo.
                  </Text>
                  <Text fontSize={'16px'} lineHeight={'25.6px'} fontWeight={400} textAlign={{base:'center',xl:'left'}} color={"#CFCFCF"}>
                    A lo largo de los años, UTUTO ha evolucionado con variantes como UTUTO-R y UTUTO XS,
                    manteniendo siempre su espíritu original.
                    Tras una pausa, la comunidad se ha organizado para revivir y actualizar UTUTO para los usuarios actuales.
                    Conoce más sobre esta fascinante historia en la entrevista a Diego Saravia, alma y fundador de UTUTO.
                  </Text>
                </Box>


              </Box>

              <Box width={{ md: '500px', xl: '50%' }} display={{ base: 'none', md: 'flex' }}>
                <Image src={imageAboutUs} />
              </Box>
            </Flex>
          </Center>
        </Container>
      </Box>
    
  )
}
