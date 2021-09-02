import { ComponentMeta, Story } from '@storybook/react';

import { NoData, NoDataProps } from '../app/components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
} as ComponentMeta<typeof NoData>;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const NoDataHeightSet = Template.bind({});
NoDataHeightSet.args = {
  height: 240,
};
