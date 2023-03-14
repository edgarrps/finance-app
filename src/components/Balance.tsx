import { formatCurrentMonth } from "../helpers/dateFilter"
type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
}

export default function Balance({ currentMonth, onMonthChange }: Props) {
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
        <div className='font-semibold text-stone-600 grid grid-cols-4 m-auto -mt-9 max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md place-items-center bg-stone-100'>
            <p className='font-mono'>
                <span onClick={handlePrevMonth} className='cursor-pointer text-2xl rounded-lg hover:scale-105 hover:ease-in-out duration-200'>&#128072; </span>
                {formatCurrentMonth(currentMonth)}
                <span onClick={handleNextMonth} className='cursor-pointer text-2xl rounded-lg hover:scale-125 hover:ease-in-out duration-200'> &#128073;</span>
            </p>
            <p>Income</p>
            <p>Expenses</p>
            <p>Balance</p>
        </div>
    )
}