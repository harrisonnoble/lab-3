import React from 'react';
import { Divider, Timeline } from 'antd';

const Roadmap = () => {

    return(
        <>
        <Divider orientation="left">Network Roadmap</Divider>
        <h3>Going forward, in order to get a better future state of security there are many 
        measures I can take. Given my network is just a simple home network, some of these 
        solutions can be seen as overkill.</h3>
        <div style={{backgroundColor: 'white', padding: '3%', borderRadius: '5px'}}>
        <Timeline>
            <Timeline.Item>
                <h3>Patch Devices</h3>
                <p>First off, I will make sure all my devices are 
                always up to date with the current software. Unpatched, old software is one of the 
                biggest reasons devices and/or networks get compromised and updates are often the 
                easiest way to enhance the security of internet devices.</p>
            </Timeline.Item>
            <Timeline.Item>
                <h3>Password Rotation</h3>
                <p>Secondly, I can start changing the Wi-Fi password more often. 
                Password rotation will ensure that any attacker on my network will 
                eventually be disconnected.</p>
            </Timeline.Item>
            <Timeline.Item>
                <h3>Add Firewall Rules</h3>
                <p>I can also add more detailed firewall rules to my network firewall 
                in order to limit the accepted traffic to a higher degree.</p>
            </Timeline.Item>
            <Timeline.Item>
                <h3>Manual IP Allocation and MAC Filtering</h3>
                <p> Some extreme measures I could take are manual IP allocation and MAC 
                address filtering. These security measures add a lot more overhead when connecting 
                new devices but add a great deal of security. Because I would have to go into the 
                gateway configuration panel and manually add the MAC address to the whitelist and 
                allocate the device an IP, no new device would be able to connect to my network 
                without my knowledge.</p>
            </Timeline.Item>
        </Timeline>
        </div>
        </>
    );
};

export default Roadmap;