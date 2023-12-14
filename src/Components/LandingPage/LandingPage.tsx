import React, { useEffect, useState } from 'react';
import { Container, Side, Title, Fancy, Header, Logo, MenuButton, BackgroundPattern, ToothIcon, LogoContainer, ToothIconShadow } from './LandingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBarsStaggered, faTooth } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu/SideMenu';

const LandingPage: React.FC = () => {
    const [leftSideWidth, setLeftSideWidth] = useState(50);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuItemHovered, setMenuItemHovered] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseOver = (index: number | null) => {
        setActiveIndex(index);
        if (index !== null) {
            setMenuItemHovered(true);
        }
    };

    const handleMouseLeave = () => { setMenuItemHovered(false); }

    const handleMove = (e: MouseEvent | TouchEvent) => {
        const mouseX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        setLeftSideWidth(mouseX / window.innerWidth * 100)
    };

    const handleMenuClick = () => {
        handleMouseOver(null)
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchmove', handleMove);
        };
    }, []);

    return (
        <>
            <Container>
                <Header>
                    <LogoContainer>
                        <ToothIcon icon={faTooth} />
                        <ToothIconShadow icon={faTooth} />
                        <Logo color="#ffffff">Holici Clinic</Logo>
                    </LogoContainer>
                    <MenuButton onClick={handleMenuClick}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </MenuButton>
                </Header>
                <Side color="#192428" transition={1} width={menuOpen ? 36 : Math.min(Math.max(36, leftSideWidth), 65)} style={{ zIndex: 2 }}>
                    <Title color="#ffffff">
                        Oferim cel mai<br />bun <Fancy color="#a3c3e7">tratament</Fancy>
                    </Title>

                </Side>
                <Side color="#a3c3e7" width={100} transition={0} style={{ filter: `brightness(${menuItemHovered ? 0.8 : 1})`, }}>
                    <BackgroundPattern
                        data-active-index={activeIndex} />

                    {menuOpen ? <SideMenu handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} menuItemHovered={menuItemHovered} activeIndex={activeIndex} /> :
                        <Title color="#192428">
                            Pentru cel mai<br />frumos  <Fancy color="	#ffffff">zâmbet</Fancy>
                        </Title>
                    }
                    <MenuButton onClick={handleMenuClick} style={{ transition: "right 0.5s ease-in-out, opacity 0.75s ease-in-out", position: 'absolute', right: menuOpen ? '20vw' : "10vw", top: '50%', zIndex: 99, opacity: menuOpen ? "0" : "1" }} >
                        <FontAwesomeIcon icon={faAngleRight} beat size="xl" />
                    </MenuButton>
                </Side>
            </Container >
        </>
    );
};

export default LandingPage;
