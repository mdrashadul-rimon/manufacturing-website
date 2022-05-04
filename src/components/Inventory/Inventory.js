import React from 'react';
import useInventory from '../hooks/useInventory';

const Inventory = () => {
    const [inventory, setInventory] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://guarded-harbor-99938.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventories => inventories._id !== id);
                    setInventory(remaining);
                })
        }
    }
    return (
        <div>
            <h2>Manage Your Inventory</h2>
            {
                inventory.map(inventories => <div
                    key={inventories._id}>
                    <h4>{inventories.name} <button onClick={() => handleDelete(inventories._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default Inventory;