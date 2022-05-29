import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect( () => {
        fetch('https://stark-bayou-80955.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories];
}

export default useInventory;