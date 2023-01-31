import styled from "styled-components";
import { responsiveBreakpoints, primaryColor, lightGrey } from "../utils";

export const CollapseAnchor = styled.div`
    background: ${primaryColor};
    height: 3rem;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    @media ${responsiveBreakpoints.mobile} {
        width: 100%;
        height: 2rem;
    }

    h2 {
        color: white;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 0.8rem;
        }
    }
`;

export const CollapseBody = styled.div`
    background-color: ${lightGrey};
    max-height: ${(props) => (props.isToggle ? "240px" : "0px")};
    transition: all 0.4s ease-out;
    margin: 0 0 2rem 0;
    border-radius: 5px;
    overflow: hidden;

    @media ${responsiveBreakpoints.mobile} {
        width: 100%;
    }

    p {
        margin: 1.8rem 1rem 1rem 1rem;
        color: ${primaryColor};
        font-size: 1.5rem;
        line-height: 2rem;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 0.75rem;
            margin: 1rem 0.75rem 1.5rem 0.75rem;
            line-height: 1.1rem;
        }
    }
`;

export const StyledSvg = styled.img`
    height: 1rem;
    width: 1.5rem;
    transform: rotate(${(props) => (props.isToggle ? "0deg" : "180deg")});
    /* transform: rotate(0); */
    transition: all 0.3s;

    @media ${responsiveBreakpoints.mobile} {
        width: 1rem;
    }
`;

export const CollapseDiv = styled.div`
    width: 82.5%;

    @media ${responsiveBreakpoints.mobile} {
        width: 100%;
    }
`;
