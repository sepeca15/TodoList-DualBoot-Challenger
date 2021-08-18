import React, { useState } from "react";
import './Todolist.css';
import Item from "./Items"
import { Link } from 'react-router-dom';
//importo hooks para usar y manipular el state
import { useSelector, useDispatch } from 'react-redux'
//importo las funciones de mi slice
import { counterActions } from './../redux/Slice'
function Todolist() {
    const [tarea, setTarea] = useState("");
    const [TodoList, setTodoList] = useState([]);

    const AñadorTarea = e => {
		e.preventDefault();
		let NuevoTodoList = [...TodoList, tarea];
		setTodoList(NuevoTodoList);
		setTarea("");
	};

	const BorrarTarea = i => {
		let nuevoTodoList = TodoList.filter((tareas, index) => {
			if (i != index) return tareas;
		});
		setTodoList(nuevoTodoList);
	};

    //para luego utilizar las funciones del slice
    const dispatch = useDispatch();
    const Guardar = () => {
        if(TodoList.length>0){dispatch(counterActions.guardarLista(TodoList))}
    }
    return (
        <div className="todolist">
            <form onSubmit={tarea ? AñadorTarea : e=>e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Añadir tarea"
                    onChange={e=> setTarea(e.target.value)}
                    value={tarea}               
                />
                <button type="submit">Agregar</button>
                <Link to="lista" onClick={()=>Guardar()}>
                    <button>Guardar</button>
                </Link>
            </form>
            <div>
                {TodoList.map((tareas,index)=>{
                    return <Item
                                key={index}
                                index={index}
                                tareas={tareas}
                                BorrarTarea={BorrarTarea}                    
                        />
                })}
            </div>
        </div>
    );

}

export default Todolist;