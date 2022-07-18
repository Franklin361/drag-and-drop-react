import { data } from "../assets"
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { Status } from "../interfaces"
import { ContainerCards } from "./ContainerCards"


const typesHero: Status[] = ['good', 'normal', 'bad']


export const DragAndDrop = () => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

    return (
        <div className="grid">
            {
                typesHero.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}