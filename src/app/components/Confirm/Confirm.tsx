import { Wrapper, ConfirmTitle, ConfirmDisplayButton } from "./Confirm.styles";
import { Button } from "../Button/Button"

export interface ConfirmProps {
    title: string;
    onConfirm: () => any;
    onCancel: () => any;
}

export const Confirm = ({ title, onConfirm, onCancel }: ConfirmProps) => {
    return (
        <Wrapper>
            <ConfirmTitle>{title}</ConfirmTitle>
            <ConfirmDisplayButton>
                <Button 
                    label="Sim" 
                    variant="primary" 
                    onClick={onConfirm}/>
                
                <Button 
                    label="Não" 
                    variant="danger" 
                    onClick={onCancel}/>
            </ConfirmDisplayButton>
        </Wrapper>
    );
}