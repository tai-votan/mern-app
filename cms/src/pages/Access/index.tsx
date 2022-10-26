import React from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';

const AccessPage: React.FC = () => {
  const access = useAccess();
  console.log(`Func: AccessPage - PARAMS: access`, access);
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>dada 只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
