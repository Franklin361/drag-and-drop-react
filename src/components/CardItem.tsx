import { Data } from "../interfaces"

interface Props {
    data: Data,
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardItem = ({ data, setIsDragging }: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('card', `${data.id}`)
        setIsDragging(true)
    }
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false)
    }

    return (
        <div
            className='card-container'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p>{data.content}</p>
        </div>
    )
}