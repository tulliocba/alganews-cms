import { Meta, Story } from '@storybook/react';

import { ImageUpload, ImageUploadProps } from '../components/ImageUpload';

export default {
  title: 'Example/ImageUpload',
  component: ImageUpload
} as Meta;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Upload de Imagem'
};