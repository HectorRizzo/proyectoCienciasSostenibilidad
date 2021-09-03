import React from 'react'
import { Carousel,Row, Col, Card, Image, Typography, List } from 'antd';
import {StarTwoTone } from '@ant-design/icons';
import './inicio.css'
import huerto from '../../images/huerto.jpg'
import portada from '../../images/portada.jpeg'


export const Inicio = () => {

    const { Title, Paragraph } = Typography;

    let data=['Cierre del ciclo de la materia orgánica, ya que los desechos no serán destinados a vertederos ni llegarán a ser parte de la quema de basura.',
    'Contribuye a desterrar el sobreconsumo lineal de extraer, consumir y tirar.',
    'Reemplaza al uso de fertilizantes y plaguicidas químicos evitando la contaminación derivada de la petroagricultura.',
    'Ahorra agua de riego debido a la capacidad de retención del agua del compost.',
    'Aporta los nutrientes necesarios para el desarrollo de las plantas de forma natural.']


    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

      function onChange(a, b, c) {
        console.log(a, b, c);
      }


    return (
        <div>
            <Carousel afterChange={onChange}>
                <div>
                <h3 style={contentStyle}> 
                <Image
                    width={1200}
                    height={160}
                    src={portada}
                />
                </h3>
                </div>
                
            </Carousel>
            
            <Card className='card'>
                <Row>
                    <Col span={12}>
                        <Image
                            width={400}
                            src={huerto}
                        />
                    </Col>
                    <Col span={12}>
                        <Typography>
                            <Title style={{color:'#0050b3'}}> Hummus </Title>
                            <Paragraph>
                            El humus es la sustancia compuesta por ciertos productos orgánicos de naturaleza coloidal, 
                            que proviene de la descomposición de los restos orgánicos por organismos y microorganismos descomponedores (como hongos y bacterias). 
                            Se caracteriza por su color negruzco debido a la gran cantidad de carbono que contiene.
                            </Paragraph>
                        </Typography>
                    </Col>
                </Row>
            </Card>

            <div style={{margin:'2rem'}} className="beneficios-container">
            <Typography>
                            <Title style={{
                                color:'#092b00',
                                textAlign:'center'
                                }} className="beneficios"> BENEFICIOS </Title>
                            <List
                                size="large"
                                header={<div>El abono casero aporta muchos beneficios a nuestro planeta, por lo que tener uno en casa es la mejor opción.
                                    </div>}
                                bordered
                                dataSource={
                                    data
                                }
                                renderItem={item => 
                                    <List.Item>
                                        <List.Item.Meta
                                        avatar={<StarTwoTone twoToneColor="#a0d911" />}
                                        description={item}
                                        />
                                    </List.Item>
                                }
                                />
                            
                        </Typography>
            </div>
            
        </div>
    )
}
