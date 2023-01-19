import React, { useState } from "react";
import { CollapseAnchor, CollapseBody, StyledSvg } from "./style";
import arrow from "../../assets/images/arrow.svg";

const Collapse = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <React.Fragment>
            <CollapseAnchor onClick={() => setToggle((toggle) => !toggle)}>
                <h2>{props.header}</h2>
                <StyledSvg src={arrow} alt="Flèche du menu" isToggle={toggle} />
            </CollapseAnchor>
            <CollapseBody isToggle={toggle}>
                <p>{props.content}</p>
            </CollapseBody>
        </React.Fragment>
    );
};

export default Collapse;
