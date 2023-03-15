import { useEffect, useState } from 'react'
import { Item } from '../types/Item'
import { items } from '../data/Items'
import { categories } from '../data/categories'
import Balance from '../components/Balance'
import Form from '../components/Form'
import Table from '../components/Table/Table'
import { getCurrentMonth, filterListByMonth } from '../helpers/dateFilter'


export default function Finance() {

    const [list, setList] = useState(items)
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const balance = income - expense

    const handleAddItem = (item: Item) => {
        let newList = [...list]
        newList.push(item)
        setList(newList)
    }

    useEffect(() => {    
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth])

    useEffect(() =>{ 
        let counterIncome = 0
        let counterExpense = 0

        for (let i in filteredList) categories[filteredList[i].category].expense ? counterExpense += filteredList[i].value : counterIncome += filteredList[i].value
        setIncome(counterIncome)
        setExpense(counterExpense)
    }, [filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    return (
        <>
            <div className='font-bold p-5 pb-12 bg-green-400 text-stone-50 text-2xl text-center'>
                <h1>Finance App</h1>
            </div>

            <Balance onMonthChange={handleMonthChange} currentMonth={currentMonth} income={income} expense={expense} balance={balance} />

            <Form addItem = {handleAddItem} />

            <Table list={filteredList} />
        </>
    )
}