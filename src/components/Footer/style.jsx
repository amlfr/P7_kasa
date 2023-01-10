import styled from "styled-components/macro";

const FooterDiv = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    height: 210px;

    img {
        margin: 60px 0 0 0;
    }

    p {
        color: white;
        font-size: 1.2rem;
        margin: 0 0 30px 0;
    }
`;

export default FooterDiv;
