import { ContainerCards, Title } from "./components"
import { useDragAndDrop } from "./hooks/useDragAndDrop"

import { data } from "./assets"
import { Status } from "./interfaces"

const typesHero: Status[] = ['good', 'normal', 'bad']

const App = () => {

  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

  return (
    <div className="container-main flex">
      <Title />
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
    </div>
  )
}
export default App
