import Balance from "../components/Balance";
import Form from "../components/Form";
import List from "../components/List";

export default function Finance() {
    return (
        <>
            <div className='font-bold p-5 pb-12 bg-green-400 text-stone-50 text-2xl text-center'>
                <h1>Finance App</h1>
            </div>

            <Balance />

            <Form />

            <List />
        </>
    )
}