import { Card, Button, Typography, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Player = () => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <Card title={<Title level={3}>Packages</Title>} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div style={{ padding: '24px' }}>
        <Text style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
          Buy and visit different packages
        </Text>
        <ul style={{ borderTop: '1px solid #E5E5E5', paddingTop: '16px' }}>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <UserOutlined style={{ fontSize: '24px', color: 'currentColor' }} />
              <div style={{ fontSize: '16px', fontWeight: '500' }}>Starter Pack</div>
              <div style={{ fontSize: '14px', color: '#757575' }}>Access to the game</div>
            </div>
            <Button type="primary" style={{ borderRadius: '4px' }}>
              View
            </Button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <UserOutlined style={{ fontSize: '24px', color: 'currentColor' }} />
              <div style={{ fontSize: '16px', fontWeight: '500' }}>Explorer's Bundle</div>
              <div style={{ fontSize: '14px', color: '#757575' }}>Unlocks new areas</div>
            </div>
            <Button type="primary" style={{ borderRadius: '4px' }}>
              View
            </Button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <UserOutlined style={{ fontSize: '24px', color: 'currentColor' }} />
              <div style={{ fontSize: '16px', fontWeight: '500' }}>VIP Pass</div>
              <div style={{ fontSize: '14px', color: '#757575' }}>Exclusive items</div>
            </div>
            <Button type="primary" style={{ borderRadius: '4px' }}>
              View
            </Button>
          </li>
        </ul>
      </div>
    </Card>

    <Card title={<Title level={3}>Player Profile</Title>} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/placeholder.svg" width="64" height="64" alt="Player" style={{ borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title level={5}>Player123</Title>
            <Text style={{ fontSize: '14px', color: '#757575' }}>Level 10 Adventurer</Text>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={2}>250</Title>
          <Text style={{ fontSize: '14px', color: '#757575' }}>XP</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={2}>5</Title>
          <Text style={{ fontSize: '14px', color: '#757575' }}>Achievements</Text>
        </div>
      </div>
    </Card>

    <Card title={<Title level={3}>Ongoing Tasks</Title>} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <UserOutlined style={{ fontSize: '32px', color: 'currentColor' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title level={5}>Hiking Adventure</Title>
            <Text style={{ fontSize: '14px', color: '#757575' }}>Explore the mountain trails and find hidden treasures</Text>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Code</label>
            <Input placeholder="Enter code" style={{ borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Instructions</label>
            <Input.TextArea placeholder="Enter instructions" style={{ borderRadius: '4px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={2}>2/5</Title>
          <Text style={{ fontSize: '14px', color: '#757575' }}>Tasks completed</Text>
        </div>
      </div>
    </Card>
  </div>
);

export default Player;