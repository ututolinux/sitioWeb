import { Box, Button, ButtonGroup,  Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import imageAboutUs from '../../../assets/aboutus-image.png'
import imageAboutUsDeco from '../../../assets/aboutUs-deco.png'

export default function AboutUs() {
  return (
    
      <Box
        w="full"
        h={['1280px', '90vh']}
        bg={'#4A2554'}
        clipPath="ellipse(91% 39% at 50% 51%)" //ellipse(91% 54% at 50% 39%)
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        my={['-50', '0']}
        
      >
        <Container maxW='7xl' color={'white'} display={'flex'} mt={['25px']}>

          <Flex align={'center'} gap={3} justify={'space-between'} direction={['column', 'row']} textAlign={['center', 'left']}>

            <Box flex={1}>
              <Text fontSize={'20px'} fontWeight={900} color={'#CFCFCF'}>Sobre nosotros</Text>
              <Text fontSize={'36px'} fontWeight={900} lineHeight={'50.4px'} mb={[6, 0]}>¿Como comenzó Ututo?</Text>

              <Flex align={'center'} direction={'row'} gap={2}>
                <Box border={'1px solid white'} borderRadius={'15px'} p={2} flexShrink={0} display={['none', 'block']}>
                  <Image src={imageAboutUsDeco} h={'60px'} />
                </Box>
                <Text fontSize={'16px'} lineHeight={'25.6px'} fontWeight={400} color={'#CFCFCF'}>
                  UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU,
                  gracias a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina,
                  se popularizó por su accesibilidad y la novedad del CD vivo.
                </Text>

              </Flex>

              <Text fontSize={'16px'} lineHeight={'25.6px'} fontWeight={400} color={'#CFCFCF'}>
                A lo largo de los años, UTUTO ha evolucionado con variantes como UTUTO-R y UTUTO XS,
                manteniendo siempre su espíritu original.
                Tras una pausa, la comunidad se ha organizado para revivir y actualizar UTUTO para los usuarios actuales.
                Conoce más sobre esta fascinante historia en la entrevista a Diego Saravia, alma y fundador de UTUTO.
              </Text>

              <ButtonGroup mt={[6, 3]} gap={2}>
                <Button size={'sm'}>Leer entrevista</Button>
                <Button size={'sm'}>Acceder a Ututo Legacy</Button>
              </ButtonGroup>
            </Box>

            <Box flex={1}>
              <Image src={imageAboutUs} />
            </Box>

          </Flex>

        </Container>
      </Box>
    
  )
}
