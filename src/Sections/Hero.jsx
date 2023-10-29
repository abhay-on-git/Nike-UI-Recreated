import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../Constants";
import  ShoeCard  from "../Components/ShoeCard"
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section id="Home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection.</p>
        <h1 className="text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold"><span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><span className="pt-4 bg-white text-center flex items-center"> <span className="text-coral-red font-bold mr-5">Nike</span>Shoes</span></h1>
        <p className="font-montserrat text-slate-gray tex-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals , quality <br/> comfort and innovation for your active life.</p>
        <Button label="Shop now" 
        iconURL = {arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat,index)=>(
          <div key={index}>
            <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
            <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-center items-center relative flex-1 mr-[-0.5%] xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
         src={bigShoeImg}
         alt="Shoe Collection" 
         width={610}
         height={500}
         className="object-contain relative z-10"
         />
         <div className=" absolute flex sm:gap-6 gap-4 bottom-[-10%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe , index)=> (
            <div key={index}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImg=
              {(shoe)=>setbigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
         </div>
      </div>
    </section>
  )
}

export default Hero