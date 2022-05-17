import React from 'react';
import Button from './index'

export default {
    title: 'Design System/Atoms/Button',
    component: Button,
    parameters: {
        backgrounds: {
            default: 'grey',
            values: [
                { name: 'grey', value: 'grey' }
            ]
        }
    }
};

export const SecondaryButton = () => <Button>Button</Button>