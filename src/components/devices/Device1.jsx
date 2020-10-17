import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device1 = ({match}) => {

    const portData = [
        { key: 'UDP', data: 3 },
        { key: 'TCP', data: 4 }
    ]

    const ports = [
        {
            key: '1',
            port: '53',
            protocol: 'TCP',
            status: 'Open',
            service: 'domain',
            version: 'dnsmasq 2.78'
        },
        {
            key: '2',
            port: '80',
            protocol: 'TCP',
            status: 'Open',
            service: 'http',
            version: 'N/A'
        },
        {
            key: '3',
            port: '111',
            protocol: 'TCP',
            status: 'Filtered',
            service: 'rpcbind',
            version: 'N/A'
        },
        {
            key: '4',
            port: '443',
            protocol: 'TCP',
            status: 'Open',
            service: 'https',
            version: 'N/A'
        },
        {
            key: '5',
            port: '53',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'domain',
            version: 'dnsmasq 2.78'
        },
        {
            key: '6',
            port: '67',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'dhcps',
            version: 'N/A'
        },
        {
            key: '7',
            port: '111',
            protocol: 'UDP',
            status: 'Open|Filtered',
            service: 'rpcbind',
            version: 'N/A'
        }
    ]

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>This device is a router-modem combination, meaning it functions as both a modem and a router but comes 
                as a single unit. The wireless gateway uses an optical network terminal (ONT) and 
                translates the optical signals into electronic signals that can be used by the routing hardware. 
                The gateway also handles all the routing and NAT that must be done to ensure traffic makes it to the 
                correct device in the network. This device has the IP address of <strong>192.168.1.254</strong>, which makes sense as 
                this IP is typically reserved for routers, and a MAC address of <strong>a8:11:fc:ca:69:a1</strong>.</p>
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
                <p>We can see this device is running a webserver, a DNS, and rpcbind. 
                This makes sense as the gateway configuration dashboard can be accessed through 
                a web browser when connected to the network. Additionally, the router needs to host a 
                DNS server to correctly route traffic, dhcps to assign IP addresses, and rpcbind in order 
                to correctly request services from other devices on the network.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device1;