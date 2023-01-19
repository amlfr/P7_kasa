import Banner from "../components/Banner/index";
import styled from "styled-components/macro";
import { lightGrey, responsiveBreakpoints } from "../components/utils";
import banner1 from "../assets/images/banner1.png";
import banner1Mobile from "../assets/images/banner1_mobile.png";
import housings from "../assets/housing/housing.json";
import Card from "../components/Card/index";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    background-color: ${lightGrey};
    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem;
    border-radius: 25px;
    padding: 4%;
    margin: 2.7rem 0;

    @media ${responsiveBreakpoints.mobile} {
        background-color: white;
        gap: 2rem;
        padding: 0;
    }
`;

const StyledLink = styled(Link)`
    width: 30%;
    transition: all 0.1s;
    aspect-ratio: 1/1;

    @media ${responsiveBreakpoints.mobile} {
        width: 100%;
        aspect-ratio: 1.31/1;
    }

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.05);
        transition: transform 0.2s;
    }
`;

const HomeBanner = styled(Banner)`
    @media ${responsiveBreakpoints.mobile} {
        aspect-ratio: 3.02 / 1;
    }

    /* &::after {
        @media ${responsiveBreakpoints.mobile} {
            background-image: url(${(props) => props.urlMobile});
        }
    } */

    p {
        color: white;
    }
`;

const Home = () => {
    const createCards = housings.map((housing, index) => (
        <StyledLink to={`/housing?id=${housing.id}`} key={index}>
            {/* `/housing?id=${housing.id}` works to link the right url */}
            <Card title={housing.title} cover={housing.cover} />
        </StyledLink>
    ));

    return (
        <main>
            <HomeBanner
                url={banner1}
                urlMobile={banner1Mobile}
                homeBanner={true}
            />
            <CardContainer>{createCards}</CardContainer>
        </main>
    );
};

export default Home;
