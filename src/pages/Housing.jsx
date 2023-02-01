import housings from "../assets/housing/housing.json";
import Information from "../components/Information";
import Carousel from "../components/Carousel";

const Housing = () => {
    const url = new URL(window.location.href);
    const housingId = url.searchParams.get("id");
    const title = document.querySelector("title");

    /* Iterating over the array of housing to find if the Id refers to one, redirects to 404 otherwise */
    if (housings.some((housing) => housing.id === housingId)) {
        const housing = housings.find((housing) => housing.id === housingId);
        title.innerHTML = "Kasa - " + housing.title;
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
