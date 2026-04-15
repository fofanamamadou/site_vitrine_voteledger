import React from 'react';
import { Row, Col, Typography, Card, Statistic } from 'antd';
import { WarningOutlined, FileExcelOutlined, ClockCircleOutlined, DisconnectOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Problem = () => {
    const problems = [
        {
            title: "Fraude des Procès-Verbaux",
            description: "Manipulation, perte ou falsification des documents physiques lors du transport vers les centres de centralisation.",
            icon: <FileExcelOutlined />,
            danger: true
        },
        {
            title: "Manque de confiance",
            description: "Une vaste méfiance du public envers les résultats publiés par les organes de gestion des élections.",
            icon: <DisconnectOutlined />
        },
        {
            title: "Délais extrêmement longs",
            description: "Plusieurs jours d'attente pour compiler des résultats centralisés, créant des tensions sociales.",
            icon: <ClockCircleOutlined />
        },
        {
            title: "Contestations massives",
            description: "Les résultats sont souvent rejetés par l'opposition, menant à des recours et parfois des violences.",
            icon: <WarningOutlined />,
            danger: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="section-container">
            <div className="section-title-wrapper">
                <Title className="section-title">Pourquoi le système actuel échoue ?</Title>
                <Paragraph className="section-subtitle">
                    Le processus électoral au Mali fait face à des défis structurels majeurs qui compromettent la légitimité des résultats.
                </Paragraph>
            </div>

            <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
                <Col xs={24} md={12} lg={6}>
                    <div className="stat-card">
                        <Statistic title="Manque de confiance" value={28} suffix="%" valueStyle={{ color: 'var(--danger-color)', fontWeight: 'bold' }} />
                        <Paragraph style={{ marginTop: 12, fontSize: '13px', color: '#666' }}>des citoyens font confiance aux institutions électorales</Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <div className="stat-card">
                        <Statistic title="Délais d'attente" value={5} suffix="- 9 jours" valueStyle={{ color: 'var(--warning-color)', fontWeight: 'bold' }} />
                        <Paragraph style={{ marginTop: 12, fontSize: '13px', color: '#666' }}>pour la publication complète des résultats provisoires</Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <div className="stat-card">
                        <Statistic title="Contestations" value={400} prefix="+" suffix="b.v." valueStyle={{ color: 'var(--danger-color)', fontWeight: 'bold' }} />
                        <Paragraph style={{ marginTop: 12, fontSize: '13px', color: '#666' }}>bureaux de vote annulés lors des élections précédentes</Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <div className="stat-card">
                        <Statistic title="Processus Manuel" value={100} suffix="%" valueStyle={{ color: 'var(--warning-color)', fontWeight: 'bold' }} />
                        <Paragraph style={{ marginTop: 12, fontSize: '13px', color: '#666' }}>Transport physique des documents ouvrant la porte à la fraude</Paragraph>
                    </div>
                </Col>
            </Row>

            {/* <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Row gutter={[24, 24]}>
                    {problems.map((problem, index) => (
                        <Col xs={24} md={12} key={index}>
                            <motion.div variants={itemVariants} style={{ height: '100%' }}>
                                <Card className="custom-card" bordered={false}>
                                    <div className="card-icon-wrapper" style={{
                                        background: problem.danger ? 'var(--danger-bg-light)' : 'var(--secondary-bg-light)',
                                        color: problem.danger ? 'var(--danger-color)' : 'var(--secondary-color)'
                                    }}>
                                        {problem.icon}
                                    </div>
                                    <Title level={4}>{problem.title}</Title>
                                    <Paragraph style={{ color: '#666', marginBottom: 0 }}>
                                        {problem.description}
                                    </Paragraph>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div> */}
        </section>
    );
};

export default Problem;
