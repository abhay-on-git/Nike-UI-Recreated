import { services } from "../Constants"
import ServiceCard from "../Components/ServiceCard"
const Services = () => {
  return (
    <section className="mx-container
    flex justify-center items-center flex-wrap gap-9">
    {services.map((service)=>(
      <ServiceCard
      key={service.label} {...service}
        />
    ))}
    </section>
  )
}

export default Services