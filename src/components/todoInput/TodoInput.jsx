const TodoInput = () =>{
    return (
        <div className= "mt-6 relative flex justify-center items-center">
            <div className="absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <span className="border border-gray-500 border-solid p-3 "></span> */}
            </div>
            <input type="text" className="text-black focus:shadow-lg font-inter focus:shadow-gray-800 pl-5 w-full py-4 bg-white-700 rounded-xl outline-none transition-all duration-300 ease-in-out" 
            placeholder="Write your task here..."
            />
        </div>
    )
}

export { TodoInput }