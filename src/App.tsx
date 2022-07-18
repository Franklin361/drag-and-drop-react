type Status = 'good' | 'bad' | 'normal'
interface Data {
  id: number
  content: string
  status: Status
}

const data: Data[] = [
  {
    id: 1,
    content: 'Aqua-man',
    status: 'bad'
  },
  {
    id: 2,
    content: 'Flash',
    status: 'good'
  },
  {
    id: 3,
    content: 'Green Lantern',
    status: 'good'
  },
]

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

export const Title = () => {
  return (
    <div className="title flex">
      <h1>Creating Drag & Drop</h1>
      <span>( without external libraries )</span>
    </div>
  )
}

interface Props {
  items: Data[]
  status: Status
}

export const ContainerCards = ({ items = [], status }: Props) => {
  return (
    <div className="layout-cards">
      <p>{status} hero</p>
      {
        items.map(item => (
          status === item.status && <CardItem key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export const CardItem = ({ id, content, status }: Data) => {
  return (
    <div className="card-container">
      <p>{content}</p>
    </div>
  )
}