import { ComponentMeta, Story } from '@storybook/react';

import { Heading, HeadingProps } from '../components/Typography/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
    level: 1,
    children: 'Heading1'

}

export const Heading2 = Template.bind({});
Heading2.args = {
    level: 2,
    children: 'Heading2'
    
}

export const Heading3 = Template.bind({});
Heading3.args = {
    level: 3,
    children: 'Heading3'
    
}