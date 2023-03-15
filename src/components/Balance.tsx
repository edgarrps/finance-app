import { formatCurrentMonth } from "../helpers/dateFilter"
type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
    balance: number
}

export default function Balance({ currentMonth, onMonthChange, income, expense, balance }: Props) {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) + 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }


    return (
        <div className='font-semibold text-stone-600 m-auto -mt-9 max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
            <div className='font-mono flex items-center justify-center space-x-4 pt-2 pb-2 bg-stone-200'>
                <p onClick={handlePrevMonth} className='cursor-pointer text-2xl w-[33px] bg-green-400 text-center rounded-lg hover:ease-in-out duration-200 hover:bg-green-300 hover:shadow-md'>&#128072;</p>
                <span>{formatCurrentMonth(currentMonth)}</span>
                <p onClick={handleNextMonth} className='cursor-pointer text-2xl w-[33px] bg-green-400 text-center rounded-lg hover:ease-in-out duration-200 hover:bg-green-300 hover:shadow-md'> &#128073;</p>
            </div>
            <div className='grid grid-cols-3 place-items-center align-center h-20'>
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Entrada</p>
                    <p className={`font-mono ${income > 0 ? 'text-green-500' : ''}`}>R$ {income > 0 ? (income.toFixed(2)).replace(/\./g,',') : income}</p>
                </div>
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Saída</p>
                    <p className={`font-mono ${expense > 0 ? 'text-red-500' : ''}`}>R$ {expense > 0 ? (expense.toFixed(2)).replace(/\./g,',') : income}</p>
                </div>
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Saldo</p>
                    <p className={`font-mono ${balance > 0 ? 'text-green-500' : balance < 0 ? 'text-red-500' : ''}`}>{`${balance < 0 ? 'R$ ' + (Math.abs(balance).toFixed(2)).replace(/\./g,',') + ' D' : balance > 0 ? 'R$ ' + (Math.abs(balance).toFixed(2)).replace(/\./g,',') + ' C' : 'R$ ' + Math.abs(balance)}`}</p>
                </div>
            </div>
        </div>
    )
}