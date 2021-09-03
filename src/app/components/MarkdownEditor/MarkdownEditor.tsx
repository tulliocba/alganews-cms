import { Wrapper } from "./MarkdownEditor.styles";

import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

export interface MarkdownEditorProps {
    onChange?: (text: string) => any
}

export const MarkdownEditor = ({ onChange }: MarkdownEditorProps) => {
    return (
        <Wrapper>
            <MdEditor
                style={{ height: 300 }}
                renderHTML={text => parser.render(text)}
                onChange={({ text }) => onChange && onChange(text)}
            />
        </Wrapper>
    );
}