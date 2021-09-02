import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { Tag } from 'react-tag-input';

import { TagInput, TagInputProps } from '../app/components/TagInput';

export default {
    title: 'Example/TagInput',
    component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Insira as tags deste post.',
    tags: [{id: 'javascript', text: 'javascript'}]
};

export function WorkingLiveExample() {

    const [tags, setTags] = useState<Tag[]>([]);

    return <TagInput 
        placeholder="Insira as tags deste post"
        tags={tags}
        onAdd={tag => setTags([...tags, tag])}
        onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
}