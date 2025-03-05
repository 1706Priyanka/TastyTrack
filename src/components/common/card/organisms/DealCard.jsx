import { dealsUrl } from "../../../../constants"
const DealCard = (deal)=>{
    return (
        <div className="p-[10px] m-[10px] rounded-lg border border-gray-500">
      
           <div className="flex w-[100%]">
            <img className="w-[70px] h-[60px]" src={dealsUrl+deal.deal.info.offerLogo}/>
            <div className="px-[6px] py-0"  >
                <h3 className="font-extrabold">{deal.deal.info.header}</h3>
                <p className="font-bold">{deal.deal.info.description}</p>
            </div>  
           </div>
      
        </div>
    )
}

export default DealCard