import { Wrapper } from "./FieldDescriptor.styles";

export interface FieldDescriptorProps {
    label: string;
    value: string;
}

export const FieldDescriptor = ({ label , value}: FieldDescriptorProps) => {
    return (
        <Wrapper>
            <span className="Label">{label}:</span>
            <div>
                <span className="Value">{value}</span>
            </div>
        </Wrapper>
    );
}