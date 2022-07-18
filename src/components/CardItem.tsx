import { Data } from "../interfaces"

interface Props {
    data: Data,
    handleDragging: (dragging: boolean) => void
}

export const CardItem = ({ data, handleDragging }: Props) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('card', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

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