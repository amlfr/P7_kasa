import React from "react";
import {
    InformationSection,
    InformationCollapse,
    CollapseContainer,
    InformationContainer,
    InformationDiv,
    HostContainer,
    HostDiv,
    RatingDiv,
} from "./style";

/* star rating svg  */

const StarSvg = () => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_26_172">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const Information = (props) => {
    /* Creating the tags from the object given as props */
    const tags = props.tags;
    const createTags = tags.map((tag, index) => <p key={index}>{tag}</p>);
    console.log(props.tags);

    /* Handling the creation of   */

    /* Replacing spaces in the host's names for correct layout regardless  */

    const name = props.hostName;
    const splitName = name.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];

    return (
        <InformationSection>
            <InformationContainer>
                <InformationDiv>
                    <div>
                        <h1>{props.title}</h1>
                        <p>{props.location}</p>
                    </div>
                    <div>{createTags}</div>
                </InformationDiv>
                <HostContainer>
                    <HostDiv>
                        <div>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>
                        <img
                            src={props.hostPicture}
                            alt="Hôte de la location"
                        />
                    </HostDiv>
                    <RatingDiv rating={props.rating}>
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                    </RatingDiv>
                </HostContainer>
            </InformationContainer>
            <CollapseContainer>
                <InformationCollapse
                    header="Description"
                    content={props.description}
                />
                <InformationCollapse
                    header="Équipements"
                    content={props.equipments}
                    isList={true}
                />
            </CollapseContainer>
        </InformationSection>
    );
};

export default Information;
