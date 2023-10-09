import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

export default function Layout({children}) {
  const location = useLocation();
  return (
    <div className="">
      <Header />
      {children}
      {location.pathname !== "/" && <Footer />}
      <button className="fixed right-36 text-black bottom-10 rounded-full border border-black p-4 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
}
