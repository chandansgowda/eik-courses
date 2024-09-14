import Cards from "../components/Cards";
import Carsouel from "../components/Carosoel";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Header from "../components/Header";



function Home():JSX.Element{
    return(
        <>
        <Navbar/>
        <Header/>
        <Cards/>
        <Footer/>
        </>
    )
}

export default Home;