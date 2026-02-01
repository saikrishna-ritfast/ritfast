import Layout from "../Layout"
import CommonTable from "../../components/Table"
import { dealers, dealerColumns } from "../../utils/tableData"
import styles from '../../styles/user.module.css'

const Dealers = () => {
    return (
        <Layout>
            <h1 className={styles.header}>Dealers</h1>
            <CommonTable columns={dealerColumns} data={dealers} />
        </Layout>
    )
}

export default Dealers