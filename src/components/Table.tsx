import { Item } from "../types/Item"
import { formatDate } from "../helpers/dateFilter"
type Props = {
    list: Item[]
}

export default function Table({ list }: Props) {


    return (
        <div className='m-auto max-w-[980px] min-h-[300px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
            <div className='pt-3'>
                <table className='table-auto text-stone-600 w-full text-center'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Value </th>
                        </tr>
                    </thead>
                    <tbody className='font-mono text-gray-600'>
                        {list.map((item, index) => (
                            <tr key={index} className='h-10'>
                                <td>{formatDate(item.date)}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}