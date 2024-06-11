import { Button } from "../ui/button"



const InfinityScroll = ({ action, text }) => {
  return (
    <>
      <Button className="w-32 my-7 transition-all rounded-primary sm:rounded-full hover:rounded-primary" onClick={action}>
          {text}        
      </Button> 
    </>
  )
}

export default InfinityScroll