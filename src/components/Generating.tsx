import { loading } from "@/assets"
import Image from "next/image";
import Loader from "./design/Loader";



// Default values shown  
// Default values shown


interface GeneratingProps {
    className: string;
}

const Generating: React.FC<GeneratingProps> = ({ className }) => {
  
  return (
  
  <div
    className={`flex items-center h-[3.5rem] px-6  bg-n-8/80 rounded-[1.7rem]
    ${className || ''}
    text-base`}>

   <Loader />
    <div className="ml-4 font-code">AI is generating..</div>
  </div>
  )
}

export default Generating