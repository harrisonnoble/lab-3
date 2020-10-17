import { Card, Col, Divider, Row } from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';

const Overview = (props) => {

    return(
        <>
            <Divider orientation="left">Network Overview</Divider>
            <p>My network uses the subnet of <strong>192.168.1.X</strong> with a subnet mask of 
            <strong>255.255.255.0</strong>. Given this we can see that the IP address range on my network is 
            <strong>192.168.1.0 – 192.168.1.255</strong>. One thing to note is the DHCP server running on 
            the router is configured to assign device IPs in the range of <strong>192.168.1.64 – 192.168.1.253</strong>, 
            so any devices connected to the router will be in this range. The router itself is 
            given the reserved IP of <strong>192.168.1.254</strong> which makes sense as usually high or low 
            IP ranges (0 and 1 or 254 and 255) are reserved for devices that handle the actual 
            networking on the network.</p>
            <br/>
            <Divider orientation="left">Device Summary</Divider>
            <p>Below is a summary of the devices on my network. 
            Click on the "see more" link within each device 
            to view in depth information about the device!</p>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card key='1' size='small' title="Arris Gateway" extra={<Link onClick={() => props.click({key: '1'})} to="/devices/1">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.254</p>
                        <p>MAC: a8:11:fc:ca:69:a1</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card size='small' title="Wi-Fi Extender" extra={<Link onClick={() => props.click({key: '2'})} to="/devices/2">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.248</p>
                        <p>MAC: f4:17:b8:0c:33:35</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card size='small' title="My Laptop" extra={<Link onClick={() => props.click({key: '3'})} to="/devices/3">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.220</p>
                        <p>MAC: 8c:85:90:cf:9a:e4</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card size='small' title="My iPhone" extra={<Link onClick={() => props.click({key: '4'})} to="/devices/4">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.163</p>
                        <p>MAC: 16:c1:29:e6:e3:02</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card size='small' title="Roommate's Laptop" extra={<Link onClick={() => props.click({key: '5'})} to="/devices/5">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.71</p>
                        <p>MAC: 8c:85:90:a9:04:30</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card size='small' title="Roku TV" extra={<Link onClick={() => props.click({key: '6'})} to="/devices/6">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.70</p>
                        <p>MAC: d8:13:99:57:ef:8f</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8} />
                <Col span={8}>
                    <Card size='small' title="Xbox One" extra={<Link onClick={() => props.click({key: '7'})} to="/devices/7">See More</Link>} style={{ width: '100%' }}>
                        <p>IP: 192.168.1.91</p>
                        <p>MAC: 58:82:a8:60:ca:69</p>
                    </Card>
                </Col>
                <Col span={8} />
            </Row>
        </>
    );
}

export default Overview;