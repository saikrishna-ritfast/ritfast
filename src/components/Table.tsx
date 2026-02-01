import styles from '../styles/table.module.css'
import type { CommonTableProps } from '../utils/tableData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { Pagination } from 'antd';

const CommonTable = <T,>({ columns, data }: CommonTableProps<T>) => {
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)} className={styles.th}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className={styles.empty}>
                                No data found
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr key={index} className={styles.tr}>
                                {columns.map((col) => (
                                    <td key={String(col.key)} className={styles.td}>
                                        {/* {String(row[col.key])} */}
                                        {col.key === "tag" ? (
                                            <span className={row[col.key] === "Hot" ? styles.tagHot : row[col.key] === "Cold" ? styles.tagCold : styles.tagWarm}>{row[col.key] === "Hot" ? <i className="bi bi-fire" /> : row[col.key] === "Cold" ? <FontAwesomeIcon icon={faSnowflake} /> : <i className="bi bi-cup-hot-fill" />}{String(row[col.key])}</span>
                                        ) : col.key === "status" ? (
                                            <span className={row[col.key] === "Active" ? styles.tagActive : styles.tagInactive}>{String(row[col.key])}</span>
                                        ) : (
                                            String(row[col.key])
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Pagination className={styles.pagination}
                styles={{ item: { padding: '0px' } }}
                total={data.length} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`}
            />
        </>
    );
};


export default CommonTable;
