import { Data, Status } from "../interfaces"
import { CardItem } from "./CardItem"

interface Props {
    items: Data[]
    status: Status
    isDragging: boolean
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
    setListItems: React.Dispatch<React.SetStateAction<Data[]>>
}

export const ContainerCards = ({ items = [], status, isDragging, setIsDragging, setListItems }: Props) => {

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()

        const id = +e.dataTransfer.getData('card')

        let card = items.find(item => item.id === id) as Data
        card.status = status

        setListItems(prev => ([
            card,
            ...prev.filter(item => item.id !== id)
        ]))

        setIsDragging(false)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    return (
        <div
            className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p>{status} hero</p>
            {
                items.map(item => (
                    status === item.status
                    && <CardItem
                        data={item}
                        key={item.id}
                        setIsDragging={setIsDragging}
                    />
                ))
            }
        </div>
    )
}
