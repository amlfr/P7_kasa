import React from "react";
import { TagContainer } from "./style";

const Tag = (...props) => {
    <TagContainer key={props.key}>{props.tagName}</TagContainer>;
};

export default Tag;
