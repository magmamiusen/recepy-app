import styled from "styled-components"

function User ({img}) {
    return <UserStyled img={img}>
    </UserStyled>
}

const UserStyled = styled.div`
    background-image: url( ${(props) => props.img} );
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-size: cover;
    transition: 333ms;
    border: solid 4px rgb(249, 249, 249, 0.8);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);

    &:hover{
        transform: scale(1.1);
    }
`

export default User;