import { useState } from "react"

export default function Editing({ onClose, info, setInfo }) {

   const [edit, setEdit] = useState(info)

   function handleChange(event) {
      setEdit(event.target.value); // Изменяем состояние edit, а не info
      setInfo(edit);
   }

   function handleSubmit() {
      setInfo(edit); // Обновляем информацию с помощью переданной функции setInfo
      console.log(info)
      onClose(); // Закрываем компонент или выполняем другие действия после сохранения изменений
   }

   return (<>
      <div className="editing">
         <img src="../img/close.png" alt="qwe" onClick={onClose} />
         <span>Відредагуйте:</span>
         <input type="text" name="edit" onChange={handleChange} value={edit} />
         <button onClick={handleSubmit}>Зберігти</button>
      </div>
   </>)
}