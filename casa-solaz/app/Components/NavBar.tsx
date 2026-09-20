import Logo from "@/app/Components/Logo";

export default function NavBar(){

    return(
        <nav className="fixed flex h-[7vh] justify-center w-full bg-[#E8DBD8]/0 text-[#E8D8D8] backdrop-blur-lg font-cormorant">
            <main className="flex container w-full justify-between items-center px-4">
                <div>
                    <Logo className="h-12 w-auto text-[#E8D8D8]"/>
                </div>
                <ul className="flex flex-row space-x-4">
                    <li className="hover:text-[#3A4235]"><a href="">Home</a></li>
                    <li className="hover:text-[#3A4235]"><a href="/about">About Us</a></li>
                    <li className="hover:text-[#3A4235]"><a href="/FAQs">FAQs</a></li>
                    <li className="hover:text-[#3A4235]"><a href="/contact">Contact Us</a></li>
                </ul>
            </main>
        </nav>
    )
}