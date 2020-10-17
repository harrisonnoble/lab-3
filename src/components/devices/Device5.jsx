import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device5 = ({match}) => {

    const portData = [
        { key: 'UDP', data: 3 }
    ]

    const ports = [
        {
            key: '1',
            port: '137',
            protocol: 'UDP',
            status: 'Open',
            service: 'netbios-ns',
            version: 'N/A'
        },
        {
            key: '2',
            port: '138',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'netbios-dgm',
            version: 'N/A'
        },
        {
            key: '3',
            port: '5353',
            protocol: 'UDP',
            status: 'Open',
            service: 'zeroconf',
            version: 'DNS-based service discovery'
        }
    ];

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>I will look into Reid’s (my roommate) MacBook Pro. I was given permission 
                to scan his laptop prior to starting this report. Like my MacBook Pro, my 
                roommate’s machine is also running macOS version 10.15.6. The associated IP 
                and MAC address for this device are <strong>192.168.1.71</strong> and 
                <strong>8c:85:90:a9:04:30</strong> respectively.</p>
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
                <p>My roommate’s MacBook has netbios-ns, netbios-dgm and zeroconf services. 
                Zeroconf is a protocol used for device-to-device connection. Netbios is used 
                to allow applications on separate computers to communicate. Because both my laptop and 
                my roommate's laptop both have netbios and zeroconf running, it leads me to believe 
                Apple uses these protocols to communicate between their devices.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device5;