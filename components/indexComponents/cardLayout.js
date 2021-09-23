import styled from "styled-components";

const CardLayout = styled.div`
    background: linear-gradient(to bottom, transparent, rgb(5, 5, 5)), url( ${(props) => props.img} );
    background-size: cover;
    border: solid 4px rgb(19, 19, 19);
    color: rgb(255, 255, 255);
    height: 370px;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);
    transition: 333ms;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: end;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        opacity: 1;
    }
`

export default CardLayout;