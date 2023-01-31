import CardDiv from "./style";

const Card = (props) => {
    return (
        <CardDiv>
            <img src={props.cover} alt="Intérieur du logement" />
            <div>
                <h2>{props.title}</h2>
            </div>
        </CardDiv>
    );
};

export default Card;
