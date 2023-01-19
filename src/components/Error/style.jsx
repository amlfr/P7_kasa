import styled from "styled-components";
import { responsiveBreakpoints, primaryColor } from "../utils";
import { Link } from "react-router-dom";

export const ErrorDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 18rem;
        font-weight: 700;
        color: ${primaryColor};
        margin: 10rem 0 0 0;
    }

    p {
        font-size: 2.25rem;
        color: ${primaryColor};
        margin: 4.1rem 0 11.4rem 0;
    }

    a {
        color: ${primaryColor};
        font-size: 1.1rem;
        text-decoration: underline;
        margin: 0 0 10rem 0;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: underline;
`;
