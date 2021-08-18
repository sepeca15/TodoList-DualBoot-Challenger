import './Items.css';
import PropTypes from 'prop-types';
function Items(props) {
    return (
        <div className="item">
            <div>{props.tareas}</div>
            <button className="close" type="button" onClick={()=>{
                props.BorrarTarea(props.index)
            }}>
                X
            </button>
        </div>
    );

}

Items.propTypes = {
    tareas: PropTypes.string,
    key: PropTypes.number,
    index: PropTypes.number,
    BorrarTarea: PropTypes.func,
    
  };

export default Items;