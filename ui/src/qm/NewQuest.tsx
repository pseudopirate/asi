import React from 'react';
import { Button, Checkbox, Form, type FormProps, Input } from 'antd';

type FieldType = {
  name?: string;
  price?: string;
  remember?: string;
};

export default function NewQuest() {
    return (
        <Form
          name="basic"
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Journey name"
            name="name"
          >
            <Input value="New amazing journey"/>
          </Form.Item>


          <Form.Item<FieldType>
            label="Price"
            name="price"
          >
            <Input value=""/>
          </Form.Item>
      
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      );
}