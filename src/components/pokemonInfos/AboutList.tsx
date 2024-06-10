
const AboutList = ({height, weight, abilities}) => {
  return (
    <>
      <div className="font-mono flex flex-col m-7">
        <div className="mb-5">
          <h1 className="font-extrabold text-2xl">About</h1>
        </div>
        <div className="flex justify-between font-semibold mb-2">
          <h3>
            height:
          </h3>
          <p className="font-extralight text-neutral-600 mb-2">
            {height / 10} m
          </p>
        </div>
        <div className="flex justify-between font-semibold mb-2">
          <h3>
            weight:
          </h3>
          <p className="font-extralight text-neutral-600 mb-2">
            {weight / 10} kg
          </p>
        </div>
        <div className="flex justify-between font-semibold">
          <h3>
            abilities:
          </h3>
          <p className="font-extralight text-neutral-600">
            {
              abilities.map((item) => item.ability.name.replaceAll('-', ' ')).join(', ')
            } 
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutList