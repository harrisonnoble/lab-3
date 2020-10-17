import React from 'react';
import { Divider } from 'antd';

const Security = () => {

    return(
        <>
        <Divider orientation="left">Network Security</Divider>
        <p>In regard to the network security controls, my network uses WPA-2 along 
        with a strong password. This mechanism prevents unwanted outsiders from connecting 
        to the network by forcing them to enter the password before giving network access. 
        The strong password (letters, numbers and symbols) will slow down attackers trying 
        to brute force their way into the network. In addition to these security measures, 
        my gateway has a built-in firewall that provides packet filtering and access control 
        services. The default firewall rules for my network will drop all incoming ICMP Echo 
        requests on both the LAN and WAN side of my gateway. The firewall also has a reflexive 
        ACL which will drop incoming IPv6 traffic unless the traffic is a result of returning 
        outgoing packets. These security controls are very common for home networks, as they are 
        usually easy to use and set up. Another feature my gateway has is Wi-Fi Protected Setup 
        (WPS) which is a convenient way to connect WPS supported devices to the network. WPS 
        allows users to connect their supported devices to Wi-Fi by pressing a button on the 
        gateway. This setup securely creates a connection between the gateway and device without 
        needing to enter the network password. My network also has the guest network disabled; 
        therefore, I have one less network to worry about and secure.</p>
        </>
    );
};

export default Security;