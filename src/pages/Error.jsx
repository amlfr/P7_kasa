import ErrorContainer from "../components/Error/index";
import { useEffect } from "react";

const Error = () => {
    /* Modifies the title element when component is mounted */
    useEffect(() => {
        const title = document.querySelector("title");
        title.innerHTML = "Kasa - Erreur 404";
    }, []);

    return (
        <main>
            <ErrorContainer />
        </main>
    );
};

export default Error;
