import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Modal from "../Modal/Modal";

const PageLayout = () => {
    return (
        <>
            <div className="layout">
                <main className="main-content">
                    <Outlet />
                </main>
                <Modal />
                <Footer />
            </div>
        </>
    );
};

export default PageLayout;
