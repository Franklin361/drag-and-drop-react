import { Data, Status } from "../interfaces"
import { CardItem } from "./CardItem"

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
