const apiAparts = () => {

    const getAparts = async () => {
        return fetch("/datas/logements.json", {
            type: "GET",
        }).then((res) => res.json());
    };


    // const getApart = async (apartId) => {

    //     return new Promise((resolve, reject) => {
    //         getAparts()
    //             .then((res) => {
    //                 resolve(res.find(apart =>
    //                     apart.id === apartId))
    //             }).catch(e => { console.log(e); reject(e) })

    //     })

    // }

    const getApart = async (apartId) => {
        let aparts = await getAparts();
        let res = await aparts.find(apart => apart.id === apartId);
        return res ? res : false
    }

    return {
        getAparts, getApart
    };
}
export default apiAparts();


