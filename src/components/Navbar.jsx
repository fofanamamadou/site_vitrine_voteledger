import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Header } = Layout;

const Navbar = () => {
    const [mobileVisible, setMobileVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { key: 'home', label: 'Accueil' },
        { key: 'problem', label: 'Problème' },
        { key: 'solution', label: 'Solution' },
        { key: 'features', label: 'Fonctionnalités' },
        { key: 'impact', label: 'Impact' },
    ];

    const handleMenuClick = (key) => {
        const element = document.getElementById(key);
        if (element) {
            const headerOffset = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navStyle = {
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
        height: '72px',
    };

    return (
        <Header style={navStyle}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontWeight: 800, fontSize: '24px', color: 'var(--primary-color)', cursor: 'pointer' }}
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
                VoteLedger
            </motion.div>

            <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                <Menu
                    mode="horizontal"
                    items={menuItems.map(item => ({ ...item, onClick: () => handleMenuClick(item.key) }))}
                    style={{
                        borderBottom: 'none',
                        background: 'transparent',
                        justifyContent: 'flex-end',
                        flex: 1,
                        minWidth: '400px'
                    }}
                    className="hide-on-mobile"
                />
            </div>

            <Button
                type="text"
                icon={<MenuOutlined style={{ fontSize: '20px' }} />}
                onClick={() => setMobileVisible(true)}
                className="show-on-mobile"
            />

            <Drawer
                title="Menu VoteLedger"
                placement="right"
                onClose={() => setMobileVisible(false)}
                open={mobileVisible}
            >
                <Menu
                    mode="vertical"
                    items={menuItems.map(item => ({ ...item, onClick: () => { handleMenuClick(item.key); setMobileVisible(false); } }))}
                    style={{ borderRight: 'none' }}
                />

            </Drawer>

        </Header>
    );
};

export default Navbar;
