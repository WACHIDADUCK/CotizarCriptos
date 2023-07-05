import styled from '@emotion/styled'


const Contenedor = styled.div`
color: #FFF;
font-family: "Lato", sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`

const Imagen = styled.img`
display: block;
width: 120px;
`

const Texto = styled.p`
font-size: 18px;
span{
  font-weight: 700;
}
`

const Precio = styled.p`
font-size: 24px;
span{
  font-weight: 700;
}
`

const Resultado = (resultado) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado.resultado
  return (
    <Contenedor>
      <Imagen 
      src={`https://www.cryptocompare.com/${IMAGEURL}`} 
      alt="imagen cripto" 
      />
    <div>
     <Precio>El Precio es de : <samp>{PRICE}</samp></Precio>
     <Texto>El Precio más alto del día: <samp>{HIGHDAY}</samp></Texto>
     <Texto>El Precio más bajo del día: <samp>{LOWDAY}</samp></Texto>
     <Texto>Varoacoón útimas 24 horas: <samp>{CHANGEPCT24HOUR}</samp></Texto>
     <Texto>Última Actualización:<samp>{LASTUPDATE}</samp></Texto>
     </div>
    </Contenedor>
   
  )
}

export default Resultado
