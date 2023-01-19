import { StyledLink, ErrorDiv } from "./style";

const ErrorContainer = () => {
    return (
        <ErrorDiv>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <StyledLink to="/">Retourner sur la page d'acceuil</StyledLink>
        </ErrorDiv>
    );
};

export default ErrorContainer;
