import { Wrapper } from "./MarkdownEditor.styles";

import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

export interface MarkdownEditorProps {
    onChange?: (text: string) => any,
    value?: string,
    readyOnly?: boolean;
}

export const MarkdownEditor = ({ onChange, readyOnly, value }: MarkdownEditorProps) => {
    return (
        <Wrapper>
            <MdEditor
                readOnly={readyOnly}
                style={{ height: readyOnly ? 'auto' : 300 }}
                renderHTML={text => parser.render(text)}
                onChange={({ text }) => onChange && onChange(text)}
                value={value}
                view={readyOnly ? {
                    menu: false,
                    md: false,
                    html: true
                } : undefined}
            />
        </Wrapper>
    );
}