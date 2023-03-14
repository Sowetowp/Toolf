import React from 'react'

const Welcome = () => {
  return (
    <>
        <div className='text-center come mt-5 container-fluid'>
            <p className='welc'>WELCOME</p>
            <div>
                <a href='/csi'><button className='ubut m-3'>USER</button></a>
                <a href='/asi'><button className='abut m-3'>ADMIN</button></a>
            </div>
        </div>
    </>
  )
}

export default Welcome