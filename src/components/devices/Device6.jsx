import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device6 = ({match}) => {

    const portData = [
        { key: 'TCP', data: 1 }
    ]

    const ports = [
        {
            key: '1',
            port: '9080',
            protocol: 'TCP',
            status: 'Open',
            service: 'http',
            version: 'Mongoose httpd'
        } 
    ];

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>The sixth I will look at is the Roku TV. This TV runs Roku OS, a 
                proprietary operating system used by these smart TVs. The Roku TV has 
                an IP address of <strong>192.168.1.70</strong> and a MAC address 
                of <strong>d8:13:99:57:ef:8f</strong>. The scans for this device were 
                very interesting as Nmap was returning me data stating that all ports 
                are filtered. I believe this is due to the OS firewall.</p>
            </Col>
            <Col span={10}>
                <Row justify='center'>
                    <h3 style={{margin: '0 4vw'}}>Ports returned by Nmap</h3>
                    <Pie data={portData} />
                </Row>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={24}>
                <Divider>Port Information</Divider>
            </Col>
            <Col span={18}>
                <Tables data={ports} />
            </Col>
            <Col span={6}>
                <p>The Roku TV contains a single open port which runs http. After looking 
                into this protocol on the open port, I came to the conclusion that it is 
                used by Netflix to host some APIs. The interesting thing about this discovery 
                is that it is easy to tell which devices on your network are running Netflix 
                just by checking this port.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device6;