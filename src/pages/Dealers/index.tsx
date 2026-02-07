import Layout from "../Layout"
import CommonTable from "../../components/Table"
import { dealers, dealerColumns } from "../../utils/tableData"
import styles from '../../styles/user.module.css'
import PaginationOutlined from "../../utils/pagination"

const Dealers = () => {
    return (
        <Layout>
            <h1 className={styles.header}>Dealers</h1>
            <CommonTable columns={dealerColumns} data={dealers} />
            <PaginationOutlined total={dealers.length} current={2} pageSize={10} onPageChange={(page, pageSize) => console.log(page, pageSize)} />
        </Layout>
    )
}

export default Dealers