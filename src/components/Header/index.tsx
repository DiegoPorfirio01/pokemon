import Logo from "@/assets/logo.svg"
import Search from "./Search"

const Header = () => {
  return (
    <>
      <header className="flex items-center shadow-md h-5/6 sm:h-24 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full m-2 sm:m-36 gap-2">
          <img src={Logo} alt="" width={200}/>
          <Search />
        </div>
      </header>
    </>
  )
}

export default Header