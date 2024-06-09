import Logo from "@/assets/logo.svg"
import Search from "./Search"

const Header = () => {
  return (
    <>
      <div className="flex items-center shadow-md h-24">
          <div className="flex items-center justify-between w-full m-2 sm:m-36">
            <img src={Logo} alt="" width={200}/>
            <Search />
          </div>
      </div>
    </>
  )
}

export default Header