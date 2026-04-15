import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Users = () => {
    const users = [
        { role: "Agents Électoraux", desc: "Digitalisent les Procès-Verbaux(PV)", color: "var(--primary-color)" },
        { role: "L'AIGE", desc: "Supervise et valide le processus", color: "var(--primary-color)" },
        { role: "Citoyens", desc: "Vérifient les résultats de leur bureau de vote", color: "var(--secondary-color)" },
        { role: "Journalistes", desc: "Informent sur les résultats", color: "var(--secondary-color)" },
    ];

    return (
        <section className="light-bg" style={{ padding: '80px 0' }}>
            <div className="section-container" style={{ padding: '0 5%' }}>
                <div className="section-title-wrapper">
                    <Title className="section-title">Une plateforme pour tous</Title>
                </div>

                <Row gutter={[16, 16]} justify="center">
                    {users.map((user, index) => (
                        <Col xs={24} sm={12} md={8} lg={4} key={index} style={{ display: 'flex' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ width: '100%' }}
                            >
                                <Card
                                    bordered={false}
                                    style={{
                                        textAlign: 'center', height: '100%', borderRadius: '12px',
                                        borderTop: `4px solid ${user.color}`
                                    }}
                                >
                                    <Title level={5} style={{ color: user.color, marginBottom: '12px' }}>{user.role}</Title>
                                    <Paragraph style={{ color: '#666', fontSize: '13px', margin: 0 }}>{user.desc}</Paragraph>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Users;
