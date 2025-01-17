import Image from "next/image";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

interface NotificationProps {
    className?: string;
    title?: string;
}

const Notification: React.FC<NotificationProps> = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
 
       <Image src={notification1} width={62} height={62} alt="Image" className="rounded-xl" />  
          
     
                      
        <div className="flex-1 space-y-1">
          <h6 className="mb-1 font-semibold text-base">{title}</h6>
              <div className="flex items-center justify-between">  
                <ul className="flex -m-0.5">
                 {notificationImages.map((item, index) => (
                  <li key={index} className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                   <Image src={item} width={62} height={62} alt="Image" className="rounded-xl" />    
                  </li>  
                ))}     
              </ul>
           
              <div className="body-2 text-n-13 p-1">1m ago</div>
          </div>  
       </div>
    </div>
  )
}

export default Notification