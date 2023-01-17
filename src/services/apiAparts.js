const apiAparts = () => {

    const getAparts = async () => {
        return fetch("/datas/logements.json", {
            type: "GET",
        }).then((res) => res.json());
    };


    const getApart = async (apartId) => {

        let aparts = await getAparts();
        let apart = aparts.filter(apart =>
            apart.id === apartId);

        //  console.log(apart[0])
        return apart[0];

    }

    return {
        getAparts, getApart
    };
}
export default apiAparts();


