import { Card, Avatar, Col, Row, Typography, Descriptions, Tooltip  } from 'antd';
import one from './1.jpeg';
import two from './2.jpeg';
import three from './3.jpeg';
const {  Text } = Typography;

export default function Profile() {
    return (
        <div style={{ paddingTop: "20px"}}>
          <Card style={{ width: '100%' }}>
          <Row>
                <Col span={12}><Avatar src="https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg" size={100}/></Col>
                <Col span={12}>
                    <Text strong  style={{fontSize: '2em'}}>Mr. Amazing</Text>
                    <br/>
                    <Text>Karhu</Text>
                </Col>
            </Row>
            </Card>
            <Card style={{ width: '100%', marginTop: "10px" }}>
                <Text strong  style={{fontSize: '1.5em'}}>Level 2</Text>
                <br/>
                <Text>
                    Certified Quest Master
               </Text>
               <br/>
               <Text>
                    You can craft advanced, educational quests with a blend of history and exploration.
               </Text>
               <br/>
               <Text>
                    Step into a role where creativity meets guidance, and transform your journey into an unforgettable experience.
               </Text>
            </Card>
            <Card style={{ width: '100%', marginTop: "10px" }}>
                <Text strong  style={{fontSize: '1.5em'}}>Achievements</Text>
                <br/>
                <Avatar.Group maxCount={3}>
                    <Tooltip title="Quest master 2023" placement="top">
                        <Avatar size={64} src={one} />
                    </Tooltip>
                    <Tooltip title="Sustainable travelling" placement="top">
                        <Avatar size={64} src={two} />
                    </Tooltip>
                    <Tooltip title="Created 5 quests" placement="top">
                        <Avatar size={64} src={three}/>
                    </Tooltip>
                </Avatar.Group>
            </Card>

            <Card style={{ width: '100%', marginTop: "10px" }}>
                <Descriptions title="Profile" column={2}>
                    <Descriptions.Item label="Name">Tomi Asi</Descriptions.Item>
                    <Descriptions.Item label="Location">Sääriselkä, Lapland</Descriptions.Item>
                    <Descriptions.Item label="Email">tomi.asi@some.email</Descriptions.Item>
                    <Descriptions.Item label="Phone">+35812345678</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    )
}
