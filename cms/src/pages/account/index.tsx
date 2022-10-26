import { Link, useIntl } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import { Col, Row, Table } from 'antd';
import { truncateWords } from '@/utils/utils';
import { HeaderTable } from '@/components/header-table';
import { FILTER_BLOGS, FILTER_HIDDEN } from '@/constants';

const Blogs: React.FC<unknown> = () => {
  const { formatMessage } = useIntl();

  const data: any = [];

  const columns = [
    {
      title: formatMessage({ id: 'user' }),
      render: (record: { id: any; name: string }) => {
        return (
          <div>
            <Link to={`/account/${record.id}`}>{record.name}</Link>
          </div>
        );
      },
    },
    {
      title: formatMessage({ id: 'userName' }),
      dataIndex: 'userName',
    },
    {
      title: formatMessage({ id: 'email' }),
      dataIndex: 'email',
    },
    {
      title: formatMessage({ id: 'phone' }),
      dataIndex: 'phone',
    },
    {
      title: formatMessage({ id: 'active status' }),
      render: (record: { id: any; title: string; content: string }) => {
        return (
          <div>
            <Link to={`/pages/${record.id}`}>{record.title}</Link>
            <div>{truncateWords(record.content, { words: 30 })}</div>
          </div>
        );
      },
    },
  ];

  return (
    <PageContainer>
      <Row gutter={[0, 20]}>
        <Col xs={24}>
          <HeaderTable
            filterKey={FILTER_BLOGS}
            filterValue={FILTER_HIDDEN}
            linkToNewPage="/blogs/add"
          />
        </Col>
        <Col xs={24}>
          <Table
            scroll={{ x: 800 }}
            rowKey="id"
            columns={columns}
            dataSource={data}
            rowSelection={{
              onChange: (_, selectedRows) =>
                console.log(
                  `Func: onChange - PARAMS: selectedRows`,
                  selectedRows,
                ),
            }}
            pagination={{
              pageSize: 20,
            }}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Blogs;
