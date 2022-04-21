import Header from '../components/Header/Header';
import History from '../components/Main/History/History';
import Techs from '../components/Main/Techs/Techs';

function IndexPage() {
    return (
        <div>
            <Header></Header>
            <main>
                {/* <History></History> */}
                <Techs></Techs>
            </main>
        </div>
    )
};

export default IndexPage