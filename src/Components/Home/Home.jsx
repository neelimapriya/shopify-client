import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Contact from "../FAQ/Contact";
import Faq from "../FAQ/Faq";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className=" bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
            <Banner></Banner>
            <Brands></Brands>
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;