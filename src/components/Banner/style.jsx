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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 25px;

    @media ${responsiveBreakpoints.mobile} {
        /* Rules for the aspect ratio depending on the location of banner */
        /* aspect-ratio: ${(props) =>
            props.homeBanner ? 3.02 / 1 : 1.51 / 1}; */
        aspect-ratio: 1.51 / 1;
        border-radius: 10px;
    }

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
        border-radius: 25px;
        background-size: cover;

        @media ${responsiveBreakpoints.mobile} {
            border-radius: 10px;
            /* background-image: url(${(props) =>
                props.homeBanner ? props.urlMobile : props.url}); */
            background-image: url(${(props) => props.urlMobile});
        }
    }

    p {
        color: transparent;
        font-size: 2rem;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 1.4rem;
            width: 60%;
            position: relative;
            left: -10%;
        }
    }
`;

export default BannerDiv;
