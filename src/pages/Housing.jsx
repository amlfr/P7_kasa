import housings from "../assets/housing/housing.json";

console.log(housings);

const Housing = () => {
    const url = new URL(window.location.href);
    const housingId = url.searchParams.get("id");
    console.log(housingId);
    if (housings.find((housing) => housing.id === housingId) !== undefined) {
        return (
            <main>
                <h1>Housing page</h1>
            </main>
        );
    } else {
        window.location.replace(window.location.origin + "/error");
    }
};

export default Housing;
