import React, { useEffect } from 'react';
import { Button, Col, Dropdown, Form, Input, Menu, Row, Select } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { useIntl, Link } from '@umijs/max';

interface HeaderTableProps {
  linkToNewPage: string;
  filterKey: Record<string, string>;
  filterValue: { label: string; value: string | boolean }[];
}

interface FormValues {
  keyword: string;
  filterKey: string;
  filterValue: string;
}

export const HeaderTable = (props: HeaderTableProps) => {
  const { formatMessage } = useIntl();
  const [form] = Form.useForm();
  const { linkToNewPage, filterKey, filterValue } = props;

  const onValuesChange = (_: FormValues, values: FormValues) => {
    console.log(`Func: onValuesChange - PARAMS: changedValue, values`, values);
  };

  useEffect(() => {
    form.setFieldValue('filterValue', filterValue[0].value);
  }, []);

  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{
        filterKey: Object.keys(filterKey)[0],
      }}
    >
      <Row gutter={10}>
        <Col xs="auto">
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item>
                  <Form.Item noStyle name="filterKey">
                    <Select
                      style={{ width: '100%' }}
                      placeholder="Please select a country"
                    >
                      {Object.keys(filterKey).map((key) => (
                        <Select.Option value={key} key={key}>
                          {formatMessage({ id: filterKey[key] })}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Menu.Item>
                <Menu.Item>
                  <Form.Item noStyle name="filterValue">
                    <Select
                      style={{ width: '100%' }}
                      placeholder="Please select a country"
                    >
                      {filterValue.map((item) => (
                        <Select.Option
                          value={item.value}
                          key={`filter value ${item.label}`}
                        >
                          {formatMessage({ id: item.label })}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Menu.Item>
              </Menu>
            }
            placement="bottomLeft"
          >
            <Button icon={<FilterOutlined />}>
              {formatMessage({ id: 'filter' })}
            </Button>
          </Dropdown>
        </Col>
        <Col flex="auto">
          <Form.Item name="keyword" noStyle>
            <Input
              prefix={<SearchOutlined />}
              placeholder={formatMessage({ id: 'search' })}
            />
          </Form.Item>
        </Col>
        <Col xs="auto">
          <Link to={linkToNewPage}>
            <Button type="primary">{formatMessage({ id: 'add page' })}</Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
};
