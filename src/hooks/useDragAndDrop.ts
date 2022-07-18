import { useState } from "react"
import { Data, Status } from "../interfaces"

export const useDragAndDrop = (initialState: Data[]) => {

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Data[]>(initialState)

    const handleUpdateList = (id: number, status: Status) => {
        let card = listItems.find(item => item.id === id) as Data

        if (card.status !== status) {
            card.status = status
            if (Array.isArray(listItems)) {
                setListItems(prev => ([
                    card,
                    ...prev.filter(item => item.id !== id)
                ]))
            }
        }

    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}