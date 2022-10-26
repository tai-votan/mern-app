import { Link, useIntl, useRequest } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row, Table } from 'antd';
import { HeaderTable } from '@/components/header-table';
import { FILTER_BLOGS, FILTER_HIDDEN } from '@/constants';
import services from '@/services';
import { Article } from '@/interfaces';

const { fetchAllArticle } = services.ArticleController;

const defaultState = {
  list: [],
  total: 0,
};

const Blogs: React.FC = () => {
  const { data } = useRequest(fetchAllArticle);

  const [article, setArticle] = useState<{ list: Article[]; total: number }>(
    defaultState,
  );

  useEffect(() => {
    setArticle(data || defaultState);
  }, [data]);

  const { formatMessage, formatDate, formatTime } = useIntl();

  const columns = useMemo(
    () => [
      {
        title: formatMessage({ id: 'title' }),
        render: (record: { _id: string; name: string }) => {
          return (
            <Link to={`/blogs/articles/${record._id}`}>{record.name}</Link>
          );
        },
      },
      {
        title: formatMessage({ id: 'category' }),
        dataIndex: 'category',
        render: (record: { id: any; name: string }) => {
          return (
            <Link to={`/blogs/categories/${record?.id}`}>{record?.name}</Link>
          );
        },
      },
      {
        title: formatMessage({ id: 'author' }),
        dataIndex: 'author',
        render: (record: { id: any; name: string }) => {
          return <Link to={`/accounts/${record?.id}`}>{record?.name}</Link>;
        },
      },
      {
        title: formatMessage({ id: 'public' }),
        dataIndex: 'updatedAt',
        render: (date: string) => `${formatDate(date)}  ${formatTime(date)}`,
        width: 155,
      },
    ],
    [],
  );

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
            rowKey="_id"
            columns={columns}
            dataSource={article.list}
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
