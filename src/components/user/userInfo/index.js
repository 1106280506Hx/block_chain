
import React from 'react';

import { Avatar, Typography , } from 'antd';

import './index.css';

const { Title } = Typography;

function UserInfo(props){
    // 接收数据
    // const projectData = props.projectData
    const { nickName, id, points} = props;

    return (
        <div style={{margin: '20px'}}>
            <Title>我的主页</Title>
            <div className='avatarHolder'>
            <Avatar size={100} src="https://joeschmoe.io/api/v1/random" />
            </div>
            <div className='textHolder'>
            <p className='userInfomation'>用户名: {nickName}</p>
            <hr />
            <p className='userInfomation'>用户id: {id}</p>
            <hr />
            <p className='userInfomation'>我的积分: {points}</p>
            <hr />
            </div>
        </div>
    )
}


export default UserInfo;