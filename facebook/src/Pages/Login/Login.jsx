import React from 'react'
import '../../index.css'

function Login() {
  return (
   <section className='h-screen '>
      <main className='w-100 h-full pt-6 pl-6 '>
        <header className='w-full h-30'>
          <img src="public/images/download.png" alt="" width={100} />
        </header>
        <footer className='h-160 flex items-end flex justify-end'>
          <h1 className='poppins-thin text-6xl'>Explore as coisas que <span className='text-[#1877F2]'>você <div /> ama</span>.</h1>
        </footer>
      </main>
      </section>
  )
}

export default Login
