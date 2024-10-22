import { useRouter } from "next/router";
import React from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const route = useRouter();
    const routesWithNoSidebar = ["_error", "/404"];

    const pathName = route.pathname;

    if (
        routesWithNoSidebar.includes(pathName) ||
        ["/login", "/signup", "/forgot-password", "/otp", "/reset-password"].includes(pathName)
    ) {
        return (
            <div className="bg-white font-poppins">
                {children}
            </div>
        );
    }

    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
};

export default Layout;
