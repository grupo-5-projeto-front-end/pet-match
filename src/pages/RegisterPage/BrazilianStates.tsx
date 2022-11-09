export const BrasilianStates = () => {

    const states = [
        'AC','AL','AP','AM','BA',
	    'CE','DF','ES','GO','MA',
        'MT','MS','MG','PA','PB',	
        'PR','PE','PI','RJ','RN',
  	    'RS','RO','RR','SC','SP',
	    'SE','TO'	
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