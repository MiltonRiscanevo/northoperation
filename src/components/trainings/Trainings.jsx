import React from 'react'
import './trainee.css'
import ManualOperador from '../manual/ManualEntidadPagadora.pdf'
import PresentacionPagaduria from '../manual/CapacitacionEntidadPagadora.pptx'

const Trainings = () => {
  return (
    <div className='trainer_containt'>
      <div className='type_User'>
        <h3>Capacitaciones pagadurias</h3>
        <a href="http://40.90.221.254/SygnusHumano/ " target='_blank'>Ambiente de prueba</a>
        <h4>Usuarios de ambiente</h4>
        <div className='table_info'>
          <table>
            <tr>
              <th>Tipo</th>
              <th>Usuario</th>
              <th>Contrasena</th>
            </tr>
            <tr>
              <td>Administrador</td>
              <td>adminpagaduria</td>
              <td>adminpagaduria01.</td>
            </tr>
            <tr>
              <td>Operador</td>
              <td>operadorpagaduria</td>
              <td>operadorpagaduria01.</td>
            </tr>
            <tr>
              <td>Auditor</td>
              <td>auditorpagaduria</td>
              <td>auditorpagaduria01.</td>
            </tr>
          </table>
        </div>
        <div>
          <h4>Anexos de capacitacion</h4>
          <a href={ManualOperador} download="ManualEntidadPagadora.pdf">Manual Pagaduria</a>
          <br />
          <a href={PresentacionPagaduria} download="CapacitacionEntidadPagadora.pptx">Presentacion Pagaduria</a>

        </div>

      </div>
        <div className='type_User'>
          <h3>Capacitaciones Humano-Sygnus</h3>
          <div className='humano'>
            <div className='humano_soft'>
              <h4>Humano</h4>
              <a href="http://humanolibranzas.westus.cloudapp.azure.com/Humano/Ingresar.aspx?Ent=Monteria" target='_blank'>Ambiente de prueba</a>
              <h4>Usuarios de ambiente</h4>
              <div>
                <table>
                  <tr>
                    <th>Tipo</th>
                    <th>Usuario</th>
                    <th>Contrasena</th>
                  </tr>
                  <tr>
                    <td>Administrador</td>
                    <td>adminoperaciones</td>
                    <td>1Adminoperaciones@1*</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='humano_soft'>
              <h4>Humano en Linea</h4>
              <a href="http://humanolibranzas.westus.cloudapp.azure.com/HumanoEL/Ingresar.aspx?Ent=Monteria" target='_blank'>Ambiente de prueba</a>
              <h4>Usuarios de ambiente</h4>
              <div>
                Clave generica: 1234
              </div>
            </div>
          </div>
        </div>

      <div className='type_User '>
        <h3>Capacitaciones Operadores de Libranza</h3>
        <a href="http://40.90.221.254/SygnusHumano/ " target='_blank'>Ambiente de prueba</a>
        <h4>Usuarios de ambiente</h4>
            <div>
              <table>
                <tr>
                  <th>Operador</th>
                  <th>Usuario</th>
                  <th>Contrasena</th>
                </tr>
                <tr>
                  <td>Coop Servi Publicos y Jubilados de Col</td>
                  <td>admin59</td>
                  <td>admin59MYBT$</td>
                </tr>
                <tr>
                  <td>Cooperativa Colombia Avanza J.J.L</td>
                  <td>admin76</td>
                  <td>admin76MWC3$</td>
                </tr>
                <tr>
                  <td>Cooperativa Facilycoop</td>
                  <td>admin67</td>
                  <td>admin67MTDD$</td>
                </tr>
                <tr>
                  <td>Solfinanzas</td>
                  <td>admin71</td>
                  <td>admin7160SG&</td>
                </tr>
              </table>
            </div>
      </div>
    </div>
  )
}

export default Trainings