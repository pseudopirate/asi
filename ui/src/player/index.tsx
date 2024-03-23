import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import PlayerProfile from './PlayerProfile';

import Achievements from './Achievements'

const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: 'profile',
    },
    {
      label: 'Achievements',
      key: 'quests',
    },
  ];

export function Player() {
    const [current, setCurrent] = useState('profile');

    const onClick: MenuProps['onClick'] = (e) => {
      setCurrent(e.key);
    };
  
    return (
        <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        {current === 'profile' && <PlayerProfile/>}
        {current === 'quests' && <Achievements/>}
        </>
    );
}