import React, { useEffect, useState } from 'react';
import {
    MenuContainer,
    MenuItemsContainer,
    MenuItem,
} from './SideMenuStyles';

interface SideMenuProps {
    menuOpen: boolean;
    handleMouseOver: (index: number | null) => void;
    handleMouseLeave: () => void;
    menuItemHovered: boolean;
    activeIndex: number | null
}

const SideMenu: React.FC<SideMenuProps> = ({ menuOpen, handleMouseOver, handleMouseLeave, menuItemHovered, activeIndex }) => {
    const [transitioned, setTransitioned] = useState<boolean>(false);

    useEffect(() => {
        setTransitioned(menuOpen);
    }, [menuOpen]);

    return (
        <MenuContainer>
            <MenuItemsContainer transitioned={transitioned}>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 0} onMouseOver={() => handleMouseOver(0)} onMouseLeave={() => handleMouseLeave()}>Acasa</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 1} onMouseOver={() => handleMouseOver(1)} onMouseLeave={() => handleMouseLeave()}>Echipa</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 2} onMouseOver={() => handleMouseOver(2)} onMouseLeave={() => handleMouseLeave()}>Metode</MenuItem>
                <MenuItem dimColor={menuItemHovered && activeIndex !== 3} onMouseOver={() => handleMouseOver(3)} onMouseLeave={() => handleMouseLeave()}>Preturi</MenuItem>
            </MenuItemsContainer>
        </MenuContainer>
    );
};

export default SideMenu;
