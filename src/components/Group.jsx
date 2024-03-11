import { useState } from "react";
import TitleGroup from "./group/Titele";
import InputGroup from "./group/Input";
import Modal from "./group/Modal";
import Editing from "./group/Editing";

export default function Group() {

   let tableData = [
      { id: 1, name: 'John', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" },
      { id: 2, name: 'Jane', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" },
      { id: 3, name: 'Doe', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" }
   ];
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
      setEditing(true);
   };

   const saveInput = () => {
      setEditing(false);
   };
   const [info, setInfo] = useState();





   const [tableInfo, setTableInfo] = useState(tableData)

   return (
      <div>
         <div className="table">
            <TitleGroup />
            <InputGroup data={tableInfo} setInfo={setInfo} />
         </div>
         <div className="control_panel">
            <button type="submit" className="control_button" onClick={openModal} >Додати</button>
            <button type="submit" className="control_button" onClick={editInput}>Редагувати виділене</button>
            <button type="submit" className="control_button">Видалити рядок</button>
         </div>
         {modalOpen && <Modal onClose={closeModal} update={setTableInfo} data={tableInfo} />}
         {editing && <Editing onClose={saveInput} info={info} setInfo={setInfo} />}
         {info}
      </div>

   )
}