import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale"

export const getEditorDescription = (createdAt: Date) => {
    const distance = formatDistance(createdAt, new Date(), { locale: ptBR })
    return `Editor há ${distance}.`
}