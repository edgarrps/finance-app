export default function Form() {
    return (
        <div className='font-semibold text-stone-600 flex justify-center smartphone:space-x-3 tablet:space-x-10 inter:space-x-20 desktop:space-x-40 items-center m-auto max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
            <p>Data</p>
            <p>Categoria</p>
            <p>Descrição</p>
            <p>Valor</p>
            <button type='submit' className='font-extrabold text-2xl text-white bg-green-400 w-[33px] rounded-lg hover:shadow-md hover:ease-in-out duration-200 hover:bg-green-300'>+</button>
        </div>

    )
}