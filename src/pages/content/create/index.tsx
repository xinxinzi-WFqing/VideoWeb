/**
 * 创建内容页
 */
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Form, Input, Upload } from 'antd';

export default () => {
  return (
    <PageContainer>
      <ProCard>
        <Form>
          <Form.Item label={'标题'} name={'title'}>
            <Input />
          </Form.Item>
          <Form.Item label={'封面'} name={'cover'}>
            <Upload />
          </Form.Item>
          <Form.Item label={'简介'} name={'introduction'}>
            <Input />
          </Form.Item>
          <Form.Item label={'内容'} name={'content'}>
            <Upload />
          </Form.Item>
          <Form.Item label={'分类'} name={'categoryId'}>
            <Input />
          </Form.Item>
          <Form.Item label={'标签'} name={'labelIds'}>
            <Input />
          </Form.Item>
          <Form.Item label={'评分'} name={'score'}>
            <Input />
          </Form.Item>
          <Form.Item label={'演员'} name={'cast'}>
            <Input />
          </Form.Item>
        </Form>
      </ProCard>
    </PageContainer>
  );
};
