import {
    CarouselSection,
    RightArrow,
    LeftArrow,
    SlidesContainer,
} from "./style";
import arrow from "../../assets/images/arrow.svg";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Carousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesList = useRef([]);

    /* Assigns all images to an array when mounted */
    useEffect(() => {
        const slides = document.querySelectorAll("ul > img");
        slidesList.current = slides;
    }, []);

    /* Makes the carousel move on each state change */
    useEffect(() => {
        const nextSlide = slidesList.current[currentSlide];
        nextSlide.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [currentSlide]);

    /* Changes the state when user clicks */
    const handleLeftClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(pictures.length - 1);
        }
    };

    const handleRightClick = () => {
        if (currentSlide < pictures.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    /* Generating img elements from the list of urls */
    const pictures = props.pictures;
    const createSlides = pictures.map((picture, index) => (
        <img src={picture} alt="carousel slide" key={index} />
    ));

    return (
        <CarouselSection>
            <LeftArrow slideNumber={pictures.length - 1}>
                <img
                    src={arrow}
                    alt="Left arrow controlling the carousel"
                    onClick={handleLeftClick}
                />
            </LeftArrow>
            <RightArrow slideNumber={pictures.length - 1}>
                <img
                    src={arrow}
                    alt="Right arrow controlling the carousel"
                    onClick={handleRightClick}
                />
            </RightArrow>
            <SlidesContainer>{createSlides}</SlidesContainer>
        </CarouselSection>
    );
};

export default Carousel;
