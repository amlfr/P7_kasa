import { Link } from "react-router-dom";
import HeaderDiv from "./style";
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <HeaderDiv>
            <img src={logo} alt="logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </HeaderDiv>
    );
};

export default Header;
