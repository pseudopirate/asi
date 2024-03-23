import React from 'react';
import { Button, Form, Input, Badge, Avatar, Space, Tooltip } from 'antd';
import seven from './7.webp';
import eight from './8.webp';
import nine from './9.webp';
import ten from './10.webp';
import eleven from './11.webp';

type FieldType = {
  name?: string;
  price?: string;
  path?: string;
  artifacts?: string;
};

export default function NewQuest() {
    return (
        <>
        <h3>Create new journey</h3>
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
            <Input placeholder="New amazing journey"/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
          >
            <Input placeholder="200 €"/>
          </Form.Item>

          <Form.Item
            label="Journey path"
            name="path"
          >
          <iframe
          title='path'
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBOHWDSA5RgrKZu_X7ok5O9der9YoSe3O0&origin=Saariselkä,+Finland&destination=Alttojärvi,+Finland&avoid=tolls|highways&mode=walking"
            allowFullScreen>
          </iframe>
          </Form.Item>

          <Form.Item<FieldType>
            label="Quest artifacts"
            name="artifacts"
          >
          <Space size="middle">
          <Tooltip title="Add puzzle" placement="top">
            <Badge count={3}>
              <Avatar size={98} shape="square" src={seven}/>
            </Badge>
            </Tooltip>
            <Tooltip title="Create AR mark" placement="top">
            <Badge count={4} showZero>
              <Avatar size={98} shape="square" src={eight}/>
            </Badge>
            </Tooltip>
          </Space>
          </Form.Item>


          <Form.Item
            label="Attach partners"
            name="partners"
          >
          <Space size="middle">
          <Tooltip title="Add camping" placement="top">
          <Badge count={15}>
              <Avatar size={98} shape="square" src={nine}/>
            </Badge>
            </Tooltip>
            <Tooltip title="Add transportation" placement="top">
            <Badge count={8} showZero>
              <Avatar size={98} shape="square" src={ten}/>
            </Badge>
            </Tooltip>
            <Tooltip title="Add food point" placement="top">
            <Badge count={19} showZero>
              <Avatar size={98} shape="square" src={eleven}/>
            </Badge>
            </Tooltip>
          </Space>
          </Form.Item>
      
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
        </>
      );
}