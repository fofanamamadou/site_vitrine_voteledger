import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
    return (
        <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '72px' }}>
            <Row className="section-container" style={{ width: '100%', padding: '0 5%' }} align="middle" gutter={[48, 48]}>

                <Col xs={24} lg={12}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <Title className="hero-title">
                            Un vote clair, des résultats sûrs
                        </Title>
                        <Paragraph className="hero-subtitle">
                            Chaque vote compte, la technologie le prouve. Nous utilisons la blockchain pour rendre les résultats électoraux infalsifiables et garantir une paix durable par la transparence.
                        </Paragraph>
                        <Space className="hero-buttons">
                            <Button type="primary" size="large" href="#problem" style={{ display: 'flex', alignItems: 'center' }}>
                                Découvrir <ArrowRightOutlined />
                            </Button>
                            {/* <Button size="large" href="#demo" style={{ display: 'flex', alignItems: 'center' }}>
                                <PlayCircleOutlined /> Voir la démo
                            </Button> */}
                        </Space>
                    </motion.div>
                </Col>

                <Col xs={24} lg={12} className="hide-on-mobile">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Abstract Blockchain Nodes Animation */}
                        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                            {/* SVG Connection Lines */}
                            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                                <motion.path
                                    d="M 80 200 Q 200 80 300 240 T 450 160"
                                    fill="transparent"
                                    stroke="var(--secondary-color)"
                                    strokeWidth="2"
                                    strokeDasharray="6,6"
                                    animate={{ strokeDashoffset: [0, -100] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M 120 300 Q 250 350 350 200"
                                    fill="transparent"
                                    stroke="var(--primary-color)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4,4"
                                    animate={{ strokeDashoffset: [100, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Floating Nodes */}
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -15, 0],
                                        boxShadow: [
                                            "0px 10px 30px rgba(0,0,0,0.05)",
                                            `0px 20px 40px ${i % 2 === 0 ? 'var(--secondary-bg-light)' : 'rgba(11,60,93,0.1)'}`,
                                            "0px 10px 30px rgba(0,0,0,0.05)"
                                        ]
                                    }}
                                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                                    style={{
                                        position: 'absolute',
                                        width: i % 2 === 0 ? 100 : 80,
                                        height: i % 2 === 0 ? 100 : 80,
                                        borderRadius: '24px',
                                        background: i === 0 ? 'var(--primary-color)' : i === 1 ? 'var(--secondary-color)' : 'var(--white)',
                                        border: i >= 2 ? '2px solid var(--secondary-color)' : 'none',
                                        left: `${15 + i * 20}%`,
                                        top: `${(i % 2 === 0 ? 20 : 50) + (i * 5)}%`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 2
                                    }}
                                >
                                    <div style={{
                                        width: '24px', height: '24px',
                                        background: i < 2 ? 'var(--white)' : 'var(--primary-color)',
                                        borderRadius: '50%'
                                    }} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </section>
    );
};

export default Hero;
