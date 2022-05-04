import { useEffect, useState } from "react";

const useInventoryDetails = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://guarded-harbor-99938.herokuapp.com/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [inventoryId]);
    return [inventory]

}

export default useInventoryDetails;