import styled from "styled-components";

function Gallery ({children}) {
    return <GalleryStyled>
        {children}
    </GalleryStyled>
}

const GalleryStyled = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    overflow-x: auto;
    gap: 20px;
    padding: 30px;
    padding-bottom: 100px;

    &::-webkit-scrollbar {
        height: 6px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgb(19, 19 , 19);
    }

    &::-webkit-scrollbar-thumb:active{
        background-color: rgb(30, 30 , 30);
    }
`

export default Gallery; 