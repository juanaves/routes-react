import React from 'react'
import error from './Imagenes/error-404.jpg'

const PageNotFound = () => (
  <section className="PageNotFound">
    <h3>Pagina no Encontrada</h3>
    <img scr={error} alr="error 404"/>
  </section>
)

export default PageNotFound