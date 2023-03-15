import { Item } from '../types/Item'


type Props = {
    addItem: (item: Item) => void
}

export default function Form({addItem} : Props) {

    const handleClick = () => {
        let newItem: Item = {
            date: new Date(2023, 2, 22),
            category: 'food',
            description: 'teste',
            value: 200.30
        }
        addItem(newItem)
    }

    return (
        <div className='font-semibold text-stone-600 flex justify-center smartphone:space-x-3 tablet:space-x-10 inter:space-x-20 desktop:space-x-40 items-center m-auto max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
                {/* <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Data</p>
                    <input value={date} type='calendar' />
                </div>            
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Categoria</p>
                    <input value={category} type='calendar' />
                </div>       
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Valor</p>
                    <input value={description} type='calendar' />
                </div>       
                <div className='grid grid-row-2 place-items-center'>
                    <p className='font-extrabold'>Valor</p>
                    <input value={value} type='calendar' />
                </div>     */}
                <p>Categoria</p>
            <p>Descrição</p>
            <p>Valor</p>
            <button onClick={handleClick} className='font-extrabold text-2xl text-white bg-green-400 w-[33px] rounded-lg hover:shadow-md hover:ease-in-out duration-200 hover:bg-green-300'>+</button>
        </div>

    )
}