import React from 'react';
import { Divider, Row, Col, Popover } from 'antd';
import { LinearGauge, LinearGaugeSeries } from 'reaviz';

const Vulnerabilities = () => {

    const content = (
        <div>
          <a target='_blank' href="https://www.nomotion.net/blog/sharknatto/">Click here!</a>
        </div>
    );

    return(
        <>
        <Divider orientation="left">Network Vulnerabilities</Divider>
        <Row gutter={[16, 16]} align='middle'>
            <Col span={18}>
                <p>Like any other piece of software, my gateway has a list of known vulnerabilities 
                and design flaws. To start, my gateway is an AT&T Arris BGW210-700. One of the 
                biggest design flaws that is still currently apart of the router is the fact that 
                anyone who is on the network can view all other device IPs, MAC addresses, and other 
                device information without logging into the gateway administrator panel. All a user has 
                to do is simply navigate to the gateway IP in their web browser and they will be 
                presented with the connected devices information, no login needed. Additionally, 
                users can also view information about the gateway itself without a password. I should 
                note that changing any setting on the gateway administrator panel will require the 
                password, however, this type of information should not be visible to everyone connected 
                to the network. With this information, an attacker could easily view software versions 
                and the entire layout of the network simply from the gateway homepage. For a home 
                network, this is of less concern because often you know who is on your network and it 
                is small enough to keep under control. However, for a business, this would be 
                unacceptable as these networks are larger and more difficult to manage. If an attacker 
                were to get into a business network running an AT&T Arris BGW210-700, they would be 
                able to see the entire business infrastructure extremely easily. Unfortunately, AT&T 
                refuses to change this “software feature” because it makes network troubleshooting 
                easier.</p>
            </Col>
            <Col span={6}>
                <LinearGauge
                height={50}
                data={{ key: 'Vulnerability Severity', data: 70 }}
                series={<LinearGaugeSeries colorScheme={'#f24e07'} layout='vertical' />}
                />
                <br/>
                <h3 style={{paddingLeft:'5%'}}>Severity Score</h3>
            </Col>
        </Row>
        <Row gutter={[16, 16]} align='middle'>
            <Col span={18}>
                <p>My gateway has also had major software vulnerabilities in 
                previous firmware versions. In 2017, a security firm, Nomotion, found security 
                flaws which they called <Popover content={content} title="Vulnerability Link"><strong>“SharknAT&To.”</strong></Popover> This attack was based on the fact that there 
                was a secret firewall bypass on port 49152. All an attacker would have to do to 
                gain access to the network is preface the device’s known MAC address with a 
                three-byte long code, which an attacker can brute force in the matter of minutes. 
                This vulnerability has since been patched by Arris. Another major security 
                vulnerability that my gateway has had in the past was firmware version 1.0.29 which 
                allowed users to gain root access to the gateway. Surprisingly, the gateway doesn’t 
                even allow the network admin root access, so this vulnerability is extremely severe. 
                The attack is carried out by sending a POST request to the caseserver service running 
                on the gateway. The POST request contains a piped ( | ) command that would be injected 
                into the code execution. This vulnerability allows for command execution at the root 
                level. However, like the SharknAT&To vulnerability, Arris has provided a patch to this 
                flaw.</p>
            </Col>
            <Col span={6}>
                <LinearGauge
                height={50}
                data={{ key: 'Vulnerability Severity', data: 95 }}
                series={<LinearGaugeSeries colorScheme={'#b80000'} layout='vertical' />}
                />
                <br/>
                <h3 style={{paddingLeft:'5%'}}>Severity Score</h3>
            </Col>
        </Row>
        </>
    );
};

export default Vulnerabilities;