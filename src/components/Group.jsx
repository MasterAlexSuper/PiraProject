import { useState } from "react";
import TitleGroup from "./group/Titele";
import InputGroup from "./group/Input";
import Modal from "./group/Modal";
import Editing from "./group/Editing";

export default function Group() {

   let newTable = localStorage.getItem('table');
   let newTableUpd = JSON.parse(newTable)



   // Модальное окно для ввода данных
   const [modalOpen, setModalOpen] = useState(false)
   function openModal() {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const [editing, setEditing] = useState(false)
   function editInput() {
      if (!editing) setEditing(true);
      else setEditing(false)
   };

   const saveInput = () => {
      setTableInfo(JSON.parse(localStorage.getItem('table')))
      setEditing(false);
   };



   const [tableInfo, setTableInfo] = useState(newTableUpd)

   return (
      <div>
         <div className="table">
            <TitleGroup />
            <InputGroup data={tableInfo} />
         </div>
         <div className="control_panel">
            <button type="submit" className="control_button" onClick={openModal} >Додати</button>
            <button type="submit" className="control_button" onClick={editInput}>Редагувати виділене</button>
            <button type="submit" className="control_button">Видалити рядок</button>
         </div>
         {modalOpen && <Modal onClose={closeModal} update={setTableInfo} data={tableInfo} />}
         {editing && <Editing onClose={saveInput} info={tableInfo} setInfo={setTableInfo} />}

      </div>

   )
}