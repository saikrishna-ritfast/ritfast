import { Pagination } from 'antd';
import paginationStyles from '../styles/pagination.module.css'

type PaginationProps = {
    total: number,
    current: number,
    pageSize: number,
    onPageChange: (Page: number, pageSize: number) => void
}

export default function PaginationOutlined({ total, pageSize, current, onPageChange }: PaginationProps) {
    return (
        <div>
            <Pagination
                className={paginationStyles.pagination}
                total={total}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                current={current}
                pageSize={pageSize}
                onChange={onPageChange}
            />
        </div>
    );
}
