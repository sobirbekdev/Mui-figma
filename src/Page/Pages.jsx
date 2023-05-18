import { Footer } from "../Companents/Footer/Footer";
import { Header } from "../Companents/Header/Header";
import { Main } from "../Companents/Main/main";
import { ProfilCard } from "../Companents/Section/ProfilCard";
import { Section } from "../Companents/Section/Section";

export function Page() {

    return (
        <div>
            <Header />
            <Main />
            <div className="mt-40">
                <Section />
                <ProfilCard/>
                <Footer/>
            </div>
        </div>
    )
}