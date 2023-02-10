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
        margin: 160px 0 0 0;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 6rem;
        }
    }

    p {
        font-size: 2.25rem;
        color: ${primaryColor};
        margin: 65px 0 182px 0;

        @media ${responsiveBreakpoints.mobile} {
            margin: 10px 58px 150px 58px;
            font-size: 1.125rem;
        }
    }

    a {
        color: ${primaryColor};
        font-size: 1.1rem;
        text-decoration: underline;
        margin: 0 0 160px 0;

        @media ${responsiveBreakpoints.mobile} {
            font-size: 0.875rem;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: underline;
`;
