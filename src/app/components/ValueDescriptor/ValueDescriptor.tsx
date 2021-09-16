import { Wrapper } from "./ValueDescriptor.styles"

export interface ValueDescriptorProps {
    description: string;
    value: number;
    color: 'primary' | 'default';
    isCurrency?: boolean;
}

export const ValueDescriptor = ({ description, isCurrency, value, color = 'default' }: ValueDescriptorProps) => {
    return (
        <Wrapper color={color}>
            <span className="Description">{description}:</span>
            <div>
                {
                    isCurrency && <span className="Currency">{'R$ '}</span>
                }

                <span className="Value">{value.toLocaleString('pt-br')}</span>
            </div>
        </Wrapper>
    )
}