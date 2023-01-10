import Banner from "../components/Banner/index";
import styled from "styled-components/macro";
import { lightGrey } from "../components/utils";
import imageBanner1 from "../assets/images/banner1.png";

const CardContainer = styled.div`
    background-color: ${lightGrey};
    height: 500px;
    border-radius: 30px;
`;

const Home = () => {
    return (
        <main>
            <Banner url={imageBanner1} />
            <CardContainer></CardContainer>
        </main>
    );
};

export default Home;
