import { Meta, Story } from '@storybook/react';

import { Profile, ProfileProps } from '../components/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
  argTypes: {
     progress: {
         control: {
             type: 'range',
             min: 0,
             max: 100
         }
     }  
  }
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Tulio Gabriel',
    description: 'Editor a 3 anos'
};