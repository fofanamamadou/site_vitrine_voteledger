import React from 'react';
import { Row, Col, Typography, Card, Statistic } from 'antd';
import { WarningOutlined, FileExcelOutlined, ClockCircleOutlined, DisconnectOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Problem = () => {
    const dataKeys = [
        {
            stat: "28 %",
            label: "Confiance en 2022",
            description: "Seulement 28 % des Maliens font confiance aux résultats officiels (Afrobaromètre, 2022).",
            color: 'var(--primary-color)'
        },
        {
            stat: "+400",
            label: "Bureaux contestés en 2018",
            description: "Plus de 400 bureaux de vote contestés lors de la présidentielle de 2018.",
            color: 'var(--primary-color)'
        },
        {
            stat: "5-9j",
            label: "Délais d'attente",
            description: "Les résultats provisoires prennent jusqu'à 9 jours pour être centralisés.",
            color: 'var(--secondary-color)'
        }
    ];

    return (
        <section className="section-container" style={{ background: '#fff', borderRadius: '24px', padding: '80px 5%', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ marginBottom: '48px' }}
            >
                <Title className="section-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                    Pourquoi le système actuel échoue
                </Title>
            </motion.div>

            <Row gutter={[24, 24]} justify="center">
                {dataKeys.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="interactive-stat-card" style={{
                                background: 'var(--bg-light)',
                                padding: '32px 20px',
                                borderRadius: '20px',
                                height: '180px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--border-light)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="card-front">
                                    <Title level={2} style={{ margin: 0, color: item.color, fontWeight: '800', fontSize: '2.5rem' }}>
                                        {item.stat}
                                    </Title>
                                    <Paragraph style={{ margin: '8px 0 0', fontWeight: '600', color: 'var(--text-main)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>
                                        {item.label}
                                    </Paragraph>
                                </div>
                                <div className="card-hover-info" style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'var(--primary-color)',
                                    padding: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    color: '#fff',
                                    fontSize: '13px',
                                    lineHeight: '1.5',
                                    fontWeight: '500'
                                }}>
                                    {item.description}
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>


            <style>{`
                .interactive-stat-card:hover .card-front {
                    opacity: 0;
                }
                .interactive-stat-card:hover .card-hover-info {
                    opacity: 1 !important;
                }
                .interactive-stat-card:active .card-hover-info {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};



export default Problem;
