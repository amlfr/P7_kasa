import styled from "styled-components/macro";
import { responsiveBreakpoints } from "../utils";

const BannerDiv = styled.div`
    max-width: 100%;
    /* height: 22vh; */
    aspect-ratio: 5.56 / 1;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        filter: brightness(0.5);
        background-image: url(${(props) => props.url});
        z-index: -1;
        border-radius: 30px;
    }

    p {
        color: white;
        font-size: 2rem;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 1.1rem;
        }
    }
`;

export default BannerDiv;
