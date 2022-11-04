export const CategoryPet = () => {

    const states = [
        "Gato","Cachorro","Aves","Peixes","Répteis",
	    "Outros"	
    ]

    return (
        <>
            {
                states.map((e: string, index: number) => (
                    <option value={e} key={index}>{e}</option>
                ))
            }
        </>
    )
}