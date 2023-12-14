import React, { useEffect, useState } from 'react';
import { Container, Side, Title, Fancy, Header, Logo, MenuButton, BackgroundPattern, ToothIcon, LogoContainer, ToothIconShadow, SmileImage } from './LandingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBarsStaggered, faTooth } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu/SideMenu';

interface LandingPageProps {
    handleScroll: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ handleScroll }) => {
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

    const hideMenu = () => {
        setMenuOpen(false);
    }

    const handleMouseLeave = () => { setMenuItemHovered(false); }

    const handleMove = (e: MouseEvent | TouchEvent) => {
        const mouseY = e instanceof MouseEvent ? e.clientY + window.scrollY : e.touches[0].clientY + window.scrollY;
        if (mouseY > window.innerHeight) return
        const mouseX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        setLeftSideWidth(mouseX / window.innerWidth * 100)
    };

    const handleMenuClick = (e: any) => {
        e.stopPropagation();
        handleMouseOver(null)
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('click', hideMenu);
        document.addEventListener('touchstart', hideMenu);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('click', hideMenu);
            document.removeEventListener('touchstart', hideMenu);
        };
    }, []);

    return (
        <Container>
            <Header>
                <LogoContainer>
                    <ToothIcon icon={faTooth} />
                    <ToothIconShadow icon={faTooth} />
                    <Logo color="#e5f0f9">Holici Clinic</Logo>
                </LogoContainer>
                <MenuButton onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </MenuButton>
            </Header>

            <Side color="#192428" transition={1} width={menuOpen ? 36 : Math.min(Math.max(36, leftSideWidth), 65)} style={{ zIndex: 2 }}>
                <Title color="#e5f0f9">
                    Oferim cel mai<br />bun <Fancy color="#a3c3e7">tratament</Fancy>
                </Title>
            </Side>

            <Side color="#a3c3e7" width={100} transition={0} style={{ filter: `brightness(${menuItemHovered ? 0.9 : 1})`, }}>
                <BackgroundPattern
                    data-active-index={activeIndex} />
                <SideMenu menuOpen={menuOpen} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} menuItemHovered={menuItemHovered} activeIndex={activeIndex} />
                {!menuOpen && <Title color="#192428">
                    Pentru cel mai<br />frumos  <Fancy color="	#e5f0f9">zâmbet</Fancy>
                </Title>
                }

            </Side>

            <MenuButton onClick={handleScroll} style={{ color: '#e5f0f9', transition: "opacity 0.75s ease-in-out", position: 'absolute', right: "50%", top: '80%', zIndex: 99, opacity: menuOpen ? "0" : "1" }} >
                <FontAwesomeIcon icon={faAngleDown} beat size="xl" />
            </MenuButton>
        </Container >
    );
};

export default LandingPage;
