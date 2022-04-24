import Header from '../components/Header/Header';
import Apresentation from '../components/Main/Apresentation/Apresentation';
import Footer from '../components/Footer/Footer';

function IndexPage() {
    return (
        <div>
            <Header></Header>
            <main className='mainPageIndex'>
                <Apresentation></Apresentation>
            </main>
            <Footer></Footer>
        </div>
    )
};

export default IndexPage