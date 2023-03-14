import { Item } from "../types/Item"
import { formatDate } from "../helpers/dateFilter"
import { categories } from "../data/categories"
type Props = {
    item: Item
}

export default function TableItem({ item }: Props) {

    return (
        <tr className='h-10 border bg-stone-300 text-gray-500'>
            <td>{formatDate(item.date)}</td>
            <td className={`text-white font-bold ${item.category == 'food' ? 'bg-orange-500' : ''}`}>{categories[item.category].title}</td>
            <td>{item.description}</td>
            <td className={`${categories[item.category].expense === true ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}`}>$ {item.value}</td>
        </tr>
    )
}