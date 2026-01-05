import React from 'react';
import DashboardSidebar from '../../Dasboard/DashboardSideBar/DashboardSideBar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-bg-primary">
            <aside className="fixed inset-y-0 left-0 ">
                <DashboardSidebar />
            </aside>

            <main className="flex-1 flex flex-col transition-all duration-300 lg:ml-72 w-full">

                <div className="p-5 lg:p-8 min-h-[calc(100vh-20px)]">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>

                <footer className="p-5 text-center text-text-muted text-xs font-bold uppercase tracking-widest border-t border-border-color">
                    &copy; 2026 ShopHub. All rights reserved.
                </footer>
            </main>
        </div>
    );
};

export default DashboardLayout;