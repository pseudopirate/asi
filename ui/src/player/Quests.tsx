import React from 'react';
import { List, Avatar, Row, Col, Button, Rate, Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import four from './4.jpeg';
import five from './5.jpeg';
import six from './6.jpeg';

const {  Text } = Typography;

const data = [
    {
      title: 'The Northest Pole',
      rate: 5,
      src: four,
    },
    {
      title: 'Summer in Lapland',
      ongoing: true,
      rate: 4,
      src: five,
    },
    {
      title: 'Mushroom seekers',
      rate: 4.5,
      src: six,
    },
  ];

export default function Quests() {
  const navigate = useNavigate();

    return (
      <div>
      <Row>
        <Col span={24}>
        <List
          style={{paddingTop: "20px"}}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <React.Fragment key={item.title} >
            <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.src} />}
              title={<><Text>{item.title}</Text><Rate disabled allowHalf defaultValue={item.rate} /></>}
              description={item.ongoing ? <div style={{color: "red"}}><WarningOutlined /> Ongoing</div> : ""}
            />
            <br/>
          <Button size='small'>Attend quest</Button>
          </List.Item>
          </React.Fragment>
        )}
      />
        </Col>
      </Row>
      </div>
    )
}