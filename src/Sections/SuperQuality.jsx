import Button from "../Components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center
    max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col w-1/2 max-sm:w-full">
        <h1 className="text-4xl font-bold font-palanquin lg:max-w-lg capitalize">We Provide You <span className="text-coral-red">Super <br /> Quality</span> Shoes</h1>
        <p className="mt-6 lg:max-w-lg text-slate-gray">Ensuring prinium comfort & style
          our meteculously crafted footwear is designed
          to elevate your experience provideing you with
          unmatched quality, innovation and touch of elegence. 
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-gray">
          Our dedication to detail and exellence ensures your <br />satisfaction.
        </p>
        <div className="mt-11">
        <Button label="View details"/>
        </div>
      </div>
       <div className="flex-1 flex justify-center items-center">
           <img src={shoe8} alt="shoe8" 
           width={570} height={522}
           className="object-contain"/>
       </div>
    </section>
  )
}

export default SuperQuality