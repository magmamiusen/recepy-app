import styled from "styled-components";

function NavPick ({children}) {
    return <NavPickStyled>
        {children}
    </NavPickStyled>
}

const NavPickStyled = styled.div`
    background-color: transparent;
    width: auto;
    gap: 20px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export default NavPick;