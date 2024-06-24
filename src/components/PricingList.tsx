import { features } from "process";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import Image from "next/image";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
     {pricing.map((item) => (
        <div 
        key={item.id} 
        className="
        w-[19rem] max-lg:w-full px-6 bg-n-8 border border-n-6
        rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4
        [&>h4]:first:text-color-2  [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
         <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-4 text-n-1/50">
            {item.description}
            </p>

        <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
             <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
             </>
            )}
        </div>
            <Button className="w-[20rem] mb-6 " href={item.price ? '/pricing' : 'mailto:'} white={!!item.price}>
              {item.price? 'Get Started' : 'Contact Us'}
            </Button>
 
            <ul>
                {item.features.map((features, index) => (
                    <li key={index} className="flex items-start py-5 border-t border-n-6">
                        <Image src={check} width={24} height={24} alt="check" className="pt-[0.4rem]"/>
                        <p className="body-2 ml-4 text-sm font-code">{features}</p>
                    </li>
                ))}
            </ul>
         </div>
     ))}
    </div>
  )
}

export default PricingList