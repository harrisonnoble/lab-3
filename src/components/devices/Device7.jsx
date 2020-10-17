import React from 'react';
import { Row, Col, Divider } from 'antd';
import Pie from '../charts/Pie';
import Tables from '../charts/Tables';

const Device7 = ({match}) => {

    const portData = [
        { key: 'TCP', data: 1 }
    ]

    const ports = [
        {
            key: '1',
            port: '2869',
            protocol: 'TCP',
            status: 'Open',
            service: 'icslap',
            version: 'N/A'
        } 
    ];

    return(
        <>
        <Row gutter={16}>
            <Col span={14}>
                <p>The last device I will look at is my Xbox One. The Xbox operating 
                system is Xbox One system software, which includes the Windows 10 core. 
                The associated IP address for the Xbox is <strong>192.168.1.91</strong> and 
                its MAC address is <strong>58:82:a8:60:ca:69</strong>.</p>
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
                <p>My Xbox also only contains one open port and is running icslap. 
                This service is used by Microsoft products which allows the device to 
                connect back to Microsoft and send error logs.</p>
            </Col>
        </Row>
        </>
    );
};

export default Device7;