import React from 'react';
import { Divider } from 'antd';
import Device1 from './Device1';
import Device2 from './Device2';
import Device3 from './Device3';
import Device4 from './Device4';
import Device5 from './Device5';
import Device6 from './Device6';
import Device7 from './Device7';

const Devices = ({match}) => {

    const device = match.params.num;
    const mapping = {
        1: ["Arris gateway", <Device1/>],
        2: ["WiFi extender", <Device2/>],
        3: ["My laptop", <Device3/>],
        4: ["My iPhone", <Device4/>],
        5: ["Roommate's laptop", <Device5/>],
        6: ["Roku TV", <Device6/>],
        7: ["Xbox One", <Device7/>]
    }

    return(
        <>
            <Divider orientation="left">{mapping[device][0]}</Divider>
            { mapping[device][1] }
        </>
    );
    
}

export default Devices;