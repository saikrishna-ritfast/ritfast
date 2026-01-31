import React from 'react'
import Sidebar from '../shell/Sidebar'
import Navbar from '../shell/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Sidebar />
            <main className='' >
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default layout