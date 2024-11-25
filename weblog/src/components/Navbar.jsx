const Navbar = () => {
    return ( 
        
        <nav className="bg-gradient-to-r from-blue-700 to-sky-400 h-20 max-w-[1080px] text-black box-border p-7 flex justify-end shadow-xl shadow-transparent text-[20px] font-semibold font-mono">
            {/* <a href="" className=""><img src='./src/assets/YG_logo.svg' className="w-20 h-20"  alt="" /></a> */}
            <a href="./blog" className="ml-10 pb-6">BLOG</a>
            <a href=".about" className="ml-10 pb-6">ABOUT</a>
            <a href=".login" className="ml-10 pb-6">LOGIN</a>
        </nav>
        
     );
}
 
export default Navbar;
