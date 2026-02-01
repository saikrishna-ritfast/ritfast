import React from 'react'
import Layout from '../Layout'
import CommonTable from '../../components/Table'
import { users, columns } from '../../utils/tableData'
import styles from '../../styles/user.module.css'

const Users = () => {

    return (
        <Layout >
            <h1 className={styles.header}>Users</h1>
            <CommonTable columns={columns} data={users} />
        </Layout>
    )
}

export default Users