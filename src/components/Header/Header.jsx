import React from "react";
import {
    Box, Container, HStack, Image,
    DrawerCloseButton, Drawer, DrawerOverlay, DrawerContent,
    DrawerHeader, Link as LinkChakra, useDisclosure, Flex,
    Button
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { DrawerBody } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ututoLogoHeader from "../../assets/logo-header.png";
import { FaDesktop, FaHeart } from 'react-icons/fa'

export default function Header() {
    return (
        <Container
            bg={"#BBA126"}
            zIndex={"1000"}
            position={"sticky"}
            top={0}
            as="header"
            maxW={{ base: "100svw", lg: "100%" }}
            paddingBlock={5}
        >
            <Container maxW={"8xl"}>
                <HStack justifyContent={'space-around'} as="nav">
                    <HStack>
                        <Image
                            w={{ base: "80px", lg: "90px" }}
                            p={0}
                            alt="logo"
                            src={ututoLogoHeader}
                            maxH={"80px"}
                        />

                        <LinkDirecciones
                            m={0}
                            gap={{ base: 3, md: 3, lg: 6, xl: 8 }}
                            display={{ base: "none", lg: "flex" }}
                            fontSize={'16px'}
                            fontWeight={400}
                            color={"black"}
                        />
                    </HStack>

                    <Box display={'flex'} gap={5}>
                        <Button color={'#BBA126'} size={'sm'} borderRadius={15}>
                            <FaHeart style={{ margin: '0 3px 0 0' }} />
                            Colaborar
                        </Button>
                        <Button size={'sm'} borderRadius={15}>
                            <FaDesktop style={{ margin: '0 3px 0 0' }} />
                            Proyecto Ututo
                        </Button>
                    </Box>

                    <DrawerButton display={{ base: "initial", lg: "none" }} />
                </HStack>

            </Container>
        </Container>
    );
}

function DrawerButton({ display }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const btnRef = React.useRef()

    return (
        <Box display={display}>
            <IconButton
                color={"white"}
                onClick={onOpen}
                variant={"ghost"}
                fontSize="40px"
                icon={<HamburgerIcon />}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                trapFocus={false}
                position={"fixed"}
                size={"full"}
            >
                <DrawerOverlay />
                <DrawerContent bg={"rgba(255,255,255,0.8)"}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <LinkDirecciones
                            onclick={onClose}
                            direction={"column"}
                            fontSize={{ base: "2xl" }}
                            fontWeight={700}
                            textTransform={"uppercase"}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

function LinkDirecciones(props) {
    const { onclick } = props;

    //se mapea links, ruta y titulo
    const links = [
        ["/", "Inicio"],
        ["/ventajas", "Ventajas de uso"],
        ["/sobreNostros", "Sobre nosotros"],
        ["/comunidad", "Comunidad"],
        ["/ayuda", "Ayuda"],
    ];

    return (
        <Flex {...props}>
            {links.map((seccion, index) => (
                <LinkChakra href={seccion[0]} key={index} onClick={onclick}>
                    {seccion[1]}
                </LinkChakra>
            ))}
        </Flex>
    );
}
