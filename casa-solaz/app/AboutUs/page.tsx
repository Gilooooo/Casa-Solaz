import FooterSection2nd from "../Components/FooterSection2nd";
import NavBar from "../Components/NavBar";
import PageIndicator from "../Components/PageIndicator";

export default function AboutUsPage(){
    return(
        <>
            <NavBar darkText />
            <PageIndicator namePage="About Us" />
            <FooterSection2nd />
        </>
    )
}