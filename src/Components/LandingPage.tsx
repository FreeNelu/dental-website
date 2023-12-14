import React, { useEffect, useState } from 'react';
import { Container, Side, Title, Fancy, Header, Logo, MenuButton } from './LandingPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
    const [leftSideWidth, setLeftSideWidth] = useState(50);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMove = (e: MouseEvent | TouchEvent) => {
        const mouseX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        setLeftSideWidth(mouseX / window.innerWidth * 100)
    };

    const handleMenuClick = () => {
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
                    <Logo color="#ffffff">Holici Clinic</Logo>
                    <MenuButton onClick={handleMenuClick}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </MenuButton>
                </Header>
                <Side color="#192428" transition={0.5} width={menuOpen ? 36 : Math.min(Math.max(36, leftSideWidth), 65)} style={{ zIndex: 2 }}>
                    <Title color="#ffffff">
                        Oferim cel mai<br />bun <Fancy color="#a3c3e7">tratament</Fancy>
                    </Title>

                </Side>
                <Side color="#a3c3e7" width={100} transition={0}>
                    {!menuOpen && <Title color="#192428">
                        Pentru cel mai<br />frumos  <Fancy color="	#ffffff">zâmbet</Fancy>
                    </Title>
                    }
                </Side>
            </Container >
        </>
    );
};

export default LandingPage;
