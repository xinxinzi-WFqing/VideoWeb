/**
 * Classification manager list
 */
import { Classification } from '@/domain/classification/typing';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Space } from 'antd';
import React from 'react';

export default () => {
  const [value, setValue] = React.useState<Classification.Item | undefined>();
  const [visible, setVisible] = React.useState<boolean>(false);

  const columns: ProColumns<Classification.Item>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '分类名',
      dataIndex: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
    },
    {
      title: '操作',
      render: (_, entity) => {
        return (
          <Space>
            <a
              onClick={() => {
                setValue(entity);
                setVisible(true);
              }}
            >
              修改
            </a>
          </Space>
        );
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable columns={columns} />
    </PageContainer>
  );
};
