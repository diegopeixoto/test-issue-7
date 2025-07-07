'use client';

// Imports
// ------------
import React from 'react';
import PropTypes from 'prop-types';
import UnicornScene from 'unicornstudio-react/next';

// Styles
// ------------
import { Jacket } from './styles';

// Component
// ------------
const AnimatedBackground = ({ projectId = '26AnxBiPX7aiqlM9AUYX' }) => {
    return (
        <Jacket>
            <p>Test2</p>
            <UnicornScene
                projectId={projectId}
                width="250px"
                height="700px"
                scale={1}
                dpi={1}
                fps={60}
                altText="Interactive 3D scene"
                ariaLabel="Animated background scene"
                lazyLoad={true}
                production={true}
            />
        </Jacket>
    );
};

// PropTypes
// ------------
AnimatedBackground.propTypes = {
    projectId: PropTypes.string,
};

// Exports
// ------------
AnimatedBackground.displayName = 'AnimatedBackground';
export default AnimatedBackground;
