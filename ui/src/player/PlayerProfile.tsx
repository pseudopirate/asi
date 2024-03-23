import { Card, Avatar, Col, Row, Typography, Descriptions, Button, Progress  } from 'antd';
const {  Text } = Typography;

export default function Player() {
    return (
        <div style={{ paddingTop: "20px"}}>
          <Card style={{ width: '100%' }}>
          <Row>
                <Col span={12}><Avatar src="https://cdn.vectorstock.com/i/preview-1x/78/60/avatar-nerd-man-vector-42477860.jpg" size={100}/></Col>
                <Col span={12}>
                    <Text strong  style={{fontSize: '2em'}}>Grinch</Text>
                    <br/>
                    <Text>Poro</Text>
                </Col>
            </Row>
            </Card>
            <Card style={{ width: '100%', marginTop: "10px" }}>
                <Text strong  style={{fontSize: '1.5em'}}>Ongoing quest: Summer in Lapland</Text>
                <Progress percent={65} size="small" strokeColor="#87d068"/>
                <br/>
                <br/>
                <Text type="secondary">
                Experience the midnight sun with 'Summer in Lapland' – an unforgettable journey through the Arctic wilderness. Enjoy serene lakes, lush forests, and vibrant wildlife in a land where the sun never sets. Adventure awaits!
               </Text>
               <br/>
               <br/>
               <Button type="primary">View quest</Button>
            </Card>
            <Card style={{ width: '100%', marginTop: "10px" }}>
                <Descriptions title="Profile" column={2}>
                    <Descriptions.Item label="Name">Juan Moralez</Descriptions.Item>
                    <Descriptions.Item label="Location">Barselona, Spain</Descriptions.Item>
                    <Descriptions.Item label="Email">juan.m@some.email</Descriptions.Item>
                    <Descriptions.Item label="Phone">+3412345678</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    )
}
