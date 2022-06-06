import React from 'react'
import './database.css'

const DataBase = () => {
  return (
    <div>
        <h2>Base de datos de entidades</h2>
        <table>
            <thead>
                <tr>
                    <th>Entidad</th>
                    <th>Fecha de socializacion</th>
                    <th>Confirmacion socializacion</th>
                    <th>Mesa trabajo anexo 1</th>
                    <th>Confirmacion mesa trabajo 1</th>
                    <th>Envio de correo cierre anexos</th>
                    <th>Comunicacion Telefonica</th>
                    <th>Correo actualizacion de datos</th>
                    <th>Fecha Capacitacion Operadores</th>
                    <th>Confirmacion de capacitacion</th>
                    <th>Fecha Capacitacion Beneficiarios</th>
                    <th>Confirmacion de capacitacion</th>
                    <div className='data_information'>
                    <tr>
                        <h3>Informacion de contacto</h3>
                        <th>Nombre contacto</th>
                        <th>Mail Contacto</th>
                        <th>Telefono contacto</th>
                    </tr>
                    <tr>
                        <h3>Informacion secretaria Municipal</h3>
                        <th>Nit secretaria</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Telefono</th>
                        <th>Representante Legal</th>
                        <th>E-mail</th>
                        <th>Portal web</th>
                    </tr>
                    </div>
                    
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default DataBase