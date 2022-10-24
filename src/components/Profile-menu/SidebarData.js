import React from "react";
import { Menu } from 'antd';
import { LogoutOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';





export const SidebarData = (

    <Menu
        items={[
            {
                key: '1',
                
                 label: (
                 <a href="/s">edit</a>
                ),
                path: '',
                icon: <EditOutlined />,
                disabled: false,
               
            },
            {
                key: '2',
                
                label: (
                    <h4>Settings</h4>
                ),
                icon: <SettingOutlined />,
                disabled: false,
            },
            {
                key: '3',
                label: (
                    <h4>Logout</h4>
                ),
                path:'/',
                icon: <LogoutOutlined />,
                disabled: false,
            },
            // {
            //     key: '4',
            //     danger: true,
            //     label: 'a danger item',
            // },
        ]}
    />

)
