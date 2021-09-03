import React from 'react'
import { Timeline, Card,Row,Col,Image } from "antd";
import {WarningFilled } from '@ant-design/icons';
import desechos from './desechos.jpg'

export const Recomendaciones = () => {
    return (
        <div>
            <Card style={{margin:"30px"}} type="inner" title="DESECHOS ORGÁNICOS RECOMENDADOS">
                <Row>
                    <Col span={9}>
                        <Image
                                width={350}
                                src={desechos}
                            />
                    </Col>
                    <Col span={15}>
                    <p style={{fontSize:"16px"}}>
                    Entre los mejores desechos para tu compost se encuentran los restos de fruta y verdura, flores, plantas, cáscaras de huevo, restos de poda, tapones de corcho, papel de cocina o servilletas, cenizas, serrín de madera, aceite y vinagre, posos de café, restos de infusiones, estiércol y paja.

                    </p>
                    </Col>
                </Row>
            </Card>

            <Card style={{margin:"30px", marginTop:"4rem"}} title="Sigue estos maravillosos consejos que te permitirán generar un excelente humus mediante un correcto compostaje.">
                <Timeline>
                    <Timeline.Item color="green">El suelo tiene que ser rico en nutrientes, tener un buen drenaje, gran cantidad de materia orgánica y encontrarse bien oxigenado y húmedo.</Timeline.Item>
                    <Timeline.Item color="green">Cultivar en macetas o mesas de cultivo provoca un mayor agotamiento de la tierra, es por ello que se recomienda utilizar abono orgánico vegetal (compost, humus de gusanos) o abono de estiércol de ganado (evitar fertilizantes químicos).</Timeline.Item>
                    <Timeline.Item color="green">Se recomienda aportar cáscaras de huevo al compost ya que es bueno para el calcio, aunque su descomposición sea un poco más lenta.</Timeline.Item>
                    <Timeline.Item color="green">El tiempo de espera recomendado para removerlo es de una semana, de esta forma lo aireamos y agregamos un poco de agua para que haya humedad y baje la temperatura, así evitamos malos olores.</Timeline.Item>
                    <Timeline.Item color="green">Finalmente, tras un par de semanas más tendrás tu humus listo para poder cultivar plantas, será rico en nutrientes y totalmente natural.</Timeline.Item>
                </Timeline>
            </Card>

            <Row>
                    <Col  style={{ textAlign:"center", alignSelf: 'center'}} span={6}>
                        <WarningFilled style={{color:"red",fontSize:"170px"}}/>
                    </Col>
                
                <Col span={12}>
                    <Card style={{margin:"30px"}} type="inner" title="IMPORTANTE:">
                    Los desechos que NO debemos aportar en el compostador son los restos de pescado, carne y huesos, estiércol de animales domésticos, cenizas, revistas ilustradas, pañales, serrín de maderas tratadas y otros materiales no orgánicos.

                    </Card>
                
                </Col>
                </Row>
            
            
        </div>
    )
}
