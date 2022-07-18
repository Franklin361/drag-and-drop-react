import { ContainerCards, Title } from "./components"
import { data } from "./assets"
import { Status } from "./interfaces"

const containers: Status[] = ['good', 'normal', 'bad']

const App = () => {
  return (
    <div className="container-main flex">
      <Title />
      <div className="grid">
        {
          containers.map(container => (
            <ContainerCards items={data} status={container} key={container} />
          ))
        }
      </div>
    </div>
  )
}
export default App
