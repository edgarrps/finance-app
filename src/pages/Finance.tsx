import { useEffect, useState } from 'react'
import { Item } from '../types/Item'
import { Category } from '../types/Category'
import { items } from '../data/Items'
import { categories } from '../data/categories'
import Balance from '../components/Balance'
import Form from '../components/Form'
import Table from '../components/Table'
import { getCurrentMonth } from '../helpers/dateFilter'


const [list, setList] = useState(items)
const [filteredList, setFilteredList] = useState<Item[]>([])
const [currentMonth, setCurrentMonth] = useState(new Date(getCurrentMonth()))



export default function Finance() {
    return (
        <>
            <div className='font-bold p-5 pb-12 bg-green-400 text-stone-50 text-2xl text-center'>
                <h1>Finance App</h1>
            </div>

            <Balance />

            <Form />

            <Table />
        </>
    )
}