import React from 'react';
import { Row, Col, Typography, Space, Divider } from 'antd';
import { TwitterOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, FacebookOutlined, TikTokOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <footer className="footer">
            <Row gutter={[48, 32]}>
                <Col xs={24} md={8}>
                    <Title level={3} style={{ color: 'white', margin: 0 }}>
                        VoteLedger
                    </Title>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginTop: 16, lineHeight: 1.6 }}>
                        Une solution innovante basée sur la blockchain pour garantir la transparence,
                        l'intégrité et la paix lors des processus électoraux au Mali.
                    </Text>
                    <div style={{ marginTop: 24 }}>
                        <Space size="large">
                            <FacebookOutlined style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
                            <LinkedinOutlined style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
                            <TikTokOutlined style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
                        </Space>
                    </div>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    {/* <Title level={4} style={{ color: 'white', marginBottom: 24 }}>Liens rapides</Title>
                    <a href="#problem" className="footer-link">Le problème</a>
                    <a href="#solution" className="footer-link">Notre solution</a>
                    <a href="#features" className="footer-link">Fonctionnalités</a>
                    <a href="#impact" className="footer-link">Impact social</a> */}
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Title level={4} style={{ color: 'white', marginBottom: 24 }}>Contact</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 16 }}>
                        <MailOutlined style={{ marginRight: 8 }} />
                        contact@voteledger.ml
                    </Text>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 16 }}>
                        SoFura Build
                    </Text>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', display: 'block' }}>
                        Bamako, Mali
                    </Text>
                </Col>
            </Row>

            <div className="footer-bottom">
                <Text style={{ color: 'rgba(255,255,255,0.6)' }}>
                    © {new Date().getFullYear()} VoteLedger. Tous droits réservés. Projet à but non lucratif.
                </Text>
            </div>
        </footer>
    );
};

export default Footer;
