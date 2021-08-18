import React, { useState, useEffect } from "react";
import './Todolist.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Detalles = () => {

    const [detallesFetch, setDetallesFetch] = useState([]);

    useEffect(() => {
        detallesElFetch()
    }, []);
    const detallesElFetch = async () => {
        try {
            const res = await fetch("https://www.therogerlab.com/examples/lists-stats.php");
            const data = await res.json();
            setDetallesFetch(data)
        } catch (error) {
            console.log(error);
        }
    }
    const { id } = useParams()
    const listas = useSelector((state) => state.counterdata.listas);
    return (
        <div className="todolist">
            <h2>Detalles</h2>
            <Link to="/lista">
                <button>Volver a Lista de tareas</button>
            </Link>
            <div className="item cabeceraDetalles">
                <div><span>TOTAL:</span><span className="negrita">{detallesFetch.total}</span></div>
                <div><span>HECHO:</span><span className="negrita">{detallesFetch.done}</span></div>
                <div><span>ATRASADO:</span><span className="negrita">{detallesFetch.delayed}</span></div>
            </div>
            <div className="item">
                {listas[id]?.map((tareas, i)=>{
                    return <p>{tareas}</p>
                })}
            </div>
        </div>
    )
}

export default Detalles
