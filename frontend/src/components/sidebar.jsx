const Sidebar = ({ setActive }) => {
    return(
        <>
            <div className='fixed top-5 left-5 h-[95vh] w-52 flex flex-col items-center bg-rule-30 text-white p-4 gap-2 rounded-xl'>
                <div  className='m-10'>
                    <h1 className='text-xl font-bold'>ThinkPal</h1>
                </div>

                <div className='flex flex-col w-full h-[10%] gap-5'>
                    {/*<button className='hover:bg-rule-10 p-5 rounded-xl' onClick={() => setActive("Dashboard")}>Dashboard</button>*/}
                    <button className='hover:bg-rule-10 hover:text-black p-5' onClick={() => setActive("Notes")}>Notes</button>
                    <button className='hover:bg-rule-10 hover:text-black p-5' onClick={() => setActive("Quizes")}>Quiz</button>
                    {/*<button className='hover:bg-rule-10 p-5 rounded-xl' onClick={() => setActive("Routines")}>Routines</button>*/}
                </div>
            </div>                                                 
        </>
    )
}

export default Sidebar