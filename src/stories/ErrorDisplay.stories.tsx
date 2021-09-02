import { Meta, Story } from '@storybook/react';

import { ErrorDisplay, ErrorDisplayProps } from '../app/components/ErrorDisplay';

export default {
    title: 'Example/ErrorDisplay',
    component: ErrorDisplay,
} as Meta;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Small = Template.bind({});
Small.args = {
    small: true,
    title: 'Error ao renderizar Small Component',
    message: 'Erro no small componenet'
};