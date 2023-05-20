import React, { FC, ReactNode } from 'react'
import Header from '../Header';



const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={`d-flex flex-column vh-100`}>
            <Header />
            <main className="flex-grow-1">{children}</main>
        </div>
    );
};

export default Layout
