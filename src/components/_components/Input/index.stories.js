import React from 'react';
import Input from './index'

export default {
    title: 'Design System/Atoms/Input',
    component: Input,
    parameters: {
        backgrounds: {
            default: 'grey',
            values: [
                { name: 'grey', value: 'grey' }
            ]
        }
    }
};

export const BaseInput = () => <Input label="Input Label" />