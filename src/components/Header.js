import Logo from "../images/logo.png";

function Header() {
    return (
        <header className=" h-10 border-b-1 border-blue-600 shadow-lg flex justify-evenly p-2 ">
            <div className=" justify-center align-middle ">
                <img src={Logo} alt=""/>
            </div>
            <div className=" align-middle ">
                <button className=" bg-blue-600 py-1 px-2 text-white rounded-md text-sm ">Teams</button>
            </div>
            
        </header>
    )
}

export default Header
