import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device4 = ({match}) => {

    const portData = [
        { key: 'UDP', data: 1 },
        { key: 'TCP', data: 1 }
    ]

    const ports = [
        {
            key: '1',
            port: '62078',
            protocol: 'TCP',
            status: 'Open',
            service: 'iphone-sync',
            version: 'N/A'
        },
        {
            key: '2',
            port: '5353',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'zeroconf',
            version: 'N/A'
        }
    ];

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>This device is running the latest iOS 14 operating system developed by 
                Apple. My iPhone has the IP address of <strong>192.168.1.163</strong> and 
                MAC address of <strong>16:c1:29:e6:e3:02</strong>. This device was a little 
                more difficult to scan compared to the other devices because the scans would 
                sometimes drop when the phone was off (not completely powered off just locked).</p>
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
                <p>We can see that my iPhone has two ports open, iphone-sync and zeroconf. 
                Like I stated with previous Apple devices, zeroconf is used by Apple 
                products to communicate within a network. The iPhone also utilizes the 
                iphone-sync protocol to sync with trusted computers over Wi-Fi.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device4;