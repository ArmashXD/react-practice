import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props){

    const [showModal, isModalOpen] = useState(false);

    function deleteHandler()
    {
        isModalOpen(true);
    }

    function closeModal()
    {
        isModalOpen(false);
    }

    return (<div className="card">
            <p>{props.text}</p>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}> delete</button>         
                {showModal ? <Modal onCancel={closeModal} onConfirm={closeModal}/> : null }
                {showModal ? <Backdrop onCancel={closeModal}/> : null }
            </div>
    </div>);
}

export default Todo;