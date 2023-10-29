import Button from "../Components/Button"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between
    items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-md max-sm:text-[30px]
      font-palanquin">Sign Up from <span className="text-coral-red">Updates</span> & Newsletter</h3>
      <div className="flex w-full border-2 border-slate-gray py-2 px-5 rounded-full
      max-sm:py-0 max-sm:px-2">
        <input type="text" 
        placeholder="subscribe@nike.com"
        className="input border-none text-xl"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button
        label="Sign Up"
        fullWidth/>
         </div>
      </div>
    </section>
  )
}

export default Subscribe