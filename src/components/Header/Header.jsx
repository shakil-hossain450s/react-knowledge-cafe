import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <header className="border-b-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;