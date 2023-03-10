export default function Finance() {
    return (
        <>
            <div className='font-bold p-5 pb-12 bg-green-400 text-stone-50 text-2xl text-center'>
                <h1>Finance App</h1>
            </div>

            <div className='font-semibold grid grid-cols-4 m-auto -mt-9 max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md place-items-center bg-stone-100'>
                    <p>Month</p>
                    <p>Income</p>
                    <p>Expenses</p>
                    <p>Balance</p>
            </div>

            <div className='font-semibold flex flex-auto justify-center smartphone:space-x-3 tablet:space-x-10 laptop:space-x-20 items-center m-auto max-w-[980px] min-h-[100px] mb-[40px] rounded-t-sm shadow-md bg-stone-100'>
                    <p>Date</p>
                    <p>Category</p>
                    <p>Description</p>
                    <p>Value</p>
                    <button type='submit' className='font-bold text-white bg-green-400 w-[50px] rounded-lg hover:shadow-md hover:ease-in-out duration-200' >Add</button>
            </div>
        </>
    )
}