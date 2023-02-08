import styled from "styled-components";
import { responsiveBreakpoints, primaryColor, lightGrey } from "../utils";
import Collapse from "../Collapse/index";

export const InformationSection = styled.section`
    width: 100%;
    margin: 1.5rem 0 0 0;
`;

export const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    @media ${responsiveBreakpoints.mobile} {
        flex-direction: column;
    }
`;

export const InformationDiv = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:first-child {
        h1 {
            color: ${primaryColor};
            font-size: 2.25rem;
            font-weight: 500;
            margin: 0 0 5px 0;

            @media ${responsiveBreakpoints.mobile} {
                font-size: 1.1rem;
            }
        }

        > p {
            color: ${primaryColor};
            font-size: 1.1rem;
            font-weight: 500;

            @media ${responsiveBreakpoints.mobile} {
                font-size: 0.9rem;
                margin: 10px 0 0 0;
            }
        }
    }

    div:nth-child(2) {
        display: flex;
        gap: 0.62rem;
        margin: 15px 0 0 0;

        @media ${responsiveBreakpoints.mobile} {
            margin: 10px 0 0 0;
            flex-wrap: wrap;
            width: 300px;
        }

        /* p {
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
        } */
    }
`;

export const HostContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${responsiveBreakpoints.mobile} {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0 0 0;
    }
`;

export const HostDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 0 1.3rem 0;

    @media ${responsiveBreakpoints.mobile} {
        margin: 0;
        align-items: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        p {
            color: ${primaryColor};
            font-size: 1.125rem;
            margin: 3px 10px 3px 0;
            font-weight: 500;

            @media ${responsiveBreakpoints.mobile} {
                font-size: 0.75rem;
            }
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;

        @media ${responsiveBreakpoints.mobile} {
            width: 32px;
            height: 32px;
        }
    }
`;

export const RatingDiv = styled.div`
    display: flex;

    svg {
        @media ${responsiveBreakpoints.mobile} {
            width: 18px;
            height: 18px;
        }
    }

    svg:first-child {
        color: ${(props) => (props.rating >= 1 ? primaryColor : lightGrey)};
    }

    svg:nth-child(2) {
        color: ${(props) => (props.rating >= 2 ? primaryColor : lightGrey)};
    }

    svg:nth-child(3) {
        color: ${(props) => (props.rating >= 3 ? primaryColor : lightGrey)};
    }

    svg:nth-child(4) {
        color: ${(props) => (props.rating >= 4 ? primaryColor : lightGrey)};
    }

    svg:nth-child(5) {
        color: ${(props) => (props.rating >= 5 ? primaryColor : lightGrey)};
    }
`;

export const CollapseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 1rem 0;
    position: relative;

    @media ${responsiveBreakpoints.mobile} {
        flex-direction: column;
        margin: 1.5rem 0 4rem 0;
    }
`;

export const InformationCollapse = styled(Collapse)`
    width: 47%;
    /* max-height: 280px; */

    @media ${responsiveBreakpoints.mobile} {
        width: 100%;
    }

    div:nth-child(2) {
        @media ${responsiveBreakpoints.mobile} {
            /* padding: 25px 7px 1px 12px;  fidele figma*/
            /* current 20 10 10 10 */
        }

        p {
            margin: 0 10px 0 10px;
        }

        p:first-child {
            margin-top: 20px;
            /* margin: 20px 7px 10px 12px; */
            /* margin: 20px 7px 10px 12px; */
        }

        p:last-child {
            margin-bottom: 10px;
        }
    }
`;
