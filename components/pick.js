import styled from "styled-components";

function Pick ({emoji}) {
    return <PickStyled>
        <h1>{emoji}</h1>
    </PickStyled>
}

const PickStyled = styled.div`
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 16vh;
    width: 18vw;
    cursor: pointer;
    background: linear-gradient(to bottom, rgb(30, 30, 30), rgb(5, 5, 5));
    border: solid 4px rgb(19, 19, 19);
    border-radius: 10px;
    color: white;
    transition: 333ms;
    box-shadow: 0px 50px 40px rgb(0, 0, 0);

    &:hover {
        transform: scale(1.1);
        border-color: rgba(255, 255, 255, 0.800);
    }
`

export default Pick;