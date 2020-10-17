import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device2 = ({match}) => {

    const portData = [
        { key: 'UDP', data: 3 },
        { key: 'TCP', data: 4 }
    ];

    const ports = [
        {
            key: '1',
            port: '80',
            protocol: 'TCP',
            status: 'Open',
            service: 'http',
            version: 'N/A'
        },
        {
            key: '2',
            port: '5555',
            protocol: 'TCP',
            status: 'Open',
            service: 'upnp',
            version: 'MiniUPnP 2.0 (UPnP 1.0)'
        },
        {
            key: '3',
            port: '49152',
            protocol: 'TCP',
            status: 'Open',
            service: 'upnp',
            version: 'Cisco-Linksys E4200 WAP upnpd (UPnP 1.0)'
        },
        {
            key: '4',
            port: '49153',
            protocol: 'TCP',
            status: 'Open',
            service: 'upnp',
            version: 'Cisco-Linksys E4200 WAP upnpd (UPnP 1.0)'
        },
        {
            key: '5',
            port: '1900',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'upnp',
            version: 'N/A'
        },
        {
            key: '6',
            port: '5353',
            protocol: 'UDP',
            status: 'Open',
            service: 'zeroconf',
            version: 'DNS-based service discovery'
        },
        {
            key: '7',
            port: '5355',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'llmnr',
            version: 'N/A'
        }
    ];

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>My Wi-Fi extender is an Airties device. This smart Wi-Fi extender uses 
                the same network information as my gateway, which means connecting to the 
                extender is the same process as connection to the gateway. My Wi-Fi extender 
                the IP address of <strong>192.168.1.248</strong> and MAC address of <strong>f4:17:b8:0c:33:35</strong>.</p>
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
                <p>We can see that this device also runs a webserver for configuration. 
                This device is also running zeroconf and upnp, which both assist with direct 
                device-to-device connection. Additionally, the Wi-Fi extender is running llmnr, 
                a protocol based on DNS, which makes sense as it also must be able to resolve 
                domains to IPs if devices are connected to it.</p>
            </Col>
        </Row>
        </>
    );

};

export default Device2;