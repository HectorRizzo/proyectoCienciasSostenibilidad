import React, {useState} from 'react'
import { Card, Row,Col, Tabs } from "antd";
import guineo from "./guineo.jpeg";
import huevo from "./huevo.jpeg";
import manzana3 from "./manzana3.jpeg";
import result1 from "./result1.jpeg"
import tomate from "./tomate.jpeg"
import manzanaVideo  from "./manzanaVideo.mp4";
import resultVideo from "./result1.mp4"
import mandarina from "./mandarina.jpeg"
import manzana1 from "./manzana1.jpeg"
import manzana2 from "./manzana2.jpeg";

export const Resultado = () => {
    const {Meta} = Card
    const { TabPane } = Tabs;
    return (
        <div>
            <h1 style={{marginLeft:"5rem", fontSize:"30px"}}>
                RESULTADOS
            </h1>

            

            <Card title="Galería" style={{margin:"5rem"}}>
                <Row>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" height="300" src={guineo}/>}
                    >
                        <Meta title="Cáscara de guineo"/>
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" height="300" src={huevo}/>}
                    >
                        <Meta title="Cáscara de huevo"/>
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" height="300" src={manzana3}/>}
                    >
                        <Meta title="Cáscara de manzana"/>
                    </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" height="300" src={result1}/>}
                        >
                            <Meta title="Cascara de sandía"/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" height="300" src={tomate}/>}
                        >
                            <Meta title="Cáscara de tomate"/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" height="300" src={mandarina}/>}
                        >
                            <Meta title="Cáscara de mandarina"/>
                        </Card>
                    </Col>
                </Row>
            </Card>

            <Card title="Evolución de la descomposición del desecho" style={{margin:"5rem"}}>
            <Tabs tabPosition="left">
                <TabPane tab="Inicio" key="1">
                    <Card
                        hoverable
                        style={{ width: 500, marginLeft:"5rem" }}
                        cover={<img alt="example" height="300" src={manzana1}/>}
                    >
                    </Card>
                </TabPane>
                <TabPane tab="1 semana" key="2">
                    <Card
                        hoverable
                        style={{ width: 500, marginLeft:"5rem"  }}
                        cover={<img alt="example" height="300" src={manzana3}/>}
                    >
                    </Card>
                </TabPane>
                <TabPane tab="3 semanas" key="3">
                    <Card
                        hoverable
                        style={{ width: 500, marginLeft:"5rem"  }}
                        cover={<img alt="example" height="300" src={manzana2}/>}
                    >
                    </Card>
                </TabPane>
                </Tabs>
            </Card>


            <Card title="Videos" style={{margin:"5rem"}}>
                <Row>
                    <Col span={12}>
                        <video src={manzanaVideo} width="480" height="300" controls autoplay muted loop>
                            
                        </video>
                    </Col>
                    <Col span={12}>
                        <video src={resultVideo} width="480" height="300" controls autoplay muted loop>
                            
                        </video>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
