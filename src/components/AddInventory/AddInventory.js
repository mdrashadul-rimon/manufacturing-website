import React from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../PageTitle/PageTitle';

const AddInventory = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://guarded-harbor-99938.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            alert('Inventory added successfully');
            data.target.reset();
        })
    }

    return (
        <div className='mx-5'>
            <PageTitle title={'Add Inventory'}></PageTitle>
            <h2 className='font-bold text-4xl text-gray-700 my-5'>Please Add an Inventory</h2>

            <div className='grid'>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 50 })} className='border-2 border-gray-500 rounded mb-2 py-3 px-5' placeholder='Name' required/>
                <textarea className='border-2 border-gray-500 rounded mb-2 py-3 px-5' {...register("description")} placeholder='Description' required/>
                <input type="number" {...register("price")} placeholder='Price' className='border-2 border-gray-500 rounded mb-2 py-3 px-5' required/>
                <input type="number" {...register("quantity")} placeholder='Quantity' className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5' required/>
                <input type="text" {...register("picture")} placeholder='Photo URL' className='border-2 border-gray-500 rounded mb-2 py-3 px-5' required/>
                <input type="text" {...register("supplier")} placeholder='Supplier Name' className='border-2 border-gray-500 rounded mb-2 py-3 px-5' required/>
                <input className="px-5 py-2 my-2 bg-yellow-400 rounded hover:bg-yellow-500 transition hover:text-white" type="submit" value="Add Inventory" />
            </form>
            </div>
        </div>
    );
};

export default AddInventory;