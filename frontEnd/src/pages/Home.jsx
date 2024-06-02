/* eslint-disable no-unused-vars */
import React from 'react'

import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Home = () => {
    return (
        <div className='flex gap-10'>
            <Sidebar />
            <Content />
        </div>
    )
}

export default Home