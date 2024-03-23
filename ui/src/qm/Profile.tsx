import { Card, Avatar, Col, Row, Typography, Descriptions, Tooltip  } from 'antd';
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
                        <Avatar size={64} src="https://files.oaiusercontent.com/file-y08LkZpIMgVsDhY8HUrPHJ7x?se=2024-03-23T16%3A22%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56f32387-9c66-4052-9d16-b7b3c589fe48.webp&sig=CHMC03Fv3zQ2usqRpE9niAy26ApKFi9pbXQEDLQS17g%3D" />
                    </Tooltip>
                    <Tooltip title="Sustainable travelling" placement="top">
                        <Avatar size={64} src="https://files.oaiusercontent.com/file-URpLdo91IFvhcBJ6A6PUFdvb?se=2024-03-23T16%3A28%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D48b94321-8d54-4e7d-8c23-c923aa8368e7.webp&sig=SrYtz%2BIXAOMEDu3Yx0/y9FjI5BDmgN6erPGtbpNd90k%3D"/>
                    </Tooltip>
                    <Tooltip title="Created 5 quests" placement="top">
                        <Avatar size={64} src="https://files.oaiusercontent.com/file-qAWaWKUJxQBxyPh0RSCM7efN?se=2024-03-23T16%3A32%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D61705e65-b2c7-4120-8be4-e7a6085397ff.webp&sig=ZjD99OcCzkxcJFR8eE%2BCvd4aeaLnClfimX7D9oSqthw%3D"/>
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
