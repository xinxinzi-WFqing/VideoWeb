/**
 * Content manager list
 */
import { Content } from '@/domain/content/typing';
import { PageContainer, ProColumns, ProTable, RequestData } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import React from 'react';

async function fetchListDatas(params: Content.ListRequest): Promise<Partial<RequestData<Content.Content>>> {
    
}

export default () => {
  const [value, setValue] = React.useState<Content.Content | undefined>();
  const [visible, setVisible] = React.useState<boolean>(false);

  const columns: ProColumns<Content.Content>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      search: false,
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '封面',
      dataIndex: 'cover',
      search: false,
    },
    {
      title: '简述',
      dataIndex: 'introduction',
      search: false,
    },
    {
      title: '分类',
      dataIndex: 'categoryName',
    },
    {
      title: '标签',
      dataIndex: 'labels',
    },
    {
      title: '评分',
      dataIndex: 'score',
      search: false,
    },
    {
      title: '内容地址',
      dataIndex: 'content',
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      search: false,
    },
    {
      title: '修改时间',
      dataIndex: 'modifyAt',
      search: false,
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
      <ProTable<Content.Content>
        headerTitle={'内容列表'}
        columns={columns}
        toolBarRender={() => [
          <Button key={'content-create-button'} type={'primary'}>
            发布内容
          </Button>,
        ]}
        request={(params) => {
            return fetchListDatas({title: params.title, page: String(params.current), pageSize: String(params.pageSize)})
        }}
      />
    </PageContainer>
  );
};
