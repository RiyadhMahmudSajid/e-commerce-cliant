import React, { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContex } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const useWhislist = () => {
    const {user} = useContext(AuthContex)
    const axiosInstance = useAxios()
    const handleWhislist = async(product) =>{
        if (!user) {
        return toast.error("Please login first!");
    }
        const wishlistItem = {
        userEmail: user.email,
        productId: product._id,
        name: product.name,
        image: product.photo,
        price: product.price,
        addedAt: new Date()
    };

    try {
        const res = await axiosInstance.post('/wishlist', wishlistItem);
        if (res.data.insertedId) {
            toast.success("Added to wishlist!");
        } else {
            toast.error("Already in wishlist");
        }
    } catch (err) {
        console.log(err);
    }
    }

    return {handleWhislist}
};

export default useWhislist;