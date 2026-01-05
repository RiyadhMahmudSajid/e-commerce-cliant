import React from "react";
import { useForm } from "react-hook-form";
import {
    PackagePlus, DollarSign, Percent, Star,
    Image as ImageIcon, FileText, Type,
    Layers
} from "lucide-react";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import toast from "react-hot-toast";

const AdminAddProduct = () => {
    const axiosInstance = useAxios()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const imageFile = data.photoURL[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_IMG}`,
            formData
        );

        console.log("Full imgbb response:", response);
        const imageUrl = response.data.data.url;
        console.log(imageUrl);



        const product = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            oldPrice: data.oldPrice ? parseFloat(data.oldPrice) : null,
            discount: data.discount ? parseInt(data.discount) : 0,
            rating: data.rating ?parseFloat(data.rating) : 0,
            description: data.description,
            photo: imageUrl,
            createdAt: new Date().toISOString(),
        };
        console.log(product);
        const result = await axiosInstance.post('/product',product)
        console.log(result);
          if(result.data.acknowledged === true){
            toast.success('Product is submited')
           
        }

    };


    const inputStyle = `
    w-full px-4 py-3 rounded-2xl bg-bg-secondary border border-border-color 
    text-text-main placeholder:text-text-muted focus:outline-none 
    focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200
  `;

    const labelStyle = "block text-xs font-black text-text-muted uppercase tracking-widest mb-2 ml-1";

    return (
        <div className="max-w-4xl mx-auto bg-bg-primary p-6 md:p-10 rounded-[2.5rem] border border-border-color shadow-2xl shadow-black/5 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header Section */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border-color/50">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                    <PackagePlus size={32} />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-text-main tracking-tight">
                        New Product
                    </h2>
                    <p className="text-sm text-text-muted font-medium">
                        Fill in the details to list a new item in your shop.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Row 1: Name & Category/Discount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className={labelStyle}>Product Name</label>
                        <div className="relative group">
                            <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent" size={18} />
                            <input
                                {...register("name", { required: "Product name is required" })}
                                placeholder="e.g. Sony WH-1000XM5"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                        {errors.name && <p className="text-danger text-[10px] font-bold mt-1 ml-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className={labelStyle}>Discount (%)</label>
                        <div className="relative group">
                            <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent" size={18} />
                            <input
                                type="number"
                                {...register("discount")}
                                placeholder="15"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <label className={labelStyle}>Category Name</label>
                        <div className="relative group">
                            <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" size={18} />
                            <input
                                type="text"
                                {...register("category")}
                                placeholder="Fashion"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className={labelStyle}>Sale Price</label>
                        <div className="relative group">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent" size={18} />
                            <input
                                type="number"
                                step="0.01"
                                {...register("price", { required: "Price is required" })}
                                placeholder="199.00"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={labelStyle}>Regular Price</label>
                        <div className="relative group">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent" size={18} />
                            <input
                                type="number"
                                step="0.01"
                                {...register("oldPrice")}
                                placeholder="249.00"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={labelStyle}>Rating</label>
                        <div className="relative group">
                            <Star className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent" size={18} />
                            <input
                                type="number"
                                step="0.1"
                                max="5"
                                {...register("rating")}
                                placeholder="4.5"
                                className={`${inputStyle} pl-12`}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 3: Image Upload Area */}
                <div className="bg-bg-secondary/50 p-6 rounded-3xl border-2 border-dashed border-border-color hover:border-accent/40 transition-colors group">
                    <label className={labelStyle}>Upload Product Image</label>
                    <div className="flex flex-col items-center justify-center py-4">
                        <ImageIcon className="text-text-muted mb-3 group-hover:scale-110 transition-transform" size={40} />
                        <input
                            type="file"
                            accept="image/*"
                            {...register("photoURL", { required: "Image is required" })}
                            className="block w-full text-sm text-text-muted
                file:mr-4 file:py-2 file:px-6
                file:rounded-full file:border-0
                file:text-xs file:font-black
                file:bg-accent file:text-white
                file:cursor-pointer hover:file:bg-accent-hover
                cursor-pointer"
                        />
                    </div>
                </div>

                {/* Row 4: Description */}
                <div>
                    <label className={labelStyle}>Product Description</label>
                    <div className="relative group">
                        <FileText className="absolute left-4 top-4 text-text-muted group-focus-within:text-accent" size={18} />
                        <textarea
                            {...register("description")}
                            rows="4"
                            placeholder="Tell customers more about this item..."
                            className={`${inputStyle} pl-12 resize-none`}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button className="w-full py-4 bg-accent text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-accent/25 hover:bg-accent-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                        Publish Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminAddProduct;