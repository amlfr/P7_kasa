import Banner from "../components/Banner/index";
import styled from "styled-components/macro";
import { lightGrey, responsiveBreakpoints } from "../components/utils";
import banner1 from "../assets/images/banner1.png";
import banner1Mobile from "../assets/images/banner1_mobile.png";
import Card from "../components/Card/index";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";

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

    p {
        color: white;
    }
`;

const Home = () => {
    /* Changes document title when mounted */
    useEffect(() => {
        const title = document.querySelector("title");
        title.innerHTML = "Kasa - Acceuil";
    }, []);

    /* Generating elements from the json containing housings' infromations */
    const housings = useLoaderData();
    const createCards = housings.map((housing, index) => (
        <StyledLink to={`/housing?id=${housing.id}`} key={index}>
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
