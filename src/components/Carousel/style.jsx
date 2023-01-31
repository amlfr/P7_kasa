import styled from "styled-components";
import { responsiveBreakpoints } from "../utils";

export const CarouselSection = styled.section`
    height: 415px;
    border-radius: 25px;
    margin: 1.25rem 0 0 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${responsiveBreakpoints.mobile} {
        height: 225px;
        border-radius: 10px;
    }
`;

export const RightArrow = styled.button`
    background-color: transparent;
    position: absolute;
    transform: rotate(90deg);
    left: 85vw;
    cursor: pointer;
    border: none;
    height: 10%;
    aspect-ratio: 1.3/1;
    display: ${(props) => (props.slideNumber === 0 ? "none" : "inline")};

    @media ${responsiveBreakpoints.mobile} {
        height: 3%;
        aspect-ratio: 1/ 1;
    }

    img {
        height: 100%;
        width: 100%;
    }
`;

export const LeftArrow = styled(RightArrow)`
    transform: rotate(-90deg);
    left: 7vw;
`;

export const SlidesContainer = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;

    img {
        width: 100%;
        height: 100%;
        flex: 1 0 100%;
        object-fit: cover;
    }
`;
