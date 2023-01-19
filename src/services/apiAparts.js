const apiAparts = () => {

    const getAparts = async () => {
        return fetch("/datas/logements.json", {
            type: "GET",
        }).then((res) => res.json());
    };


    const getApart = async (apartId) => {

        return new Promise((resolve, reject) => {
            getAparts()
                .then((res) => {
                    resolve(res.find(apart =>
                        apart.id === apartId))
                }).catch(e => reject(e))

        })

    }

    return {
        getAparts, getApart
    };
}
export default apiAparts();


