import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className='grid md:grid-cols-4 gap-5 bg-slate-100 px-10 py-16'>
      <div className='text-3xl font-bold text-indigo-500'>New Blog</div>
      <div className='flex flex-col gap-5'>
        <h1 className="text-2xl font-semibold text-indigo-400">Company</h1>
        <div className='flex flex-col gap-2'>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Our Staff</Link>
          <Link href="#">Advertise</Link>
        </div>
        </div>
      <div className='flex flex-col gap-5'>
        <h1 className="text-2xl font-semibold text-indigo-400">Tech News</h1>
        <div className='flex flex-col gap-2'>
          <Link href="#">Technology</Link>
          <Link href="#">Gadget</Link>
          <Link href="#">Software</Link>
          <Link href="#">Games</Link>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className="text-2xl font-semibold text-indigo-400">Legal</h1>
        <div className='flex flex-col gap-2'>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Extra Crunch Terms</Link>
          <Link href="#">Code of Conduct</Link>
        </div>
      </div>
    </div>
  )
}

export default FooterPage