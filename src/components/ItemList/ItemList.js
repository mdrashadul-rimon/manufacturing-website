import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ItemList = () => {
    const [user] = useAuthState(auth);
    const [itemList, setItemList] = useState([]);

    useEffect(() =>{
        const getItemList = async () =>{
            const email = user?.email;
            const url = `https://guarded-harbor-99938.herokuapp.com/itemList?email=${email}`;

            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItemList(data);
            }
            catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    Navigate('/login');
                }
            }
        }
        getItemList();
    }, [user])
    return (
        <div>
            <h3 className="tex-2xl">Your order: {itemList.length}</h3>
            {
                itemList.map(items => <div key={items._id}>
                    <p>{items.email} : {items.inventory}</p>
                    </div>)
            }
        </div>
    );
};

export default ItemList;