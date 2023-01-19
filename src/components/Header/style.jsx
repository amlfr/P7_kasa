import styled from "styled-components/macro";
import { primaryColor, responsiveBreakpoints } from "../utils";

const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 14.8%;
        margin: 7% 0 0 7%; // todo changer vertical margin

        @media ${responsiveBreakpoints.mobile} {
            width: 39%;
            margin: 5.5% 0 0 5.5%;
        }
    }

    nav {
        margin: 7% 7% 0 0;

        @media ${responsiveBreakpoints.mobile} {
            margin: 5.5% 5.5% 0 0;
        }

        & a {
            font-size: 2rem;
            text-decoration: none;
            color: ${primaryColor};
            margin: 0 10px;

            @media ${responsiveBreakpoints.mobile} {
                font-size: 0.85rem;
                margin: 0 10px 0 0;
            }
        }
    }
`;

export default HeaderDiv;
