import FAQsSection from "../Components/FAQs";
import FooterSection2nd from "../Components/FooterSection2nd";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import PageIndicator from "../Components/PageIndicator";

export default function FAQsPage() {
    return (
        <>
            <NavBar darkText />
            <PageIndicator namePage="FAQs" />   
            <FAQsSection />
            <FooterSection2nd />
            <Logo />
        </>
    );
}
