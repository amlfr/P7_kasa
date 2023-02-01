import React, { useState } from "react";
import { CollapseAnchor, CollapseBody, StyledSvg, CollapseDiv } from "./style";
import arrow from "../../assets/images/arrow.svg";

const Collapse = ({ className, ...props }) => {
    const [toggle, setToggle] = useState(false);

    /* Generates multiple p elements if the content is an array */
    let createList = [];
    if (typeof props.content === "object") {
        createList = props.content.map((equipment, index) => {
            return <p key={index}>{equipment}</p>;
        });
    }

    return (
        <CollapseDiv className={className}>
            <CollapseAnchor onClick={() => setToggle((toggle) => !toggle)}>
                <h2>{props.header}</h2>
                <StyledSvg src={arrow} alt="Flèche du menu" isToggle={toggle} />
            </CollapseAnchor>
            <CollapseBody isToggle={toggle}>
                {typeof props.content === "object" ? (
                    createList
                ) : (
                    <p>{props.content}</p>
                )}
            </CollapseBody>
        </CollapseDiv>
    );

    /* if (typeof props.content === "string") {
        return (
            <CollapseDiv className={className}>
                <CollapseAnchor onClick={() => setToggle((toggle) => !toggle)}>
                    <h2>{props.header}</h2>
                    <StyledSvg
                        src={arrow}
                        alt="Flèche du menu"
                        isToggle={toggle}
                    />
                </CollapseAnchor>
                <CollapseBody isToggle={toggle}>
                    <p>{props.content}</p>
                </CollapseBody>
            </CollapseDiv>
        );
    } else {
        return (
            <CollapseDiv className={className}>
                <CollapseAnchor onClick={() => setToggle((toggle) => !toggle)}>
                    <h2>{props.header}</h2>
                    <StyledSvg
                        src={arrow}
                        alt="Flèche du menu"
                        isToggle={toggle}
                    />
                </CollapseAnchor>
                <CollapseBody isToggle={toggle}>{createList}</CollapseBody>
            </CollapseDiv>
        );
    } */
};

export default Collapse;
