import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '@/constants/routes'
import { FiMenu } from "react-icons/fi"
import Logo from '../Logo'

const Header = () => {
    return (
        <div className='bg-light' >
            <header className=' d-flex justify-content-between align-items-center mx-auto' style={{ maxWidth: "100rem" }}>
                <div className='d-flex gap-5' >
                    <Logo />
                    <nav className='d-flex align-items-center gap-4 navbar-expand-lg bg-body-tertiary'>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav gap-4">
                                {
                                    ROUTES.map(route => {
                                        const { label, link } = route
                                        return (
                                            <Link className="nav-link" key={label} href={link}>
                                                {label}
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='d-flex align-items-center'>
                    <button className='btn me-2 btn-block text-white rounded-pill  px-4' style={{ background: "#34d186",fontSize:"20px" }}>
                        Log in
                    </button>
                    <FiMenu className='d-lg-none mx-2' size={28} />
                </div>

            </header>
        </div>
    )
}

export default Header
