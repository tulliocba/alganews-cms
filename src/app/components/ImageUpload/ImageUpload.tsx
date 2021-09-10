import { mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useState } from "react";
import { FileService } from "../../../sdk/services/File.service";
import { Button } from "../Button/Button";
import { ImagePreview, ImagePreviewWrapper, Input, Label, Wrapper } from "./ImageUpload.styles";

export interface ImageUploadProps {
    label: string;
    onImageUpload: (imageUrl: string) => any

}

export const ImageUpload = ({ label, onImageUpload }: ImageUploadProps) => {

    const [filePreview, setFilePreview] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.addEventListener('load', async e => {

                setFilePreview(String(e.target?.result));
                const imageUrl = await FileService.upload(file);
                onImageUpload(imageUrl);
                
            });

            reader.readAsDataURL(file);
        }
    }

    if (filePreview) {
        return <ImagePreviewWrapper>
            <ImagePreview preview={filePreview}>
                <Button
                    variant="primary"
                    label="Remover imagem"
                    onClick={() => setFilePreview(null)}
                />
            </ImagePreview>
        </ImagePreviewWrapper>
    }

    return (
        <Wrapper>
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