import React from 'react'
import Link from 'next/link'

 function Navigation() {
  return (
     <header className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex items-center justify-center space-x-2.5">
            <img
              src="https://img.freepik.com/premium-vector/chat-vector-icon_676179-133.jpg"
              alt="logo"
              className="w-[40px] h-[40px]"
            />
            <h1 className="text-xl font-bold">
              <span style={{ color: "indigo" }}>Talk</span> business
            </h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link className="hover:text-gray-500 transition-colors" href={"/"}>
              home
            </Link>
            <Link
              className="hover:text-gray-500 transition-colors"
              href={"/about"}
            >
              about
            </Link>
            <button className="btn btn-outline btn-secondary">
              Contanct us
            </button>
          </nav>
        </div>
      </header>
  )
}
export default Navigation;