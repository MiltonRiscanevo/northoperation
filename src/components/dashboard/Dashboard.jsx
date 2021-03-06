import React from 'react'
import './dashboard.css'
import Datatrainer from '../../DataTrainer.json'

const Dashboard = () => {
  return (
    <div className='container_dash'>
        <h2>Capacitaciones</h2>
        {Datatrainer.map((item,index)=>{
            return(
                <div key={index} className='meeting'>
                    <h2>{item.Capacitador}</h2>
                    <div>
                        Entidad:{item.Entidad}
                        <br />
                        Tipo capatitación: {item.TipoCapacitacion}
                        <br />
                        Fecha:{item.Fecha}
                        <br />
                        Hora:{item.Hora}
                        <br />
                        <a href={item.LinkAcceso} target="_blank">Link Acceso</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Dashboard