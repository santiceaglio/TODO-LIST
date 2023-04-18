const Todo = ({todo})=>{
    return (
        <div className="felx item-center justify-between p-4 bg-white border-b border-solid border-gray-600 flex ">
            <div className="flex item-center">
                <span className="border-solid  border border-gray-500 rounded full p-3 cursor-pointer h-5 w-5 self-center"></span>
            
            <p className="pl-3 self-center text-black">
            {todo.title}
            </p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in self-end" src="/close-icon.svg" alt="Close Icon"/>
        </div>
    )
}

export {Todo}