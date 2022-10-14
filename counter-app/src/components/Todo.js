import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <div className="card1">
        <span className="listLeft">
          <div className="listTitle">{props.title}</div>
          <div className="listText"> {props.companyName}</div>
          <div className="listText"> {props.jobLocation}</div>
          <div className="listText"> {props.jobStartTime}</div>
        </span>
        <span className="listRight">
          <div className="listText1">{props.location}</div>
          <div className="listText1">{props.duration} 시간</div>
          <h1 className="listPrice">{props.price}</h1>
        </span>
      </div>
      {/* <div className='actions'>
        <button className='btn' onClick={deleteHandler}>delete</button>
        </div>
        { modalIsOpen && <Modal/>  }
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} />  } */}
    </div>
  );
}

export default Todo;
