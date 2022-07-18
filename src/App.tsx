import { ContainerCards, Title } from "./components"
import { data } from "./assets"
import { Data, Status } from "./interfaces"
import { useState } from "react"

const typesHero: Status[] = ['good', 'normal', 'bad']

const App = () => {

  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(data)

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find(item => item.id === id) as Data

    if (card.status !== status) {
      card.status = status
      setListItems(prev => ([
        card,
        ...prev.filter(item => item.id !== id)
      ]))
    }

  }

  const handleDragging = (dragging: boolean) => setIsDragging(dragging)

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
