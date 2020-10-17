import React from 'react';
import { Divider } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Strengths = () => {

    function callback(key) {
        console.log(key);
    }

    return(
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Strengths" key="1">
                <Divider orientation="left">Network Strengths</Divider>
                    <p> Looking back to my network security controls, I would say my network is 
                    relatively secure compared to other home networks. Like I stated earlier, my 
                    network uses WPA-2 which has AES based encryption. Using these security measures 
                    with a strong password certainly would deter potential attackers who are looking to 
                    quickly get into poorly password protected networks. Another security strength I 
                    noted on earlier is my network firewall. Although I have not configured the firewall 
                    at all, the default rules do a good job in preventing potential attackers from pinging 
                    the network by dropping ICMP echo requests. Another strength of my network is that I am 
                    not running any servers or devices that need to face the public internet. Therefore, I 
                    do not have any forwarded ports on my gateway.</p>
                </TabPane>
            <TabPane tab="Weaknesses" key="2">
                <Divider orientation="left">Network Weaknesses</Divider>
                    <p>One weakness of my network is that I do not have any DoS protection. Although 
                    my home network isn’t very likely to experience a DoS attack, it is still a 
                    possibility to take into consideration. Because my network has no protections, 
                    even a small-scale DoS would probably be able to reduce or wipe out the network 
                    availability. Another weakness to note is the fact that Wi-Fi networks can easily 
                    be sniffed by people near or around your house. This means if you had a malicious 
                    neighbor, they could capture your network traffic. If this malicious neighbor 
                    captured the handshake done by devices and Wi-Fi routers, they could eventually 
                    crack your password given they put in the time and effort.</p>
            </TabPane>
        </Tabs>
    );
};

export default Strengths;