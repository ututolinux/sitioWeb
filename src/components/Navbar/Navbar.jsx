import { useState } from "react";
import {
  BoxLinksRedirect,
  ButtonMenu,
  LinkComponent,
  LinkRedirect,
  NavbarBox,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuContainer,
} from "./Navbar.styles";
import ututoLogo from "../../assets/ututo-mono.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    // Navbar
    <NavbarBox>
      {/* NavbarContainer */}
      <NavbarContainer>
        <NavbarLogo src={ututoLogo} alt="ututo-v1-black" />
        <ButtonMenu onClick={toggleMenu}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/fafafa/menu--v1.png"
            alt="menu--v1"
          />
        </ButtonMenu>
      </NavbarContainer>

      <NavbarMenuContainer open={open}>
        {/* Menu */}
        <NavbarMenu >
          <NavbarLink>
            <LinkComponent href="#" style={{ fontWeight: 700 }}>
              Inicio
            </LinkComponent>
          </NavbarLink>
          <NavbarLink>
            <LinkComponent href="#">Ventajas de uso</LinkComponent>
          </NavbarLink>
        </NavbarMenu>
        {/* Menu para redirigirse a otra pagina */}
        <BoxLinksRedirect>
          <LinkRedirect href="#" target="_blank" style={{ color: "#bba126" }}>
            {" "}
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/bba126/like--v1.png"
              alt="like--v1"
            />
            Colaborar
          </LinkRedirect>
          <LinkRedirect
            href="https://ututo.org/"
            target="_blank"
            style={{ color: "#a465a5" }}
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/sf-regular/a465a5/imac.png"
              alt="imac"
            />
            Proyecto Ututo
          </LinkRedirect>
        </BoxLinksRedirect>
      </NavbarMenuContainer>
    </NavbarBox>
  );
};

export default Navbar;
