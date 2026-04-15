import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Card, List, Tag, Spin, Button, Statistic } from 'antd';
import { CheckCircleOutlined, SyncOutlined, LinkOutlined, ReloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const Demo = () => {
    const [loading, setLoading] = useState(false);
    const [bureaux, setBureaux] = useState([
        { id: 'BV-BAM-001', location: 'Bamako, Commune IV', status: 'soumis', time: '18:42:15', hash: '0x8f4d...3a2b' },
        { id: 'BV-SEG-045', location: 'Ségou, Centre', status: 'soumis', time: '19:15:02', hash: '0x9a2c...1f4e' },
        { id: 'BV-MOP-012', location: 'Mopti, Sévaré', status: 'en attente', time: '-', hash: '-' },
        { id: 'BV-KAY-088', location: 'Kayes, Kita', status: 'en attente', time: '-', hash: '-' },
    ]);

    const simulateIncomingResult = () => {
        setLoading(true);
        setTimeout(() => {
            const newBureaux = [...bureaux];
            const pendingIndex = newBureaux.findIndex(b => b.status === 'en attente');

            if (pendingIndex !== -1) {
                newBureaux[pendingIndex] = {
                    ...newBureaux[pendingIndex],
                    status: 'soumis',
                    time: new Date().toLocaleTimeString(),
                    hash: '0x' + Math.random().toString(16).substr(2, 8) + '...' + Math.random().toString(16).substr(2, 4)
                };
                setBureaux(newBureaux);
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <section className="light-bg" style={{ padding: '80px 0' }}>
            <div className="section-container" style={{ padding: '0 5%' }}>
                <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
                    <Typography.Text style={{ color: 'var(--secondary-color)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Simulation</Typography.Text>
                    <Title className="section-title">La transparence en action</Title>
                    <Paragraph className="section-subtitle">
                        Aperçu de la plateforme de consultation publique où chaque citoyen peut vérifier les PV arrivant en temps réel sur la blockchain.
                    </Paragraph>
                </div>

                <Row justify="center">
                    <Col xs={24} lg={16}>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <Card
                                title={
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>
                                            <LinkOutlined style={{ marginRight: '8px', color: 'var(--secondary-color)' }} />
                                            Explorateur VoteLedger
                                        </span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            icon={<ReloadOutlined spin={loading} />}
                                            onClick={simulateIncomingResult}
                                            disabled={loading || !bureaux.some(b => b.status === 'en attente')}
                                        />
                                    </div>
                                }
                                bordered={false}
                                style={{ borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                            >
                                <div style={{ marginBottom: '20px', padding: '16px', background: '#f5f7fa', borderRadius: '8px' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Statistic title="PV Reçus" value={bureaux.filter(b => b.status === 'soumis').length} suffix={`/ ${bureaux.length}`} valueStyle={{ color: 'var(--secondary-color)' }} />
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Réseau" value="Actif" valueStyle={{ color: 'var(--success-color)' }} />
                                        </Col>
                                        <Col span={8}>
                                            <Statistic title="Dernier Bloc" value="#894520" />
                                        </Col>
                                    </Row>
                                </div>

                                <List
                                    dataSource={bureaux}
                                    renderItem={(item) => (
                                        <List.Item
                                            style={{
                                                borderBottom: '1px solid #f0f0f0',
                                                padding: '16px',
                                                background: item.status === 'soumis' ? 'white' : '#fafafa',
                                                transition: 'all 0.3s'
                                            }}
                                        >
                                            <List.Item.Meta
                                                title={<strong>{item.id} - {item.location}</strong>}
                                                description={
                                                    <div style={{ marginTop: '8px' }}>
                                                        <Text type="secondary" style={{ fontSize: '13px', fontFamily: 'monospace' }}>
                                                            TxHash: {item.hash === '-' ? <i>Non ancré</i> : item.hash}
                                                        </Text>
                                                    </div>
                                                }
                                            />
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ marginBottom: '8px' }}>
                                                    {item.status === 'soumis' ? (
                                                        <Tag color="success" icon={<CheckCircleOutlined />}>Ancré et Validé</Tag>
                                                    ) : (
                                                        <Tag color="warning" icon={<SyncOutlined spin={loading} />}>En attente</Tag>
                                                    )}
                                                </div>
                                                <Text type="secondary" style={{ fontSize: '12px' }}>{item.time}</Text>
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Demo;
