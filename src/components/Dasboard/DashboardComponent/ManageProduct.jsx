import React, { useContext, useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import Loading from '../../loading/Loading';
import { Edit3, Trash2, Star, X } from 'lucide-react'; 
import { ModalContex } from '../../../providers/ModalProvider';
import AdminUpdateProduct from './AdminUpdateProduct';

const ManageProduct = () => {
    const { isLoading, products, refetch } = useProduct(); 
    const { showModal, setShowModal } = useContext(ModalContex);
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (isLoading) return <Loading />;

    const handleDelete = (id) => console.log("Delete ID:", id);

    const openUpdateModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    return (
        <div className="min-h-screen bg-bg-primary p-4 md:p-10 lg:ml-72 transition-all duration-300 relative">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-text-main tracking-tight uppercase">
                            Inventory <span className="text-accent">Control</span>
                        </h2>
                    </div>
                    <div className="px-6 py-3 bg-bg-secondary border border-border-color rounded-2xl">
                        <span className="text-xs font-black text-text-muted uppercase">Total Items: </span>
                        <span className="text-lg font-black text-accent ml-2">{products?.length || 0}</span>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-bg-primary border border-border-color rounded-[2.5rem] shadow-2xl shadow-black/5 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-bg-secondary/50 border-b border-border-color">
                                    <th className="px-8 py-6 text-left text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Product details</th>
                                    <th className="px-8 py-6 text-left text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Pricing</th>
                                    <th className="px-8 py-6 text-left text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Performance</th>
                                    <th className="px-8 py-6 text-center text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Management</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-color/40">
                                {products?.map((product) => (
                                    <tr key={product._id} className="group hover:bg-bg-secondary/30 transition-all duration-300">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 rounded-[1.2rem] overflow-hidden bg-bg-secondary border border-border-color">
                                                    <img src={product.photo} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <p className="font-black text-text-main text-sm uppercase tracking-tight">{product.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 font-black text-text-main text-lg">${product.price}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-1.5 text-accent">
                                                <Star size={14} fill="currentColor" />
                                                <span className="text-sm font-black">{product.rating || "0.0"}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-center gap-4">
                                                <button
                                                    onClick={() => openUpdateModal(product)} // লুপের ভেতরে শুধু স্টেট সেট হবে
                                                    className="w-10 h-10 flex items-center justify-center bg-bg-secondary text-text-main rounded-xl hover:bg-accent hover:text-white transition-all border border-border-color"
                                                >
                                                    <Edit3 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 transition-all border border-red-100"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showModal && selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                        onClick={() => setShowModal(false)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-2xl bg-bg-primary rounded-[2.5rem] shadow-2xl border border-border-color overflow-hidden">
                        <AdminUpdateProduct 
                            product={selectedProduct} 
                            closeModal={() => setShowModal(false)}
                            refreshData={refetch}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProduct;