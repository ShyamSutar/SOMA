import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <>
        <div className='h-screen w-screen'>
            <div className='mt-12 h-full w-full flex justify-center items-center'>
                <div className='text-center'>
                <div><h1>404</h1></div>
                <div><h1>We are sorry, Page not found</h1></div>
            <Link to='/'>Back to HomePage</Link>
                </div>
            </div>
        </div>
    </>
  )
}
