import{
  Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality
} from './Sections';

import Nav from './Components/Nav';


const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>
  </main>
);
export default App;