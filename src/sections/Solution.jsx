import React from 'react';
import { Row, Col, Typography, Steps } from 'antd';
import { DatabaseOutlined, BlockOutlined, GlobalOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Solution = () => {
    return (
        <section className="light-bg" style={{ padding: '80px 0' }}>
            <div className="section-container" style={{ padding: '0 5%' }}>
                <div className="section-title-wrapper">
                    <Title className="section-title">VoteLedger : Le vote, sans fraude.</Title>
                    {/* <Paragraph className="section-subtitle">
                        Une architecture distribuée qui numérise et sécurise les procès-verbaux dès la sortie des urnes.
                    </Paragraph> */}
                </div>

                <Row gutter={[48, 48]} align="middle">
                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Title level={3} style={{ marginBottom: '24px' }}>Comment ça fonctionne ?</Title>
                            <Steps
                                direction="vertical"
                                current={3}
                                items={[
                                    {
                                        title: 'Bureaux de Vote',
                                        description: 'Les agents électoraux scannent et saisissent le PV sur une tablette sécurisée.',
                                        icon: <CheckCircleOutlined style={{ color: 'var(--secondary-color)' }} />,
                                    },
                                    {
                                        title: 'Cryptographie & Hachage',
                                        description: 'Le PV génère une empreinte unique (hash) impossible à modifier sans alerter le système.',
                                        icon: <DatabaseOutlined style={{ color: 'var(--secondary-color)' }} />,
                                    },
                                    {
                                        title: 'Registre Blockchain',
                                        description: 'Les données sont ancrées sur un registre public immuable, répliqué sur plusieurs nœuds indépendants.',
                                        icon: <BlockOutlined style={{ color: 'var(--secondary-color)' }} />,
                                    },
                                    {
                                        title: 'Consultation Publique',
                                        description: 'Les journalistes, observateurs et citoyens peuvent vérifier en temps réel les PV originaux de chaque bureau.',
                                        icon: <GlobalOutlined style={{ color: 'var(--primary-color)' }} />,
                                    },
                                ]}
                            />
                        </motion.div>
                    </Col>

                    <Col xs={24} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                                <Title level={4} style={{ color: 'var(--primary-color)', marginBottom: '24px' }}>Pourquoi la Blockchain ?</Title>

                                <div style={{ display: 'flex', marginBottom: '20px' }}>
                                    <div style={{ background: 'var(--secondary-bg-light)', padding: '12px', borderRadius: '8px', marginRight: '16px', alignSelf: 'flex-start' }}>
                                        <strong>1</strong>
                                    </div>
                                    <div>
                                        <h5 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Immuabilité absolue</h5>
                                        <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Une fois le PV enregistré, aucune modification ou suppression n'est techniquement possible sans corrompre le réseau.</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', marginBottom: '20px' }}>
                                    <div style={{ background: 'var(--secondary-bg-light)', padding: '12px', borderRadius: '8px', marginRight: '16px', alignSelf: 'flex-start' }}>
                                        <strong>2</strong>
                                    </div>
                                    <div>
                                        <h5 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Transparence immédiate</h5>
                                        <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Chaque acteur a accès à la même source de vérité simultanément, éliminant l'asymétrie de l'information.</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div style={{ background: 'var(--secondary-bg-light)', padding: '12px', borderRadius: '8px', marginRight: '16px', alignSelf: 'flex-start' }}>
                                        <strong>3</strong>
                                    </div>
                                    <div>
                                        <h5 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Décentralisation</h5>
                                        <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Aucun acteur unique ne contrôle les serveurs. La validation est partagée (CENI, société civile, observateurs).</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Solution;
