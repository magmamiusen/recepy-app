import styled from "styled-components"
import CardLayout from "./cardLayout";

function Card (props) {
    return <CardLayout img={props.img}>
        <CardStyled title={props.title}>
            <h1>{props.title}</h1>
            <p>{props.user}</p>
        </CardStyled>
    </CardLayout>
}

const CardStyled = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;

    h1 {
        color: rgb(255, 255, 255);
        margin: 0;
    }

    p {
        margin: 0;
        color: rgb(170, 170, 170);
    }
`

export default Card;