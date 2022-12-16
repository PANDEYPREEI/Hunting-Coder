import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
    <div>
       <div className="flex flex-row justify-center gap-7 mt-11 ">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar
