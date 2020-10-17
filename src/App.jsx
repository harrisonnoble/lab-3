import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Overview from './components/Overview';
import Security from './components/Security';
import Strengths from './components/Strengths';
import Roadmap from './components/Roadmap';
import Vulnerabilities from './components/Vulnerabilities';
import Devices from './components/devices/Devices';
import Diagram from './components/Diagram';
import './App.less';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function App() {
  let [cur, setCurrent] = useState('overview');
  let url = window.location.pathname.split('/');
  cur = url[1] !== '' ? url[1] : 'overview';
  if(url[1] === 'devices'){
    cur = url[2];
  } 

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh'}}>
        <Layout>
          <Header className="header">
            <h1 style={{color: 'white'}}>Data & Network Security Workbook</h1>
          </Header>
          <Layout>
            <Sider>
              <Menu className='app-menu' onClick={handleClick} selectedKeys={[cur]} theme={'dark'}>
                <Menu.Item key='overview' title='Network Overview'>
                  Network Overview
                  <Link to='/'/>
                </Menu.Item>
                <Menu.Item key='diagram' title='Network Diagram'>
                  Network Diagram
                  <Link to='/diagram'/>
                </Menu.Item>
                <SubMenu key='devices' title='Network Devices'>
                  <Menu.Item key='1'>Arris Gateway<Link to='/devices/1'/></Menu.Item>
                  <Menu.Item key='2'>WiFi Extender<Link to='/devices/2'/></Menu.Item>
                  <Menu.Item key='3'>My Laptop<Link to='/devices/3'/></Menu.Item>
                  <Menu.Item key='4'>My iPhone<Link to='/devices/4'/></Menu.Item>
                  <Menu.Item key='5'>Roommate's Laptop<Link to='/devices/5'/></Menu.Item>
                  <Menu.Item key='6'>Roku TV<Link to='/devices/6'/></Menu.Item>
                  <Menu.Item key='7'>Xbox One<Link to='/devices/7'/></Menu.Item>
                </SubMenu>
                <Menu.Item key='security' title='Network Security'>
                  Network Security
                  <Link to='/security'/>
                </Menu.Item>
                <Menu.Item id='nav-extend' key='strengths-weaknesses' title='Network Strengths'>
                  Network Strengths & Weaknesses
                  <Link to='/strengths-weaknesses'/>
                </Menu.Item>
                <Menu.Item key='roadmap' title='Network Roadmap'>
                  Network Roadmap
                  <Link to='/roadmap'/>
                </Menu.Item>
                <Menu.Item key='vulnerabilities' title='Network Vulnerabilities'>
                  Network Vulnerabilities
                  <Link to='/vulnerabilities'/>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{padding: '50px 50px'}}>
              <Route exact path="/" component={() => <Overview click={handleClick} />}/>
              <Route path='/diagram' component={Diagram} />
              <Route path="/devices/:num" component={Devices} />
              <Route path='/security' component={Security} />
              <Route path='/strengths-weaknesses' component={Strengths} />
              <Route path='/roadmap' component={Roadmap} />
              <Route path='/vulnerabilities' component={Vulnerabilities} />
            </Content>
          </Layout>
          <Footer style={{textAlign: 'center', color: 'white', backgroundColor:'rgb(3,20,40)'}}>Created by Harrison Noble</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
