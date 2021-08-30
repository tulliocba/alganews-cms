import { Meta, Story } from '@storybook/react';

import { Profile, ProfileProps } from '../components/Profile';

export default {
    title: 'Example/Profile',
    component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Tulio Gabriel',
    description: 'Editor a 3 anos'
};