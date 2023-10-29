const Button = ({label , iconURL, textColor,backgroundColor, borderColor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
     "leading-none bg-coral-red text-white border-coral-red"} rounded-full ${fullwidth && `w-full`}"}`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrowright icon" className="ml-2 rounded-full w-5 h-5" /> }
    </button>
  )
}

export default Button