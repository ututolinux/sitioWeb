import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import { IoIosPeople } from "react-icons/io";
import React from 'react'

export default function Info() {
  return (

    <Container maxW='7xl' display={'flex'} flexDir={'column'}>
      <a id="ventajas"></a>

      <Text fontSize={'20px'} color={'#4A2554'} fontWeight={900} textAlign={{base:'center', xl:'left'}}>Ventajas de uso</Text>

      <Flex direction={{ base: "column", xl: "row" }} justifyContent={'space-between'} align={{md:"center"}}gap={{base:6, md:6, xl:0}}>
        <Flex gap={{ base: 6, lg: "30px" }} direction={'column'} w={{ base: 'full',md:'650px', xl:'550px' }}>

          <Flex h={{ base: 'auto', md: '200px' }} textAlign={{ base: 'center', xl: 'left' }} direction={'column'} gap={[4, 0]}>
            <Text fontSize={'36px'} fontWeight={900} lineHeight={'50.4px'}>¿Por qué Ututo?</Text>
            <Text fontSize={'16px'} lineHeight={'25.6px'} fontWeight={400}>
              Ututo es sinónimo de libertad tecnológica y privacidad indiscutible.
              Un sistema operativo libre para modificar y compartir, que respeta tus datos y se adapta a cualquier hardware.
              Con Ututo, te unes a una comunidad que promueve el apoyo mutuo y una seguridad digital firme.
              Elige Ututo y lidera tu camino hacia la soberanía digital con cada uso.
            </Text>
          </Flex>

          <Flex justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} gap={6}>

            <Flex w={{ base: 'full', md: '360px',xl: '260px' }} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#4A2554' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Comunidad
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

            <Flex w={{ base: 'full',md:'260px' }} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#70982D' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Libertad
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

          </Flex>

        </Flex>

        <Flex direction={'column'} justifyContent={'space-between'} w={{base:'full', md:'650px'}} gap={6} >


          <Flex justifyContent={'space-between'} direction={['column', 'row']} gap={6}>

            <Flex w={{base:'full', md:'260px'}} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#4A2554' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Seguridad
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

            <Flex w={{base:'full', md:'360px'}} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#76613E' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Rendimiento
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

          </Flex>

          <Flex gap={{base:6, lg:'30px'}} direction={{base:'column', md:'row'}} justifyContent={'space-between'} >

            <Flex w={{base:'full', md:'360px'}} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#BBA126' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Privacidad
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

            <Flex w={{base:'full', md:'260px'}} h={'200px'} bg={'#DEDEDE'} direction={'column'} p={6}>

              <IoIosPeople color='#76613E' size={'30px'} />
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
                Crecimiento
              </Text>
              <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
                Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
              </Text>

            </Flex>

          </Flex>


        </Flex>

      </Flex>
    </Container>
  )
}
