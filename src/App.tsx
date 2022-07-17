type Status = 'complete' | 'progress'
interface Data {
  id: number
  content: string
  status: Status
}
const data: Data[] = [
  {
    id: 1,
    content: 'Superman',
    status: 'complete'
  },
  {
    id: 2,
    content: 'Flash',
    status: 'progress'
  }
]

const App = () => {
  return (
    <div>
      <Title />
      <div>
        <ContainerCards items={data as any} status='complete' />
        <ContainerCards items={data as any} status='progress' />
      </div>
    </div>
  )
}
export default App

export const Title = () => {
  return (
    <>
      <h1>Creating Drag & Drop</h1>
      <span>(without external libraries)</span>
    </>
  )
}

interface Props {
  items: Data[]
  status: Status
}

export const ContainerCards = ({ items = [], status }: Props) => {
  return (
    <div>
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
    <div>
      <p>{content}</p>
      <span>{status}</span>
    </div>
  )
}