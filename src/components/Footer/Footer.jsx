import React from 'react';
import { Facebook, Twitter, Instagram, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bg-secondary border-t border-border-color/50 pt-16 pb-8 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-black tracking-tighter text-text-main">
                            LUXE<span className="text-accent">.</span>
                        </h2>
                        <p className="max-w-xs text-sm text-text-muted leading-relaxed font-medium">
                            Redefining the digital shopping experience with precision, aesthetics, and high-performance technology.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="w-9 h-9 rounded-full border border-border-color flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            {['All Products', 'Featured', 'New Arrivals', 'Discounts'].map(item => (
                                <li key={item} className="hover:text-accent cursor-pointer transition-colors font-medium">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            {['Our Story', 'Careers', 'Terms of Service', 'Privacy'].map(item => (
                                <li key={item} className="hover:text-accent cursor-pointer transition-colors font-medium">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            {['Help Center', 'Track Order', 'Contact Us', 'Returns'].map(item => (
                                <li key={item} className="flex items-center gap-1 group hover:text-accent cursor-pointer transition-colors font-medium">
                                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border-color/30 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                        © {currentYear} Luxe Digital. All rights reserved.
                    </p>

                    <div className="flex gap-8 items-center">
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest cursor-pointer hover:text-text-main transition-colors">
                            Bangladesh — Global
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">System Status: Optimal</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
