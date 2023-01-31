import styled from "styled-components/macro";
import { primaryColor, responsiveBreakpoints } from "../utils";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 14.8%;
        margin: 2.8% 0 0 7%;

        @media ${responsiveBreakpoints.mobile} {
            width: 39%;
            margin: 5.5% 0 0 5.5%;
        }
    }
    nav {
        margin: 2.8% 7% 0 0;

        @media ${responsiveBreakpoints.mobile} {
            margin: 5.5% 5.5% 0 0;
        }
    }
`;

export const LinkHome = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: ${primaryColor};
    margin: 0 10px;
    text-decoration: ${(props) =>
        props.currentpath === "/" ? "underline" : "none"};

    @media ${responsiveBreakpoints.mobile} {
        font-size: 0.85rem;
        margin: 0 10px 0 0;
    }
`;

export const LinkAbout = styled(LinkHome)`
    text-decoration: ${(props) =>
        props.currentpath === "/about" ? "underline" : "none"};
`;
