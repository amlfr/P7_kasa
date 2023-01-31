import styled from "styled-components/macro";
import { primaryColor } from "../utils";
import { responsiveBreakpoints } from "../utils";

const CardDiv = styled.div`
    background-color: ${primaryColor};
    position: relative;
    border-radius: 10px;
    /* aspect-ratio: 1 / 1; */
    height: 100%;
    padding: 20px;

    //
    //
    //
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media ${responsiveBreakpoints.mobile} {
        /* aspect-ratio: 1.31 / 1; */
        gap: 0px;
        padding: 20px 20px 15px 20px;
    }

    &::after {
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
        );
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        z-index: 1;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    img {
        position: relative;
        width: 100%;
        height: 85%;
        z-index: 2;
        border-radius: 5px 5px 0 0;
        object-fit: cover;
        border: 1px solid #000000;

        //
        flex-shrink: 0;

        @media ${responsiveBreakpoints.mobile} {
            height: 80%;
        }
    }

    div {
        flex-basis: 100%;
        display: flex;
        align-items: center;

        h2 {
            font-size: 1.1rem;
            color: white;
            position: relative;
            z-index: 2;
            width: 90%;
            line-height: 1.5;

            @media ${responsiveBreakpoints.mobile} {
                padding: 0 0 0 0;
            }
        }
    }
`;

export default CardDiv;
