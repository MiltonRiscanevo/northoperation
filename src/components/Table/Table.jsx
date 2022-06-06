import React from 'react'
import { useState } from 'react'
import './table.css'
import ENTITY_DATA from '../../Data.json'



const Table = () => {
    //const [items, setItems] = useState(ENTITY_DATA)

    

    // const dataMap = items.map((el,index)=>{
    //     return(
    //         <Draggable key={el.index} draggableId={el.id.toString()} index={index}>
    //             {(provided)=>{
    //                 return(
    //                     <div
    //                         {...provided.draggableProps}
    //                         {...provided.dragHandleProps}
    //                         ref={provided.innerRef}
    //                     >
    //                         <Card 
    //                             className='sub_table'
    //                         >
    //                             <div>Entidad: {el.entidad}</div>
    //                             <div>Fecha capacitacion: {el.fecha}</div>
    //                             <div>Capacitador: {el.gestor}</div>
    //                         </Card>
    //                     </div>
    //                 )
    //             }}

    //         </Draggable>
    //     )
    // })

    // const dataSem=()=>{
    //     console.log("estamos en datasem");
    // }

    // const handleOnDragEnd = (res)=>{
    //     const itemsCopy = [...items]
    //     const [reorderedItem]= itemsCopy.splice(res.source.index,1)
    //     itemsCopy.splice(res.destination.index,0, reorderedItem)
    //     setItems(itemsCopy)
    // }
  return (

    
    <>
        <div className='table_container'>
        <div className='sub_table'>  
            <h2>Entidades Socializadas</h2>     
            { ENTITY_DATA.map((element)=>{
                if (element['Confirmada mesa 1'] !=="Realizada")  {
                    if (element['Confirmado Socialización']==="Realizada") {
                        return(
                            <div>
                                <h3>
                                    Entidad: {element.Entidad}
                                </h3>
                                <div>
                                    Fecha Socializacion: {element['Fecha Socialización']}
                                </div>
                                <div>
                                    Estado: {element['Confirmado Socialización']}
                                </div>
    
                            </div>
                        )
                    }    
                }
                
            })}
        </div>
        <div className='sub_table'>
            <h2>Entidades Mesa 1</h2>
        { ENTITY_DATA.map((element)=>{
            if (element['Confirmacion capacitacion  Entidad']!=="Realizada") {
                if (element['Confirmada mesa 1']==="Realizada") {
                    return(
                        <div>
                            <h3>
                                Entidad: {element.Entidad}
                            </h3>
                            <div>
                                Fecha Mesa Anexo1: {element['1. Mesa de trabajo - Anexo 1']}
                            </div>
                            <div>
                                Estado: {element['Confirmada mesa 1']}
                            </div>
                            
                        </div>
                    )
                }
            }
        })}
        </div>
        <div className='sub_table'>
            <h2>Entidades Capacitacion Pagaduria</h2>
        { ENTITY_DATA.map((element)=>{
            if (element['Confirmacion capacitacion  Entidad']==="Realizada") {
                return(
                    <div>
                        <h3>
                            Entidad: {element.Entidad}
                        </h3>
                        <div>
                            Fecha Capacitacion: {element['Capacitación Entidad Libranzas en Línea']}
                        </div>
                        <div>
                            Estado: {element['Confirmacion capacitacion  Entidad']}
                        </div>
                        
                    </div>
                )
            }
        })}
        </div>
        <div className='sub_table'>
            <h2>Capacitacion Operadores</h2>
        { ENTITY_DATA.map((element)=>{
            if (element['Confirmacion capacitacion Operadores']==="Realizada"|| element['Confirmacion capacitacion Operadores']==="Tentativo") {
                return(
                    <div>
                        <h3>
                            Entidad: {element.Entidad}
                        </h3>
                        <div>
                            Fecha Capacitacion: {element['Capacitación Operadores']}
                        </div>
                        <div>
                            Estado: {element['Confirmacion capacitacion Operadores']}
                        </div>
                        
                    </div>
                )
            }
        })}
        </div>
        <div className='sub_table'>
            <h2>Capacitacion Beneficiarios</h2>
        { ENTITY_DATA.map((element)=>{
            if (element['Confirmacion capacitacion Beneficiarios']==="Realizada") {
                return(
                    <div>
                        <h3>
                            Entidad: {element.Entidad}
                        </h3>
                        <div>
                            Fecha Capacitacion: {element['Capacitación Beneficiarios']}
                        </div>
                        <div>
                            Estado: {element['Confirmacion capacitacion Beneficiarios']}
                        </div>
                        
                    </div>
                )
            }
        })}
        </div>
        </div>

        {/* <Container >
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='items'>
                    {(provided)=>{
                        return(
                            <div {...provided.droppableProps} ref={provided.innerRef}
                                className='container_table'
                            >
                                {dataMap}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
                
            </DragDropContext>
        </Container> */}
        
    </>
  )
}

export default Table