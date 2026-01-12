import React, { useContext } from 'react';
import {
    Mail, MapPin, Package, Heart, Star,
    ShoppingBag, ShieldCheck, Edit2
} from 'lucide-react';
import { AuthContex } from '../../providers/AuthProvider';
import useUserRole from '../../hooks/useUserRole';
import { ModalContex } from '../../providers/ModalProvider';
import UserEditProfile from '../Dasboard/userDashboard/UserEditProfile';

const UserProfile = () => {
    const { user } = useContext(AuthContex);
    const { role } = useUserRole();
    const { showModal, setShowModal } = useContext(ModalContex)
    
    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            <div className="bg-bg-secondary rounded-3xl border border-border-color p-6 lg:p-10 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="relative">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/3S6P2Gj/user.png"}
                            className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover ring-4 ring-bg-primary"
                            alt="Profile"
                        />
                        <button
                            onClick={() => setShowModal(true)}
                            className="absolute -bottom-2 -right-2 p-2 bg-accent text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <Edit2 size={14} />
                        </button>

                    </div>

                    {
                        showModal &&
                        <div className="fixed inset-0 z-[90] flex items-center justify-center backdrop-blur-sm bg-black/50 p-4">
                            <UserEditProfile ></UserEditProfile>

                        </div>
                    }



                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                            <h1 className="text-3xl font-bold text-text-main tracking-tight">
                                {user?.displayName || "Member"}
                            </h1>
                            <span className="w-fit mx-auto md:mx-0 px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md border border-accent/20">
                                {role || "Customer"}
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-5 text-text-muted">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Mail size={16} className="text-accent" />
                                {user?.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <ShieldCheck size={16} className="text-green-500" />
                                Verified Account
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={<Package size={20} />} label="Total Orders" value="12" color="accent" />
                <StatCard icon={<Heart size={20} />} label="Wishlist" value="08" color="danger" />
                <StatCard icon={<Star size={20} />} label="Reviews" value="05" color="warning" />
                <StatCard icon={<ShoppingBag size={20} />} label="Cart Items" value="03" color="info" />
            </div>


            <div className="grid lg:grid-cols-3 gap-6">

                <div className="bg-bg-secondary rounded-3xl border border-border-color p-6 h-full">
                    <h3 className="text-sm font-bold text-text-main uppercase tracking-widest mb-6 flex items-center gap-2">
                        <MapPin size={18} className="text-accent" /> Shipping Address
                    </h3>
                    <div className="p-4 bg-bg-primary rounded-2xl border border-border-color">
                        <p className="text-xs font-bold text-text-muted uppercase mb-1 italic">Primary Location</p>
                        <p className="text-sm font-semibold text-text-main leading-relaxed">
                            Uttara Sector 7, Dhaka, Bangladesh
                        </p>
                    </div>
                    <button className="w-full mt-4 py-3 text-xs font-bold text-accent border border-accent/20 rounded-xl hover:bg-accent/5 transition-colors">
                        Manage Addresses
                    </button>
                </div>

                <div className="lg:col-span-2 bg-bg-secondary rounded-3xl border border-border-color p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-sm font-bold text-text-main uppercase tracking-widest flex items-center gap-2">
                            <ShoppingBag size={18} className="text-accent" /> Recent Activity
                        </h3>
                        <button className="text-[10px] font-bold text-accent uppercase hover:underline tracking-tighter">View All Orders</button>
                    </div>

                    <div className="space-y-3">
                        {[1, 2].map((item) => (
                            <div key={item} className="flex items-center justify-between p-4 bg-bg-primary rounded-2xl border border-border-color hover:border-accent/20 transition-all cursor-default">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-text-main">Order #SH-254{item}</p>
                                        <p className="text-[10px] font-medium text-text-muted uppercase tracking-tighter">Jan 0{item}, 2026 • Cash on Delivery</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-accent">$120.00</p>
                                    <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-0.5 rounded">Delivered</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, color }) => {
    const colors = {
        accent: "text-accent bg-accent/10",
        danger: "text-red-500 bg-red-500/10",
        warning: "text-yellow-500 bg-yellow-500/10",
        info: "text-blue-500 bg-blue-500/10",
    };

    return (
        <div className="bg-bg-secondary p-5 rounded-3xl border border-border-color flex items-center gap-5">
            <div className={`p-3 rounded-2xl ${colors[color]}`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">{label}</p>
                <h4 className="text-2xl font-bold text-text-main leading-none tracking-tight">{value}</h4>
            </div>
        </div>
    );
};

export default UserProfile;