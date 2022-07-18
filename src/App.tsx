import { ContainerCards, Title } from "./components"
import { data } from "./assets"
import { Data, Status } from "./interfaces"
import { useState } from "react"

const typesHero: Status[] = ['good', 'normal', 'bad']

const App = () => {

  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(data)

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
              setIsDragging={setIsDragging}
              setListItems={setListItems}
            />
          ))
        }
      </div>
    </div>
  )
}
export default App
