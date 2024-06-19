import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import { IoIosPeople } from "react-icons/io";
import React from 'react'

export default function Info() {
  return (
    <Container maxW='6xl'>
      <Text fontSize={'20px'} color={'#4A2554'} fontWeight={900}>Ventajas de uso</Text>
      <Flex align={'center'} gap={6} mb={6} justify={'space-between'} direction={['column', 'row']}>
        <Box width={'40%'}>
          <Text fontSize={'36px'} fontWeight={900} lineHeight={'50.4px'}>¿Por qué Ututo?</Text>
          <Text fontSize={'16px'} lineHeight={'25.6px'} fontWeight={400}>
            Ututo es sinónimo de libertad tecnológica y privacidad indiscutible.
            Un sistema operativo libre para modificar y compartir, que respeta tus datos y se adapta a cualquier hardware.
            Con Ututo, te unes a una comunidad que promueve el apoyo mutuo y una seguridad digital firme.
            Elige Ututo y lidera tu camino hacia la soberanía digital con cada uso.
          </Text>
        </Box>

        <Flex width={'250px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#4A2554' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Seguridad
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

        <Flex width={'350px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#76613E' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Rendimiento
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

      </Flex>

      <Flex gap={6} justify={'space-between'} direction={['column', 'row']}> 
        <Flex width={'250px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#4A2554' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Comunidad
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

        <Flex width={'250px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#70982D' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Libertad
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

        <Flex width={'350px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#BBA126' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Privacidad
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

        <Flex width={'250px'} h={'220px'} bg={'#DEDEDE'} direction={'column'} p={6}>
          <IoIosPeople color='#76613E' size={'30px'} />
          <Text fontSize={'22px'} fontWeight={600} lineHeight={'30.8px'}>
            Crecimiento
          </Text>
          <Text fontSize={'14px'} fontWeight={400} lineHeight={'19.6px'}>
            Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.
          </Text>
        </Flex>

      </Flex>
    </Container>
  )
}
