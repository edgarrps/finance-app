import { useState } from 'react'
import { Item } from '../types/Item'
import { categories } from '../data/categories'
import { newDateAdjusted } from '../helpers/dateFilter'


type Props = {
    addItem: (item: Item) => void
}

export default function Form({ addItem }: Props) {
    const [dateField, setDateField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [descField, setDescField] = useState('')
    const [valueField, setValueField] = useState(0)

    let categoryKeys: string[] = Object.keys(categories)

    const handleClick = () => {
        let errors: string[] = []

        if (isNaN(new Date(dateField).getTime()))  errors.push('Data inválida!')
        if (!categoryKeys.includes(categoryField)) errors.push('Categoria inválida!')
        if (descField === '') errors.push('Descrição vazia!')
        if (valueField <= 0) errors.push('Valor inválido!')
        if (errors.length > 0) alert(errors.join("\n"))
        else {
            addItem({
                id: Math.floor(Math.random() * 10000),
                date: newDateAdjusted(dateField),
                category: categoryField,
                description: descField,
                value: valueField
            })
            clearFields()
        }
    }
    const clearFields = () => {
        setDateField('')
        setCategoryField('')
        setDescField('')
        setValueField(0)
    }

    return (
        <div className='font-semibold text-stone-600
        desktop:flex desktop:justify-center desktop:space-x-10 desktop:space-y-0
        inter:flex inter:justify-center inter:space-y-0
        tablet:flex tablet:justify-center tablet:space-x-2 tablet:space-y-0
        smartphone: space-y-5
        items-center m-auto max-w-[980px] min-h-[100px] mb-[20px] 
        rounded-t-sm shadow-md bg-stone-100'>

            <div className='grid grid-row-2 place-items-center space-y-1 pt-2'>
                <label className='font-extrabold'>Data</label>
                <input
                    type='date'
                    value={dateField}
                    onChange={e => setDateField(e.target.value)}
                    className='desktop:w-[123px]
                    inter:w-[113px]
                    tablet:w-[93px]
                    smartphone:w-[200px] smartphone:text-center'
                />
            </div>
            <div className='grid grid-row-2 place-items-center space-y-1 pt-2'>
                <label className='font-extrabold'>Categoria</label>
                <select value={categoryField}
                    onChange={e => setCategoryField(e.target.value)}
                    className='text-center
                    desktop:w-[123px]
                    inter:w-[113px]
                    tablet:w-[93px]
                    smartphone:w-[200px]'>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </select>
            </div>
            <div className='grid grid-row-2 place-items-center space-y-1 pt-2'>
                <label className='font-extrabold'>Descrição</label>
                <input value={descField}
                    type='text'
                    maxLength={20}
                    onChange={e => setDescField(e.target.value)}
                    className='pl-2
                    desktop:w-[123px]
                    inter:w-[113px]
                    tablet:w-[93px]
                    smartphone:w-[200px]'
                />
            </div>
            <div className='grid grid-row-2 place-items-center space-y-1 pt-2'>
                <label className='font-extrabold'>Valor</label>
                <input value={valueField}
                    onChange={e => setValueField(parseFloat(e.target.value))}
                    type='number'
                    className='text-center
                    
                    desktop:w-[123px] desktop:pl-3
                    inter:w-[113px] inter:pl-3
                    tablet:w-[93px] tablet:pl-3
                    smartphone:w-[200px] smartphone:pl-0'
                />
            </div>
            <div className='grid grid-row-2 place-items-center tablet:pb-0 smartphone:pb-5'>
                <label className='text-xs'>‎</label>
                <button onClick={handleClick} className='font-extrabold text-2xl text-white bg-green-400 w-[33px] rounded-lg hover:shadow-md hover:ease-in-out duration-200 hover:bg-green-300'>+</button>
            </div>
        </div>
    )
}
