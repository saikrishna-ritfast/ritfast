import Layout from '../Layout'
import CommonTable from '../../components/Table'
import { users, columns } from '../../utils/tableData'
import styles from '../../styles/user.module.css'
import PaginationOutlined from '../../utils/pagination'

const Users = () => {

    return (
        <Layout >
            <h1 className={styles.header}>Users</h1>
            <CommonTable columns={columns} data={users} />
            <PaginationOutlined total={users.length} current={2} pageSize={10} onPageChange={(page, pageSize) => console.log(page, pageSize)} />
        </Layout>
    )
}

export default Users