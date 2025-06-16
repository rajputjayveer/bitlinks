import React from 'react'
import localFont from 'next/font/local'

const poppins = localFont({
    src: "../app/fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
});

const Footer = () => {
    return (
        <footer className=' bg-purple-700 text-black '>
            <div className='text-center p-3 flex justify-between'>
                <p className='text-lg '>copyrights &copy; 2025 reserved by <span className={`text-white text-xl font-bold ${poppins.className}`}>BitLinks</span></p>
                <div className='text-sm flex gap-5 items-center justify-center' >
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">HIPAA Compliance</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
