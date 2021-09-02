import { Meta, Story } from '@storybook/react';

import { WordPriceCounter, WordPriceCounterProps } from '../app/components/WordPriceCounter';

export default {
    title: 'Example/WordPriceCounter',
    component: WordPriceCounter,
} as Meta;

const Template: Story<WordPriceCounterProps> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
    pricePerWord: 0.45,
    wordsCount: 20

};