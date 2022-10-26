import { Link, useIntl } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row, Table } from 'antd';
import { truncateWords } from '@/utils/utils';
import { HeaderTable } from '@/components/header-table';
import { FILTER_BLOGS, FILTER_HIDDEN } from '@/constants';
import { useRequest } from '@@/exports';
import { Article, Category } from '@/interfaces';
import services from '@/services';

const { fetchCategories } = services.CategoryController;

const defaultState = {
  list: [],
  total: 0,
};

const CategoryPage: React.FC<unknown> = () => {
  const { formatMessage, formatDate, formatTime } = useIntl();
  const { data } = useRequest(fetchCategories);

  const [category, setCategory] = useState<{
    list: Category[];
    total: number;
  }>(defaultState);

  useEffect(() => {
    setCategory(data || defaultState);
  }, [data]);

  const columns = useMemo(
    () => [
      {
        title: formatMessage({ id: 'title' }),
        render: (record: { _id: string; name: string; content: string }) => {
          return (
            <div>
              <Link to={`/pages/${record._id}`}>{record.name}</Link>
              <div>{truncateWords(record.content, { words: 30 })}</div>
            </div>
          );
        },
      },
      {
        title: formatMessage({ id: 'updated at' }),
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
            rowKey="id"
            columns={columns}
            dataSource={category.list}
            rowSelection={{
              onChange: (_, selectedRows) =>
                console.log(`selectedRows`, selectedRows),
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

export default CategoryPage;
