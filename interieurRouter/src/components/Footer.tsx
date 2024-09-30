import Logo from "../assets/img/Logo (1).png";
import FooterChair from "../assets/img/Footer.png";

export default function Footer(){
    return <div className="flex bg-[#F1F1F1] justify-between pt-24">
        <div className="ml-20 border-t-2 border-black w-4/5">
            <img className="pt-10" src={Logo} alt="" />
            <div>(012) 8967453</div>
            <div>woodies@gmail.com</div>
            <div>Jakarta, Indonesia</div>
        </div>
        <img src={FooterChair} alt="" />
    </div>
}