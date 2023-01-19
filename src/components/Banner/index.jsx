import BannerDiv from "./style";

const Banner = ({ className, ...props }) => {
    return (
        <BannerDiv
            url={props.url}
            homeBanner={props.homeBanner}
            urlMobile={props.urlMobile}
            className={className}
        >
            <p>Chez vous, partout et ailleurs</p>
        </BannerDiv>
    );
};

export default Banner;
