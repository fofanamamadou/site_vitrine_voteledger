import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { CloudUploadOutlined, EyeOutlined, CalculatorOutlined, RadarChartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Features = () => {
    const features = [
        {
            title: "Soumission des Résultats",
            description: "Les agents électoraux soumettent les résultats de leur bureau sur un registre public dès la fin du dépouillement.",
        },
        {
            title: "Consultation Publique",
            description: "Permettre à tout citoyen de consulter le PV de n'importe quel bureau en temps réel.",
        },
        {
            title: "Calcul Automatique",
            description: "Calculer automatiquement le total national à mesure que les bureaux soumettent leurs résultats.",
        },
        {
            title: "Détection d'Anomalies",
            description: "Permettre de détecter immédiatement toute divergence entre les PV blockchain et les résultats officiels publiés.",
        }
    ];


    return (
        <section className="section-container" style={{ padding: '80px 5%' }}>
            <div className="section-title-wrapper">
                <Title className="section-title">Fonctionnalités Clés</Title>
                {/* <Paragraph className="section-subtitle">
                    VoteLedger combine la sécurité de la blockchain avec des interfaces simples pour tous les acteurs.
                </Paragraph> */}
            </div>

            <Row gutter={[32, 32]}>
                {features.map((feature, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Card
                                className="custom-card professional-feature-card"
                                style={{
                                    height: '100%',
                                    textAlign: 'left',
                                    padding: '20px',
                                    borderTop: '5px solid var(--primary-color)',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                bordered={false}
                            >
                                <Title level={4} style={{ marginBottom: '16px' }}>{feature.title}</Title>
                                <Paragraph style={{ color: '#666' }}>
                                    {feature.description}
                                </Paragraph>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Features;
