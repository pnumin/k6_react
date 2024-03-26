export default function TailInput({type,inputRef, ph, handleChange}) {
  return (
    <input type={type}  
           ref={inputRef}
           onChange={handleChange} 
           className="bg-gray-50 border
                       border-gray-300
                       text-gray-900 
                       text-sm rounded-lg
                       focus:ring-blue-500
                       focus:border-blue-500 
                       block w-full p-2.5" 
                       placeholder={ph}  />
  )
}
