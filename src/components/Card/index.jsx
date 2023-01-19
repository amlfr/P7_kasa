import CardDiv from "./style";

const Card = (props) => {
    return (
        <CardDiv>
            <img src={props.cover} alt="Intérieur du logement" />
            <h2>{props.title}</h2>
        </CardDiv>
    );
};

export default Card;
