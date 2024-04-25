import styled from "styled-components";

export const NavbarBox = styled.nav`
  background-color: var(--color-yellow);

  @media (min-width: 1200px) {
    display: flex;
    padding: 10px;
    height: 90px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 1200px) {
    width: 10%;
  }
`;

export const NavbarLogo = styled.img`
  max-width: 100%;
  width: 80px;
  height: 70px;
  object-fit: cover;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 2rem;
  height: ${({ open }) => (open ? "0" : "100%")};

  @media (min-width: 1200px) {
    height: 100%;
    width: 90%;
    flex-direction: row;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 1200px) {
    width: 65%;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
    flex-direction: row;
  }
`;

export const NavbarLink = styled.li`
  list-style: none;
  color: #fafafa;
`;

export const LinkComponent = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #fafafa;
`;

export const BoxLinksRedirect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 1200px) {
    width: 30%;
    justify-content: flex-end;
    flex-direction: row;
  }
`;
export const LinkRedirect = styled.a`
  display: flex;
  align-items: center;
  font-weight: var(--weight-bold);
  background-color: #fafafa;
  padding: 5px;
  border-radius: 12px;
  text-decoration: none;
`;
