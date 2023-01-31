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
    // Generates the img element inside the carousel from the object props
    const pictures = props.pictures;
    const createSlides = pictures.map((picture, index) => (
        <img src={picture} alt="carousel slide" key={index} />
    ));

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesList = useRef([]);

    useEffect(() => {
        const slides = document.querySelectorAll("ul > img");
        slidesList.current = slides;
    }, []);

    useEffect(() => {
        const nextSlide = slidesList.current[currentSlide];
        nextSlide.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [currentSlide]);

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
