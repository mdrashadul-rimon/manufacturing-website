import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetails from '../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    return (
        <div>
            <h3>Selected Product {inventory.name}</h3>
            <div>
                <Link to={`/selected/${inventoryId}`}>
                    <button>Proceed Update Product</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;