import { offer } from "../assets/images"
import Button from "../Components/Button"
import {arrowRight} from "../assets/icons"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container ">
      <div className="flex-1 sm:m-auto">
        <img src={offer} alt="offerImg" 
        width={773} height={687}
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col max-sm:w-full xl:ml-20">
        <h1 className="text-4xl font-bold font-palanquin lg:max-w-lg capitalize">Special <span className="text-coral-red">Offer</span></h1>
        <p className="mt-6 lg:max-w-lg text-slate-gray info-text">Ensuring prinium comfort & style
          our meteculously crafted footwear is designed
          to elevate your experience provideing you with
          unmatched quality, innovation and touch of elegence. 
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-gray info-text">
          Our dedication to detail and exellence ensures your <br />satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now"
        iconURL={arrowRight}/>
        <Button label="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers