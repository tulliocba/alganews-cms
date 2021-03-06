import { Meta, Story } from '@storybook/react';

import { SessionController, SessionControllerProps } from '../app/components/SessionController';

export default {
    title: 'Example/SessionController',
    component: SessionController,
    argTypes: {
        onLogout: {
            action: 'logout'
        }
    }
} as Meta;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Tulio Gabriel',
    description: 'Editor a 3 anos'
};