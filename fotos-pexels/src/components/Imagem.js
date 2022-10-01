import React from 'react'

const Imagem = ({pic, key, alt}) => {
   return (
      <div key={key}>
         <img src={pic} alt={alt} />
      </div>
   )
}

export default Imagem