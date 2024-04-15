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

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>

      {/* FOOTER HEADER */}
      <FooterHeader>
        <UtutoLogoMono src={ututoLogoMono} alt="ututo-logo-mono-rf456" />
      </FooterHeader>

      {/* FOOTER LINKS CONTAINER */}
      <FooterLinksContainer>
        <FooterLinksGroup>
          <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
          <FooterLinks href="#">Historia</FooterLinks>
          <FooterLinks href="#">Proyecto</FooterLinks>
          <FooterLinks href="#">Ututo 11</FooterLinks>
          <FooterLinks href="#">Roadmap 2024</FooterLinks>
        </FooterLinksGroup>

        <FooterLinksGroup>
          <FooterLinksTitle>Comunidad</FooterLinksTitle>
          <FooterLinks href="#">Tienda</FooterLinks>
          <FooterLinks href="#">Discord</FooterLinks>
          <FooterLinks href="#">Twitter</FooterLinks>
        </FooterLinksGroup>

        <FooterLinksGroup>
          <FooterLinksTitle>Ayuda</FooterLinksTitle>
          <FooterLinks href="#">Preguntas Frecuentes</FooterLinks>
          <FooterLinks href="#">Guia de uso</FooterLinks>
          <FooterLinks href="#">Contacto</FooterLinks>
        </FooterLinksGroup>

        <FooterLinksGroup>
          <FooterLinksTitle>Blog</FooterLinksTitle>
          <FooterLinks href="#">Ultimas entradas</FooterLinks>
          <FooterLinks href="#">Noticias importantes</FooterLinks>
        </FooterLinksGroup>

        <FooterLinksGroup>
          <FooterLinksTitle>Contacto</FooterLinksTitle>
          <FooterLinks href="#">contacto@ututo.com.ar</FooterLinks>
        </FooterLinksGroup>
      </FooterLinksContainer>

      {/* FOOTER SOCIAL LINKS */}
      <FooterSocialLinks>
        <FooterSocialLinksContainer>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
        </FooterSocialLinksContainer>
        <FooterText>
          Ututo {currentYear}. Todos los derechos reservados.
        </FooterText>
      </FooterSocialLinks>
      
    </FooterContainer>
  );
};

export default Footer;
