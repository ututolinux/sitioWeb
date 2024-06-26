import { Box, Button, ButtonGroup, Container, Flex, Image, Text } from '@chakra-ui/react'
import imageHero from '../../../assets/image-hero.png'
import { IoIosNotifications, IoMdCode } from "react-icons/io";
import ActionButtons from '../../Header/ActionButtons';
import useImageDisplay from '../../../hooks/useImageDisplay';

export default function Hero() {

  const display = useImageDisplay();
  
  return (
    <Box
      pt={"100px"}
      w="full"
      h={{base:'100vh', lg:'80vh'}}
      bg="#BBA126"
      clipPath="ellipse(91% 54% at 50% 39%)"
    >

      <Container maxW={{lg: '4xl',xl:'7xl'}} pt={{base:'40px', lg:'60px'}}>

        <Flex direction={{base:'column', xl:'row'}} align={'center'} gap={'75px'}>

          <Box textAlign={{base:'center', xl:'left'}} position={{base:'fixed', lg:'static'}} flex={1}>

            <Text fontSize={['50px', '64px']} fontWeight={900}>UTUTO <span style={{ color: 'white' }}>11</span></Text>

            <Text fontSize={['16px']} lineHeight={'22.4px'} fontWeight={400} display={{base:'none', lg:'block'}}>
              Descubre UTUTO 11, la evolución de GNU/Linux donde cada elemento es completamente libre. Originaria de Argentina y dedicada a usuarios que buscan transparencia y control total, UTUTO es tu puente hacia una computación ética. Con UTUTO 11, disfruta de una tecnología que respeta tu libertad y fomenta una comunidad comprometida con el avance del software libre. Emprende tu viaje hacia la soberanía digital ahora.
            </Text>

            <Text fontSize={['16px']} lineHeight={'22.4px'} fontWeight={400} display={{base:'block', lg:'none'}}>
              La evolución de GNU/Linux donde cada elemento es completamente libre.
            </Text>

            <ButtonGroup mt={{base:3, md:6}} mb={3}>
              <Flex flexDir={{base:'column', xl:'row'}} gap={3}>
                <Button leftIcon={<IoIosNotifications />} size={'md'} bg={'#4A2554'} color={'white'} _hover={{ bg: '#5d3e65' }}>
                  <a href="https://forms.gle/zBbFvYgvL8Z1wn5V6" target='_blank'>Unirse a la lista de espera</a>
                </Button>
                <Button leftIcon={<IoMdCode />} size={{base:'sm', xl:'md'}}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrF6oUt8ejUiarBZEtuI1hjP1XvrTa8-MlIuXVSa2zybKSpA/viewform" target='_blank'>¡Quiero ser parte!</a>
                </Button>
              </Flex>

            </ButtonGroup>

            <ActionButtons responsive />

          </Box>


          <Box position={{base:'fixed', lg:'static'}} bottom={"20%"} display={display}>
            <Image src={imageHero} maxH={{base: '350px',xl:'500px'}} />

          </Box>

        </Flex>

      </Container>

    </Box>

  )
}