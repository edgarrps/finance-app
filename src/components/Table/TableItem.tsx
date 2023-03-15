import { Item } from "../../types/Item"
import { formatDate } from "../../helpers/dateFilter"
import { categories } from "../../data/categories"

type Props = {
    item: Item
    remove:any
}

export default function TableItem({ item, remove }: Props) {

    return (
        <tr onClick={() => remove(item.id)} className={`h-10 border text-gray-500 ${categories[item.category].expense === true ? 'bg-red-200' : 'bg-green-200'}`}>
            <td className='desktop:text-xl inter:text-lg smartphone:text-xs'>{formatDate(item.date)}</td>
            <td className={` desktop:text-xl inter:text-lg smartphone:text-xs text-white font-bold ${item.category == 'food' ? 'bg-orange-500' : item.category == 'gain' ? 'bg-green-600' : item.category == 'rent' ? 'bg-slate-400' : item.category == 'bill' ? 'bg-yellow-500' : item.category == 'refund' ? 'bg-lime-500' : item.category == 'monthly' ? 'bg-teal-600' : item.category == 'health' ? 'bg-red-700' : item.category == 'debt' ? 'bg-rose-500' :'bg-purple-500'}`}>{categories[item.category].title}</td>
            <td className='desktop:text-xl inter:text-lg inter:font-thin tablet:text-base tablet:font-normal tablet:text-base smartphone:text-xs'>{item.description}</td>
            <td className={`desktop:text-xl inter:text-lg tablet:text-base smartphone:text-xs ${categories[item.category].expense === true ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}`}>R$ {(item.value.toFixed(2)).replace(/\./g,',')}</td>
        </tr>
    )
}