import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetails from '../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    return (
        <div>
            <h3>Booking Product {inventory.name}</h3>
            <div>
                <Link to={`/checkout/${inventoryId}`}>
                    <button>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;