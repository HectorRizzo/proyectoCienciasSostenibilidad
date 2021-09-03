import './App.css';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import { Menu, Layout, Image } from "antd";
import { green } from '@ant-design/colors';
import  {Inicio} from "../src/pages/inicio/inicio.js";
import {Recomendaciones} from "../src/pages/recomendaciones/recomendaciones.js"
import { Resultado } from "../src/pages/resultado/resultado.js";
import {Contacto} from "../src/pages/contacto/contacto.js"
import biobox from "./biobox.png"
function App() {
  const {Header, Content, Footer} = Layout;
  return (
  <BrowserRouter>
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#092b00' }}>
      <div className="logo">
      
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item  key="1">
          <Link to="/Inicio">
            <span className="nav-text">Inicio</span>
          </Link>
        </Menu.Item>
        <Menu.Item  key="2">
          <Link to="/Recomendaciones">
            <span className="nav-text">Recomendaciones</span>
          </Link>
        </Menu.Item>
        <Menu.Item  key="3">
          <Link to="/Resultados">
            <span className="nav-text">Resultados</span>
          </Link>
        </Menu.Item>
        
        <Menu.Item key="4">
          <Link to="/Contacto">
            <span className="nav-text">Contacto</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>

    <Content className="site-layout" style={{ marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="container">
        <Switch>
          <Route path='/' exact>
            <Inicio />
          </Route>
          <Route path='/Inicio' >
            <Inicio />
          </Route>
          <Route path='/Recomendaciones' >
            <Recomendaciones />
          </Route>
          <Route path='/Resultados' >
            <Resultado />
          </Route>
          <Route path='/Contacto' >
            <Contacto />
          </Route>
        </Switch>
      
      </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center',color:"#fff" ,background:"#001100" }}>
      <p>BIOBOX ©2021 Ciencias de la sostenibilidad  - Guayas, Guayaquil, Ecuador</p>
    </Footer>

    </Layout>
  </BrowserRouter>

   
    
  );
}

export default App;
