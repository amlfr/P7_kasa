import styled from "styled-components";
import { responsiveBreakpoints, primaryColor } from "../utils";

export const TagContainer = styled.p`
    background-color: ${primaryColor};
    color: white;
    padding: 4px 40px 4px 40px;
    border-radius: 10px;
    font-size: 0.875rem;

    @media ${responsiveBreakpoints.mobile} {
        font-size: 0.62rem;
        padding: 4px 30px 4px 30px;
        border-radius: 5px;
        white-space: nowrap;
    }
`;
