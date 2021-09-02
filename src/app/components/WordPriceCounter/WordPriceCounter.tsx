import { PricePreview, WordCounter, Wrapper } from "./WordPriceCounter.styles"

export interface WordPriceCounterProps {
    wordsCount: number;
    pricePerWord: number;
}

export const WordPriceCounter = ({ wordsCount, pricePerWord }: WordPriceCounterProps) => {

    if (wordsCount < 0) throw new Error('A quantidade de palavras não pode ser negativa!'); 

    return (
        <Wrapper>
            <WordCounter>
                {wordsCount} Palavras
            </WordCounter>

            <PricePreview>
                {(wordsCount * pricePerWord).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 2
                })}
            </PricePreview>
        </Wrapper>
    );
}