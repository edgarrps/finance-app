import { Item } from "../../types/Item"
import TableItem from "./TableItem"
type Props = {
    list: Item[]
    remove: (value:number) => void
}

export default function Table({ list, remove }: Props) {


    return (
        <div className='m-auto max-w-[980px] min-h-[300px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
            <div className='pt-3'>
                <table className='table-fixed text-stone-600 w-full text-center'>
                    <thead>
                        <tr className='h-10'>
                            <th className='w-40 smartphone:w-10 desktop:text-xl inter:text-lg smartphone:text-sm'>Data</th>
                            <th className='w-40 smartphone:w-10 desktop:text-xl inter:text-lg smartphone:text-sm'>Categoria</th>
                            <th className='smartphone:w-20 desktop:text-xl inter:text-lg smartphone:text-sm'>Descrição</th>
                            <th className='w-20 smartphone:w-10 desktop:text-xl inter:text-lg smartphone:text-sm'>Valor</th>
                            <th className='w-[6px] smartphone:w-4 desktop:text-xl inter:text-lg smartphone:text-sm'></th>
                        </tr>
                    </thead>
                    <tbody className='font-mono text-gray-600'>
                        {list.map((item, index) => (
                            <TableItem key={index} item={item} remove={remove}/>
                        ))}
                </tbody>
            </table>
        </div>
        </div >
    )
}