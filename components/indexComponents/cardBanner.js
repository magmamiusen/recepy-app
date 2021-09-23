import styled from "styled-components"

function CardBanner () {
    return <CardStyled>
        <h1>
            R E C E P Y
        </h1>
        <div>
            <button>Iniciar</button>
            <button>Ingresar</button>
        </div>
    </CardStyled>
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 65vh;
    width: 30vw;
    gap: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;
    justify-content: end;
    background: transparent;
    
    h1 {
        font-size: 50px;
        color: rgb(255, 255, 255);
        margin: 0;
        user-select: none;
        min-width: 70vw;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        button {
            font-size: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(255, 255, 255);
            background-color: transparent;
            height: 50px;
            width: 100%;
            border: solid 4px rgba(255, 255, 255, 0.8);
            border-radius: 5px;
            cursor: pointer;
            transition: 333ms;

            &:hover {
                background-color: rgb(255, 255, 255);
                color: rgba(0, 0, 0, 1);
                transform: scale(1.02);
            }
    }
    }
`

export default CardBanner;