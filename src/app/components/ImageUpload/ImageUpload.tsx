import { mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FileService } from "../../../sdk/services/File.service";
import { Button } from "../Button/Button";
import { Loading } from "../Loading";
import { ImagePreview, ImagePreviewWrapper, Input, Label, Wrapper } from "./ImageUpload.styles";

export interface ImageUploadProps {
    label: string;
    onImageUpload: (imageUrl: string) => any;
    preview?: string;

}

export const ImageUpload = ({ label, onImageUpload, preview }: ImageUploadProps) => {

    const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
    const [uploadingImage, setUploadingImage] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.addEventListener('load', async e => {
                try {
                    setUploadingImage(true);
                    setFilePreview(String(e.target?.result));
                    const imageUrl = await FileService.upload(file);
                    onImageUpload(imageUrl);
                } finally {
                    setUploadingImage(false);
                }

            });

            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        setFilePreview(preview)
    }, [preview]);

    if (filePreview) {
        return <ImagePreviewWrapper>
            <Loading show={uploadingImage} />
            <ImagePreview preview={filePreview}>
                <Button
                    variant="primary"
                    label="Remover imagem"
                    onClick={() => setFilePreview(undefined)}
                />
            </ImagePreview>
        </ImagePreviewWrapper>
    }

    return (
        <Wrapper>
            <Loading show={uploadingImage} />
            <Label>
                <Icon
                    size="24px"
                    path={mdiUpload}
                />
                {label}
                <Input type="file" onChange={handleChange} />
            </Label>
        </Wrapper>
    );
}