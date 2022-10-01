import React from 'react'

const ListaImagems = () => {
   return (
      pics.map((pic, key) => (
			<Imagem 
				pic={pic.src.small}
				key={pic.id}
				alt={pic.alt} 
			/>
		))
   )
}

export default ListaImagems