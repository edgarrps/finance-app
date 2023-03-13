import { Item } from "../types/Item"
import { formatDate } from "../helpers/dateFilter"
import { categories } from "../data/categories"
type Props = {
    item: Item
}

export default function TableItem({ item }: Props) {

    return (
        <tr className='h-10 border'>
            <td>{formatDate(item.date)}</td>
            <td className={`text-white font-bold ${item.category == 'food' ? 'bg-orange-500' : ''}`}>{categories[item.category].title}</td>
            <td>{item.description}</td>
            <td>$ {item.value}</td>
        </tr>
    )
}