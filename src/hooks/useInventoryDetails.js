import { useEffect, useState } from "react";

const useInventoryDetails = inventoryId => {
    const [inventoryDetail, setInventoryDetail] = useState({});
    useEffect( () => {
        const url = `https://stark-bayou-80955.herokuapp.com/inventoryDetails/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetail(data))

    }, [inventoryId])
    return [inventoryDetail];
}

export default useInventoryDetails;