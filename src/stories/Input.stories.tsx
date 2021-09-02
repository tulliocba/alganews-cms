import { Story, ComponentMeta } from '@storybook/react';

import { Input, InputProps } from '../app/components/Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceholder =  Template.bind({});
WithPlaceholder.args = {
    placeholder: "e.g.: João"
}

export const WithPlaceholderAndLabel =  Template.bind({});
WithPlaceholderAndLabel.args = {
    placeholder: "e.g.: João",
    label: "Name"
}

export const WithLabelAndContent =  Template.bind({});
WithLabelAndContent.args = {
    value: "João",
    label: "Name"
}

export const WithContent =  Template.bind({});
WithContent.args = {
    value: "João"
}