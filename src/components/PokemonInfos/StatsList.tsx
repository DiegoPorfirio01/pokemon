

const StatsList = ({stats}) => {
  return (
    <>
     <div className="font-mono flex flex-col m-7">
        <div className="mb-5">
          <h1 className="font-extrabold text-2xl">
            stats
          </h1>
        </div>
          {
            stats.map(({base_stat, stat: {name}}, index) => 
              <div className="flex flex-col" key={index}>
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {name.replaceAll('-', ' ')}
                  </h3>
                  <p className="font-extralight text-neutral-600">
                     {base_stat}
                  </p>
                </div>
              </div>
            )
          }
      </div>
    </>
  )
}

export default StatsList