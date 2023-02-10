import React from "react";
import { TagContainer } from "./style";

const Tag = ({ key, tagName }) => {
    return <TagContainer key={key}>{tagName}</TagContainer>;
};

export default Tag;
