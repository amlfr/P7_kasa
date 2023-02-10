import banner2 from "../assets/images/banner2.png";
import banner2Mobile from "../assets/images/banner2_mobile.png";
import Banner from "../components/Banner/index";
import Collapse from "../components/Collapse/index";
import styled from "styled-components";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CollapseContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const About = () => {
    /* Changes document title when mounted */
    useEffect(() => {
        const title = document.querySelector("title");
        title.innerHTML = "Kasa - A Propos";
    }, []);

    /* Generating elements from the json containing the written content  */
    const textContents = useLoaderData();
    const createCollapses = textContents.map((textContent, index) => (
        <Collapse
            header={textContent.header}
            content={textContent.content}
            key={index}
        />
    ));

    return (
        <main>
            <Banner url={banner2} urlMobile={banner2Mobile} />
            <CollapseContainer>{createCollapses}</CollapseContainer>
        </main>
    );
};

export default About;
