import React from 'react'
import error from './../../Imagenes/error_404.jpg'

const PageNotFound = () => (
  <section className="PageNotFound">
    <h3></h3>
    <img src={error} alt="error 404" width="650" height="400"/>
  </section>
)

export default PageNotFound