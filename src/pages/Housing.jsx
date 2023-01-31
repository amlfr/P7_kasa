import housings from "../assets/housing/housing.json";
import Information from "../components/Information";
import Carousel from "../components/Carousel";

console.log(housings);

const Housing = () => {
    const url = new URL(window.location.href);
    const housingId = url.searchParams.get("id");
    console.log(housingId);
    if (housings.find((housing) => housing.id === housingId) !== undefined) {
        //TODO use includes au dessus pour + propre
        const housing = housings.find((housing) => housing.id === housingId);
        return (
            <main>
                <Carousel pictures={housing.pictures} />
                <Information
                    title={housing.title}
                    description={housing.description}
                    rating={housing.rating}
                    location={housing.location}
                    hostName={housing.host.name}
                    hostPicture={housing.host.picture}
                    equipments={housing.equipments}
                    tags={housing.tags}
                />
            </main>
        );
    } else {
        window.location.replace(window.location.origin + "/error");
    }
};

export default Housing;
