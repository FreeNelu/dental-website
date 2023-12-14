import React, { useEffect, useState } from 'react';
import { TreatmentsContainer } from './TreatmentsPageStyles';
import { BeforeAfter } from '../BeforeAfter/BeforeAfter';
const SideMenu: React.FC = () => {
    return (
        <TreatmentsContainer>
            <BeforeAfter beforeImage={process.env.PUBLIC_URL + '/before.png'} afterImage={process.env.PUBLIC_URL + '/after.png'} />
        </TreatmentsContainer>
    );
};

export default SideMenu;
