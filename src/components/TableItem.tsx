import { Item } from "../types/Item"
import { formatDate } from "../helpers/dateFilter"

type Props = {
    item: Item
}

export default function TableItem({item}: Props) {

    return (
        <tr className='h-10'>
            <td>{formatDate(item.date)}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.value}</td>
        </tr>
    )
}