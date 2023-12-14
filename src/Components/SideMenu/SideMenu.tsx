import React, { useEffect, useState } from 'react';
import {
    MenuContainer,
    MenuItemsContainer,
    MenuItem,
} from './SideMenuStyles';

interface SideMenuProps {
    handleMouseOver: (index: number | null) => void;
    handleMouseLeave: () => void;
    menuItemHovered: boolean;
    activeIndex: number | null
}

const SideMenu: React.FC<SideMenuProps> = ({ handleMouseOver, handleMouseLeave, menuItemHovered, activeIndex }) => {
    const [transitioned, setTransitioned] = useState<boolean>(false);

    useEffect(() => {
        setTransitioned(true);
    }, []);

    return (
        <MenuContainer>
            <MenuItemsContainer transitioned={transitioned}>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 0} onMouseOver={() => handleMouseOver(0)} onMouseLeave={() => handleMouseLeave()}>Home</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 1} onMouseOver={() => handleMouseOver(1)} onMouseLeave={() => handleMouseLeave()}>What?</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 2} onMouseOver={() => handleMouseOver(2)} onMouseLeave={() => handleMouseLeave()}>How?</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 3} onMouseOver={() => handleMouseOver(3)} onMouseLeave={() => handleMouseLeave()}>Where?</MenuItem>
            </MenuItemsContainer>
        </MenuContainer>
    );
};

export default SideMenu;
