export default function Table() {

    
    return (
        <div className='m-auto max-w-[980px] min-h-[300px] mb-[20px] rounded-t-sm shadow-md bg-stone-100'>
            <div className='pt-3'>
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
                        <tr className='h-10'>
                            <td>Date xx</td>
                            <td>Category xx</td>
                            <td>Title xx</td>
                            <td>Value xx</td>               
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}