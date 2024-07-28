import React from "react";
import {
  FooterContainer,
  FooterHeader,
  FooterLinks,
  FooterLinksContainer,
  FooterLinksGroup,
  FooterLinksTitle,
  FooterSocialLinks,
  FooterSocialLinksContainer,
  FooterText,
  SocialLinks,
  UtutoLogoMono,
} from "./Footer.styles";
import ututoLogoMono from "../../assets/ututo-logo-black.png";
import { Container } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (

    <FooterContainer>

      {/* FOOTER HEADER */}
      <FooterHeader>
        <Container maxW='7xl'>
          <UtutoLogoMono src={ututoLogoMono} alt="ututo-logo-mono-rf456" />
        </Container>
      </FooterHeader>

      {/* FOOTER LINKS CONTAINER */}
      <Container maxW='7xl'>
        <FooterLinksContainer>
          <FooterLinksGroup>
            <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
            <FooterLinks href="https://es.wikipedia.org/wiki/Ututo" target="_blank">Wikipedia</FooterLinks>
            <FooterLinks href="https://ututo.org" target="_blank">Legacy</FooterLinks>
            <FooterLinks href="#">Ututo 11</FooterLinks>
            <FooterLinks href="https://jpromanonet.notion.site/Roadmap-d57a3af2154347d7b11016f74881a68d" target="_blank">Roadmap</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Comunidad</FooterLinksTitle>
            <FooterLinks href="#">Tienda</FooterLinks>
            <FooterLinks href="https://discord.gg/ASEuyrfpFy" target="_blank">Discord</FooterLinks>
            <FooterLinks href="https://linktr.ee/ututolinux" target="_blank">Linktree</FooterLinks>
            <FooterLinks href="https://www.youtube.com/@ututolinux" target="_blank">Youtube</FooterLinks>
            <FooterLinks href="https://open.spotify.com/show/6E6Vk5F5XN3DsT4EWLux6I" target="_blank">Spotify</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Ayuda</FooterLinksTitle>
            <FooterLinks href="#">Preguntas Frecuentes</FooterLinks>
            <FooterLinks href="#">Guia de uso</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Contacto</FooterLinksTitle>
            <FooterLinks href="mailto:contacto@ututo.ar">contacto@ututo.ar</FooterLinks>
          </FooterLinksGroup>
        </FooterLinksContainer>
      </Container>

      {/* FOOTER SOCIAL LINKS */}
      <FooterSocialLinks>
        <FooterSocialLinksContainer>
        <SocialLinks href="https://github.com/ututolinux" target="_blank">
            <FaGithub size="24px" />
          </SocialLinks>
          <SocialLinks href="https://twitter.com/ututolinux" target="_blank">
            <FaTwitter size="24px" />
          </SocialLinks>
          <SocialLinks href="https://www.linkedin.com/company/ututo/" target="_blank">
            <FaLinkedin size="24px" />
          </SocialLinks>
          <SocialLinks href="https://www.instagram.com/ututolinux" target="_blank">
            <FaInstagram size="24px" />
          </SocialLinks>
        </FooterSocialLinksContainer>
        <FooterText>
          Hecho con &#10084; por la comunidad
          <br/>
          Ututo {currentYear}.
        </FooterText>
      </FooterSocialLinks>

    </FooterContainer>
  );
};

export default Footer;
