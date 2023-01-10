import BannerDiv from "./style";
const homeRegex = /1/;

const Banner = (props) => {
    if (homeRegex.test(props.url)) {
        return (
            <BannerDiv url={props.url}>
                <p>Chez vous, partout et ailleurs</p>
            </BannerDiv>
        );
    } else {
        return <BannerDiv url={props.url} />;
    }
};

export default Banner;
