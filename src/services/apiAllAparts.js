const apiAparts = () => {
    const getAparts = async () => {
        return fetch("/datas/logements.json", {
            type: "GET",
        }).then((res) => res.json());
    };

    return {
        getAparts,
    };
}
export default apiAparts();


