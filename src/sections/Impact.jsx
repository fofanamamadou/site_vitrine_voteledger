import React from 'react';
import { Row, Col, Typography, Statistic, Tag } from 'antd';
import { motion } from 'framer-motion';
import { AreaChartOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Impact = () => {
    return (
        <section className="white-bg" style={{ padding: '80px 0' }}>
            <div className="section-container" style={{ padding: '0 5%' }}>
                <div className="section-title-wrapper">
                    <Title className="section-title">Impact attendu</Title>
                    {/* <Paragraph className="section-subtitle">
                        VoteLedger ne résout pas seulement un problème technique, la plateforme vise à consolider la paix sociale post-électorale.
                    </Paragraph> */}
                </div>

                <Row gutter={[32, 32]} justify="center">
                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                            <div className="stat-card" style={{ borderTop: '4px solid var(--secondary-color)' }}>
                                {/* <ShieldCheckOutlined style={{ fontSize: '32px', color: 'var(--secondary-color)', marginBottom: '16px' }} /> */}
                                <Title level={4}>Confiance Accrue</Title>
                                {/* <div style={{ margin: '16px 0' }}>
                                    <Tag color="cyan">Restaurer la légitimité</Tag>
                                </div> */}
                                <Paragraph style={{ color: '#666', fontSize: '14px' }}>
                                    Des résultats publiés instantanément et impossibles à modifier, garantissant la légitimité du vote.
                                </Paragraph>
                            </div>
                        </motion.div>
                    </Col>

                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                            <div className="stat-card" style={{ borderTop: '4px solid var(--primary-color)' }}>
                                {/* <AreaChartOutlined style={{ fontSize: '32px', color: 'var(--primary-color)', marginBottom: '16px' }} /> */}
                                <Title level={4}>Réduction de la Fraude</Title>
                                {/* <div style={{ margin: '16px 0' }}>
                                    <Tag color="blue">Zéro altération</Tag>
                                </div> */}
                                <Paragraph style={{ color: '#666', fontSize: '14px' }}>
                                    Toute tentative de modifier les résultats des PV pendant leur transport est immédiatement détectée.
                                </Paragraph>
                            </div>
                        </motion.div>
                    </Col>

                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                            <div className="stat-card" style={{ borderTop: '4px solid var(--secondary-color)' }}>
                                {/* <TeamOutlined style={{ fontSize: '32px', color: 'var(--secondary-color)', marginBottom: '16px' }} /> */}
                                <Title level={4}>Stabilité Sociale</Title>
                                {/* <div style={{ margin: '16px 0' }}>
                                    <Tag color="green">Maintien de la paix</Tag>
                                </div> */}
                                <Paragraph style={{ color: '#666', fontSize: '14px' }}>
                                    La transparence des résultats réduit les contestations et assure une transition calme pour la stabilité du pays.
                                </Paragraph>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Impact;
