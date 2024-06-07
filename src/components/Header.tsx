import Logo from "@/assets/logo.svg"
import Search from "./Search"

const Header = () => {
  return (
    <>
      <div className="flex items-center shadow-md h-24">
          <div className="m-2 w-full">
            <img src={Logo} alt="" width={200}/>
          </div>
          <Search />
      </div>
    </>
  )
}

export default Header