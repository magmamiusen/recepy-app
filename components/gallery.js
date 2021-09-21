import styled from "styled-components";

function Gallery ({children}) {
    return <GalleryStyled>
        {children}
    </GalleryStyled>
}

const GalleryStyled = styled.div`
    width: 100%;
    height: 40vh;
    background-color: transparent;
`
export default Gallery; 