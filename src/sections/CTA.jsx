import React from 'react';
import { Typography, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { TeamOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CTA = () => {
    return (
        <section className="section-container" style={{ padding: '100px 5%' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={{
                    background: 'var(--gradient-primary)',
                    borderRadius: '24px',
                    padding: '60px 5%',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(11, 60, 93, 0.2)'
                }}>
                    <Title style={{ color: 'white', marginBottom: '24px' }}>Prêt à transformer les élections ?</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px' }}>
                        Par SoFura Build, nous recherchons des partenaires, développeurs et mentors pour déployer NoteLedger lors des prochaines échéances.
                    </Paragraph>
                    <Space size="middle" wrap style={{ justifyContent: 'center' }}>
                        <Button size="large" style={{ color: 'var(--primary-color)', fontWeight: 600, height: '50px', padding: '0 30px' }} icon={<TeamOutlined />}>
                            Rejoindre le projet
                        </Button>
                        <Button size="large" ghost style={{ height: '50px', padding: '0 30px', borderColor: 'rgba(255,255,255,0.5)' }} icon={<HeartOutlined />}>
                            Soutenir VoteLedger
                        </Button>
                    </Space>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
