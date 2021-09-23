import styled from "styled-components";

const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 20px;

    input {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        background-color: rgb(30, 30, 30);
        width: 67%;
        height: 5vh;
        padding: 10px 30px;
        border: solid 4px rgb(19, 19, 19);
        border-radius: 10px;
        outline: none;
        font-size: 30px;
        color: rgb(255, 255, 255);
        transition: 333ms;

        &:hover {
            border-color: rgba(249, 249, 249, 0.8);
        }
    }
`

export default Search;