import { useLocation } from "react-router-dom";
import { HeaderDiv, LinkHome, LinkAbout } from "./style";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    /* Assigning the pathname of the url to a state for use in styling, updates on url change */
    const location = useLocation();
    const [pathName, setPathName] = useState();
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
