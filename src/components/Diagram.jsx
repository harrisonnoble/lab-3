import React from 'react';
import './diagram.less'
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

const Diagram = (props) => {
    var engine = createEngine();

    var model = new DiagramModel();

    var gateway = new DefaultNodeModel('Wireless Gateway', 'rgb(0,192,255)');
    gateway.addInPort('MAC: a8:11:fc:ca:69:a1');
    gateway.addInPort('Private IP: 192.168.1.254')
    gateway.setPosition(50, 370);
    var gateway_out = gateway.addOutPort('');

    var extender = new DefaultNodeModel('WiFi Extender', 'rgb(0,192,255)');
    extender.addInPort('MAC: f4:17:b8:0c:33:35');
    extender.addInPort('Private IP: 192.168.1.248');
    extender.setPosition(50, 50);
    let extender_in = extender.addInPort('')
    let extender_gateway = gateway_out.link(extender_in);
    model.addLink(extender_gateway);

    var mylaptop = new DefaultNodeModel('My Laptop', 'rgb(245, 66, 66)');
    mylaptop.addOutPort('MAC: 8c:85:90:cf:9a:e4');
    mylaptop.addOutPort('Private IP: 192.168.1.220');
    mylaptop.setPosition(500, 100);
    var mylaptop_in = mylaptop.addInPort('');
    let gateway_mylaptop = gateway_out.link(mylaptop_in)
    model.addLink(gateway_mylaptop)

    var myphone = new DefaultNodeModel('My iPhone', 'rgb(245, 66, 66)');
    myphone.addOutPort('MAC: 16:c1:29:e6:e3:02');
    myphone.addOutPort('Private IP: 192.168.1.163');
    myphone.setPosition(500, 200);
    var myphone_in = myphone.addInPort('');
    let gateway_myphone = gateway_out.link(myphone_in)
    model.addLink(gateway_myphone)

    var laptop = new DefaultNodeModel('Roommate\'s Laptop', 'rgb(245, 66, 66)');
    laptop.addOutPort('MAC: 8c:85:90:a9:04:30');
    laptop.addOutPort('Private IP: 192.168.1.71');
    laptop.setPosition(500, 300);
    var laptop_in = laptop.addInPort('');
    let gateway_laptop = gateway_out.link(laptop_in)
    model.addLink(gateway_laptop)

    var tv = new DefaultNodeModel('Roku TV', 'rgb(245, 66, 66)');
    tv.addOutPort('MAC: d8:13:99:57:ef:8f');
    tv.addOutPort('Private IP: 192.168.1.70');
    tv.setPosition(500, 400);
    var tv_in = tv.addInPort('');
    let gateway_tv = gateway_out.link(tv_in)
    model.addLink(gateway_tv)

    var xbox = new DefaultNodeModel('Xbox One', 'rgb(245, 66, 66)');
    xbox.addOutPort('MAC: 58:82:a8:60:ca:69');
    xbox.addOutPort('Private IP: 192.168.1.91');
    xbox.setPosition(500, 500);
    var xbox_in = xbox.addInPort('');
    let gateway_xbox = gateway_out.link(xbox_in)
    model.addLink(gateway_xbox)
    
    model.addAll(gateway, extender, mylaptop, myphone, laptop, tv, xbox);

    engine.setModel(model);

    return(
        <div className="app__diagram-back">
            <CanvasWidget className="app__diagram" engine={engine} />
        </div>
    );
}

export default Diagram;