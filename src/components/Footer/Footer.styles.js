import styled from "styled-components";


export const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

// ---------- Footer HEADER ----------

export const FooterHeader = styled.div`
    width: 100%;
    background-color: var(--color-yellow);
    height: 64px;
    position: relative;
`

export const UtutoLogoMono = styled.img`
    width: 60px;
    height: 60px;
    top: 20px;
    left: 25px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

// ---------- Footer LINKS ----------

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: fit-content;
    justify-content: space-between;
    gap: 20px;
    margin-top: var(--margin-md);
    padding: var(--padding-md);
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const FooterLinksGroup = styled.ul`
    display: flex;
    text-align: center;
    flex: 1;
    flex-direction: column;
    gap: 5px;
`

export const FooterLinksTitle = styled.h3`
    color: #212121;
    font-weight: 600;
    font-size: 20px;
    margin: var(--margin-xs);
    margin-left: 0;
    margin-right: 0;
`

export const FooterLinks = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #363636;
`

// ---------- Footer SOCIAL LINKS ----------

export const FooterSocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #363636;
    padding: var(--padding-sm);

`

export const FooterSocialLinksContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-xs);
    gap: 9px;
`

export const SocialLinks = styled(FooterLinks)`
    color: #fafafa;
`

export const FooterText = styled.p`
    color: #fafafa;
    text-align: center;
`

