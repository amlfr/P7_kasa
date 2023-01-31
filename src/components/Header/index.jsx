import { useLocation } from "react-router-dom";
import { HeaderDiv, LinkHome, LinkAbout } from "./style";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    const location = useLocation();
    const [pathName, setPathName] = useState();
    console.log("pathName", pathName);

    useEffect(() => {
        setPathName(window.location.pathname);
    }, [location]);

    return (
        <HeaderDiv>
            <img src={logo} alt="logo Kasa" />
            <nav>
                <LinkHome to="/" currentpath={pathName}>
                    Accueil
                </LinkHome>
                <LinkAbout to="/about" currentpath={pathName}>
                    A Propos
                </LinkAbout>
            </nav>
        </HeaderDiv>
    );
};

export default Header;
