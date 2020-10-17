import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device3 = ({match}) => {

    const portData = [
        { key: 'UDP', data: 3 },
        { key: 'TCP', data: 1 }
    ]

    const ports = [
        {
            key: '1',
            port: '8888',
            protocol: 'TCP',
            status: 'Open',
            service: 'sun-answerbook',
            version: 'Tornado httpd 6.0.4'
        },
        {
            key: '2',
            port: '137',
            protocol: 'UDP',
            status: 'Open',
            service: 'netbios-ns',
            version: 'N/A'
        },
        {
            key: '3',
            port: '138',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'netbios-dgm',
            version: 'N/A'
        },
        {
            key: '4',
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
                <p>The third device I will look at is Harrison’s (my) MacBook Pro. 
                This device is obviously an Apple product running macOS version 10.15.6. 
                This is the machine I utilized for the Nmap scans on my network. My MacBook 
                has the IP of <strong>192.168.1.220</strong> and a MAC address of <strong>8c:85:90:cf:9a:e4</strong>. 
                I was unable to find this MAC address using Nmap scans, however I was easily able to look it up in system 
                settings since it is my machine. I am unsure why Nmap does not return the MAC address of the machine used to scan.</p>
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
                <p>My MacBook has netbios-ns, netbios-dgm and zeroconf services running. 
                Zeroconf is a protocol used for device-to-device connection. Netbios is used 
                to allow applications on separate computers to communicate. Because my device has netbios 
                and zeroconf running, it leads me to believe Apple uses these protocols to 
                communicate between their devices. Another service that my computer is running is 
                sun-answerbook which is used for my Jupyter Notebook server.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device3;