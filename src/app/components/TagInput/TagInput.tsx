import { Wrapper } from "./TagInput.styles";

import { WithContext as ReactTagInput, Tag } from "react-tag-input";

export interface TagInputProps {
    onAdd: (tag: Tag) => any;
    onDelete: (i: number) => any;
    tags: Tag[];
    placeholder: string;
}

export const TagInput = ({ onAdd, onDelete, tags , placeholder}: TagInputProps) => {

    const keyCodes = {
        comma: 188,
        enter: 13,
        tab: 9
    }

    return (
        <Wrapper>
            <ReactTagInput
                placeholder={placeholder}
                handleAddition={onAdd}
                handleDelete={onDelete}
                allowDragDrop={false}
                autofocus={false}
                tags={tags}
                delimiters={[keyCodes.comma, keyCodes.enter, keyCodes.tab]}
            />
        </Wrapper>
    );
}