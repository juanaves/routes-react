import React from 'react'
import error from './../../Imagenes/error_404.jpg'

const PageNotFound = () => (
  <section className="PageNotFound">
    <h3>Pagina no Encontrada</h3>
    <img scr={error} alt="error 404"/>
  </section>
)

export default PageNotFound