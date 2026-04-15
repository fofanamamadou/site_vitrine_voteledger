import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { LockOutlined, ExpandAltOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Blockchain = () => {
    return (
        <section className="white-bg" style={{ padding: '80px 0' }}>
            <div className="section-container" style={{ padding: '0 5%' }}>
                <div className="section-title-wrapper" style={{ marginBottom: '60px' }}>
                    <Title className="section-title">Comprendre la Blockchain simplement</Title>
                </div>

                <Row gutter={[40, 40]} align="middle">
                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                            <Card bordered={false} style={{ textAlign: 'center', background: '#F5F7FA', borderRadius: '16px' }}>
                                <LockOutlined style={{ fontSize: '48px', color: 'var(--secondary-color)', marginBottom: '20px' }} />
                                <Title level={4}>Horodatage Précis</Title>
                                <Paragraph style={{ color: '#666' }}>Chaque document est certifié avec la date et l'heure exactes de sa création.</Paragraph>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                            <Card bordered={false} style={{ textAlign: 'center', background: '#F5F7FA', borderRadius: '16px' }}>
                                <ExpandAltOutlined style={{ fontSize: '48px', color: 'var(--secondary-color)', marginBottom: '20px' }} />
                                <Title level={4}>Transparence Totale</Title>
                                <Paragraph style={{ color: '#666' }}>Toutes les opérations sont visibles par le public. Le code est open-source.</Paragraph>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={24} md={8}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                            <Card bordered={false} style={{ textAlign: 'center', background: '#F5F7FA', borderRadius: '16px' }}>
                                <SafetyCertificateOutlined style={{ fontSize: '48px', color: 'var(--secondary-color)', marginBottom: '20px' }} />
                                <Title level={4}>Inaltérable</Title>
                                <Paragraph style={{ color: '#666' }}>Une fois confirmé, aucun administrateur ni hacker ne peut modifier un chiffre.</Paragraph>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Blockchain;
