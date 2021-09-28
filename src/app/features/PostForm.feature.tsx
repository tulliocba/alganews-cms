import { PostService } from "cms-alganews-sdk";
import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { countWordsInMarkdown } from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import { Button } from "../components/Button/Button";
import { ImageUpload } from "../components/ImageUpload";
import { Input } from "../components/Input/Input";
import { Loading } from "../components/Loading";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { TagInput } from "../components/TagInput";
import { WordPriceCounter } from "../components/WordPriceCounter";

interface PostFormProps {
    postId?: number;
}

export const PostForm = withBoundaryError(({ postId }: PostFormProps) => {

    const [tags, setTags] = useState<Tag[]>([]);
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [publishing, setPublishing] = useState(false);
    const history = useHistory();


    const insertNewPost = async () => {
        const newPost = {
            body,
            title,
            tags: tags.map(tag => tag.text),
            imageUrl
        };

        await PostService.insertNewPost(newPost);

        info({
            title: "Post salvo com sucesso",
            description: `Você acabou de criar um post.`
        });
    }

    const updateExistingPost = async (postId: number) => {
        const post = {
            body,
            title,
            tags: tags.map(tag => tag.text),
            imageUrl
        };

        await PostService.updateExistingPost(postId, post);

        info({
            title: "Post atualizado",
            description: `Você atualizou o post com sucesso.`
        });
    }

    const fetchPost = (postId: number) => {
        PostService.getExistingPost(postId)
        .then(post => {
            setTitle(post.title);
            setImageUrl(post.imageUrls.default);
            setBody(post.body);
            setTags(post.tags.map(tag => ({id: tag, text: tag})))
        })
    };

    useEffect(() => {
        if (postId) {
            fetchPost(postId);
        }
    }, [postId])

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        
        try {
            e.preventDefault();
            
            setPublishing(true);

            postId ? updateExistingPost(postId)
            : insertNewPost();
            

            history.push('/home');
        } finally {
            setPublishing(false);
        }
    }

    return (
        <PostFormWrapper onSubmit={handleFormSubmit}>
            <Loading show={publishing} />
            <Input
                label="título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g.: Como fiquei rico aprendendo React"
            />

            <ImageUpload
                label="Thumbnail do post"
                onImageUpload={imageUrl => setImageUrl(imageUrl)} 
                preview={imageUrl}/>

            <MarkdownEditor 
                onChange={setBody} 
                value={body}/>

            <TagInput
                tags={tags}
                onAdd={tag => setTags([...tags, tag])}
                onDelete={index => setTags(tags.filter((_, i) => i !== index))}
                placeholder="Insira as tags deste post" />

            <PostFormSubmitWrapper>
                <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
                <Button
                    variant="primary"
                    label="Salvar post"
                    type="submit"
                    disabled={!title || !imageUrl || !body || !tags.length} />
            </PostFormSubmitWrapper>
        </PostFormWrapper>
    );
});

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
