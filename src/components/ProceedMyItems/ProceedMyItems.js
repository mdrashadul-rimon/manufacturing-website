import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useInventoryDetails from "../hooks/useInventoryDetails";
import PageTitle from "../PageTitle/PageTitle";


const ProceedMyItems = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const items = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://guarded-harbor-99938.herokuapp.com/itemlist', items)
            .then(response => {
                
                const { data } = response;
                if(data.insertedId) {
                    console.log('data');
                    toast('Your Items Added');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <PageTitle title={'Add Item'}></PageTitle>
            <h2 className="text-4xl font-bold text-gray-700">Please Add an Item</h2>
            <h4 className="text-xl font-bold text-gray-700">Checking out: {inventory.name}</h4>
            <form className="grid grid-cols-2 gap-4" onSubmit={handlePlaceOrder}>
                <input className='border-2 border-gray-500 rounded mb-2 py-3 px-5' type="text" value={user?.displayName} name='name' placeholder='Name'  readOnly disabled />
                <input className='border-2 border-gray-500 rounded mb-2 py-3 px-5' type="email" value={user?.email} name='email' placeholder='Email'  readOnly disabled />
                <input className='border-2 border-gray-500 rounded mb-2 py-3 px-5' type="text" value={inventory.name} name='service' placeholder='Service' readOnly />
                <input className='border-2 border-gray-500 rounded mb-2 py-3 px-5' type="text" name='address' placeholder='Address' required />
                <input className='border-2 border-gray-500 rounded mb-2 py-3 px-5' type="number" name='phone' placeholder='Phone Number' required />

                <input className="px-5 py-2 my-2 bg-yellow-400 rounded hover:bg-yellow-500 transition hover:text-white" type="submit" value="Add Item" />
            </form>
            
        </div>
    );
};

export default ProceedMyItems;