import React from 'react'
import Sidebar from '../shell/Sidebar'
import Navbar from '../shell/Navbar'
import styles from '../styles/shellStyles/Sidebar.module.css'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.mainLayout} >
            <Sidebar />
            <main className={styles.content}>
                <Navbar />
                <div className={styles.children}>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout