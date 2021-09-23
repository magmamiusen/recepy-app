import styled from "styled-components";

function Footer ({children}) {
    return <FooterStyled>
        {children}
    </FooterStyled>
}

const FooterStyled = styled.div`
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    height: 50vh;
`

export default Footer;