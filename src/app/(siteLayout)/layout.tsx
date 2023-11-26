import FooterPage from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";


export default function SiteLayout({ children }: { children: React.ReactNode }) {

    return (
        <section>
            <Navbar />
                {children}
            <FooterPage />
        </section>
    )
}