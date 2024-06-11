import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


const CardInfo = ({pokemon}) => {
  return (
    <> 
      <Card 
        className={`shadow-current h-[500px] w-full sm:w-[400px] bg-${pokemon.types[0].type.name} p-5 rounded-3xl`}
      >
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-white font-mono capitalize">
            {pokemon.name.replaceAll('-', ' ')}
            <div className="flex gap-2">
            {
              pokemon.types.map((item, index) => 
                <div className={`drop-shadow-md p-2 rounded-xl bg-${item.type.name}`} key={index}>
                  <h3 className="text-white text-xs">
                      {item.type.name}
                  </h3>
                </div>
              )
            }
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 items-center mt-10">
          <img
            width={350}
            height={350}
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt="" 
          />
        </CardContent>
      </Card>
    </>
  )
}

export default CardInfo