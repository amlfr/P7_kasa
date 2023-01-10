import FooterDiv from "./style";
import logoBlack from "../../assets/images/logo-black.svg";

const Footer = () => {
    return (
        <FooterDiv>
            <img src={logoBlack} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterDiv>
    );
};

export default Footer;
