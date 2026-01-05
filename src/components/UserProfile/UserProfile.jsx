import { useContext } from 'react';

import { 
    User, Mail, MapPin, Package, Heart, Star, 
    Settings, ShoppingBag, Clock, ShieldCheck, Camera 
} from 'lucide-react';
import { AuthContex } from '../../providers/AuthProvider';
import useUserRole from '../../hooks/useUserRole';


const UserProfile = () => {
    const { user } = useContext(AuthContex);
    const { role } = useUserRole();

    return (
        <div className="min-h-screen bg-background py-10 px-4 sm:px-6  transition-all duration-300">
            <div className="max-w-6xl mx-auto space-y-8">
       
                <div className="relative bg-bg-secondary rounded-[2.5rem] border border-border-color p-8 lg:p-12 overflow-hidden shadow-2xl shadow-accent/5">
          
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full -ml-20 -mb-20 blur-2xl"></div>
                    
                    <div className="relative flex flex-col md:flex-row items-center gap-10">
              
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-bg-primary shadow-2xl">
                                <img 
                                    src={user?.photoURL || "https://i.ibb.co/3S6P2Gj/user.png"} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Profile" 
                                />
                            </div>
                            <button className="absolute -bottom-2 -right-2 p-3 bg-accent text-white rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-black text-text-main tracking-tighter italic mb-2">
                                    {user?.displayName || "ShopHub Member"}
                                </h1>
                                <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] border border-accent/20">
                                    Official {role || "Customer"}
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                <div className="flex items-center gap-2 text-text-muted font-bold text-sm">
                                    <div className="p-2 bg-bg-primary rounded-lg text-accent"><Mail size={16} /></div>
                                    {user?.email}
                                </div>
                                <div className="flex items-center gap-2 text-text-muted font-bold text-sm">
                                    <div className="p-2 bg-bg-primary rounded-lg text-accent"><ShieldCheck size={16} /></div>
                                    Verified Account
                                </div>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-bg-primary border border-border-color text-text-main rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all shadow-xl shadow-black/5 active:scale-95">
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard icon={<Package />} label="Total Orders" value="12" color="accent" />
                    <StatCard icon={<Heart />} label="Wishlist" value="08" color="danger" />
                    <StatCard icon={<Star />} label="Reviews" value="05" color="warning" />
                    <StatCard icon={<Clock />} label="Pending" value="02" color="info" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-bg-secondary rounded-[2rem] border border-border-color p-8 shadow-lg">
                            <h3 className="text-sm font-black text-text-main uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                <div className="w-1.5 h-4 bg-accent rounded-full"></div>
                                Shipping Info
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-accent shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs font-black text-text-muted uppercase mb-1">Current Address</p>
                                        <p className="text-sm font-bold text-text-main">Uttara Sector 7, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <button className="w-full py-4 border-2 border-dashed border-border-color text-text-muted rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-accent hover:text-accent transition-all">
                                    + Add New Address
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-bg-secondary rounded-[2rem] border border-border-color p-8 shadow-lg">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-sm font-black text-text-main uppercase tracking-[0.2em] flex items-center gap-3">
                                <div className="w-1.5 h-4 bg-accent rounded-full"></div>
                                Recent Activity
                            </h3>
                            <button className="text-[10px] font-black text-accent uppercase hover:underline">View All</button>
                        </div>

                        <div className="space-y-4">

                            {[1, 2].map((item) => (
                                <div key={item} className="flex items-center gap-4 p-4 bg-bg-primary rounded-2xl border border-border-color group hover:border-accent/30 transition-all">
                                    <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center text-accent">
                                        <ShoppingBag size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-black text-text-main">Order #SH-2541</p>
                                        <p className="text-[10px] font-bold text-text-muted uppercase">2 Items • Jan 04, 2026</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-accent">$120.00</p>
                                        <p className="text-[9px] font-black text-green-500 uppercase tracking-widest">Delivered</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


const StatCard = ({ icon, label, value, color }) => {
    const colors = {
        accent: "text-accent bg-accent/5",
        danger: "text-red-500 bg-red-500/5",
        warning: "text-yellow-500 bg-yellow-500/5",
        info: "text-blue-500 bg-blue-500/5",
    };

    return (
        <div className="bg-bg-secondary p-6 rounded-[2rem] border border-border-color shadow-lg hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group">
            <div className={`p-3 rounded-xl w-fit mb-4 transition-transform group-hover:scale-110 ${colors[color]}`}>
                {icon}
            </div>
            <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">{label}</p>
            <h4 className="text-3xl font-black text-text-main mt-1 tracking-tighter">{value}</h4>
        </div>
    );
};

export default UserProfile;