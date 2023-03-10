export default function Finance() {
    return (
        <>
            <div className='font-bold p-5 pb-12 bg-green-400 text-stone-50 text-2xl text-center'>
                <h1>Finance App</h1>
            </div>

            <div className='font-semibold text-stone-600 grid grid-cols-4 m-auto -mt-9 max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md place-items-center bg-stone-100'>
                <p>Month</p>
                <p>Income</p>
                <p>Expenses</p>
                <p>Balance</p>
            </div>

            <div className='font-semibold text-stone-600 flex justify-center smartphone:space-x-3 tablet:space-x-10 inter:space-x-20 desktop:space-x-40 items-center m-auto max-w-[980px] min-h-[100px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
                <p>Date</p>
                <p>Category</p>
                <p>Description</p>
                <p>Value</p>
                <button type='submit' className='font-bold text-white bg-green-400 w-[50px] mb[20px] rounded-lg hover:shadow-md hover:ease-in-out duration-200'>Add</button>
            </div>

            <div className='m-auto max-w-[980px] min-h-[300px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
                <table className='table-auto text-stone-600 w-full text-center'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody className='font-mono text-gray-600'>
                        <tr>
                            <td>Date xx</td>
                            <td>Category xx</td>
                            <td>Title xx</td>
                            <td>Value xx</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </>
    )
}