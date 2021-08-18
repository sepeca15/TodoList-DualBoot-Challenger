import React from 'react'
import { Link } from 'react-router-dom';
//importo hooks para usar y manipular el state
import { useSelector, useDispatch } from 'react-redux'
import './Todolist.css';
import Items from './Items';

const Lista = () => {
    //para obtener el state y mostrarlo (counterdata lo definí en el store)
    const listas = useSelector((state) => state.counterdata.listas);
    return (
        <div className="todolist">
            <div>
                <h1>Lista de Listas</h1>
            </div>
            <div>
                <Link to="todo">
                    <button>Volver a añadir una nueva lista de tareas</button>
                </Link>
                {
                    listas.map((lista, i) => {
                        return <div className="item" key={i}>
                            {lista.map((tareas, i) => {
                                return (<div><p>{tareas}</p></div>)
                            })}
                            <Link to={"detalles/"+i}>
                                <button>Ver detalles</button>
                            </Link></div>
                    })
                }
            </div>
        </div>
    )
}

export default Lista
