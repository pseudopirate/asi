import React from 'react';
import { List, Avatar, Row, Col, Button, Rate, Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
const {  Text } = Typography;

const data = [
    {
      title: 'The Northest Pole',
      rate: 5,
      src: "https://files.oaiusercontent.com/file-G70pccCIK5uC3wqurSNM0nHq?se=2024-03-23T16%3A58%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dafb83d6a-6224-48cd-a0ce-eac7af3f60ef.webp&sig=9qX3fhh0OdlcaP2ojgtmh3fRRplTljEWMjcGbw/Bzbg%3D",
    },
    {
      title: 'Summer in Lapland',
      ongoing: true,
      rate: 4,
      src: "https://files.oaiusercontent.com/file-US1qy9erFDVfhfMegYeTj7oh?se=2024-03-23T17%3A00%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd8b32ae3-cdc5-4595-a7fd-e30a2274bef4.webp&sig=Q7wUsebBPX3l/7Td1IKzs6bqDsPAnIFx/jQnc9XpYNM%3D",
    },
    {
      title: 'Mushroom seekers',
      rate: 4.5,
      src: "https://files.oaiusercontent.com/file-aCHN8t7VWrAbzaFKaplNRtS2?se=2024-03-23T17%3A02%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6250734a-e3b1-4b3c-9efc-e3bcebfe4428.webp&sig=5kQ0e4uc9KWkp3%2BD/FZ/XKQ9SXyh4vv7mjDRdWG4024%3D",
    },
  ];

export default function Quests() {
    return (
      <div  style={{paddingTop: "20px"}}>
            <Row>
        <Col><Button>Create new journey</Button></Col>
      </Row>
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
          <Button size='small'>Manage quest</Button>
          </List.Item>
          </React.Fragment>
        )}
      />
        </Col>
      </Row>
      </div>
    )
}