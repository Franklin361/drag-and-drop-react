import { Data } from "../interfaces"

export const CardItem = ({ id, content, status }: Data) => {
    return (
        <div
            className="card-container"

        >
            <p>{content}</p>
        </div>
    )
}