import React, { useState } from 'react';


export default function Editing({ onClose, update, data }) {

   const [err, setErr] = useState(false);

   let curChange = document.querySelector(".active_cell")
   if (!curChange) {
      return (<div style={{ color: 'white', textAlign: 'center', marginTop: '20px', marginBottom: '20px', fontSize: '20px' }}>Select row to edit</div>)
   }

   let id;

   for (let i = 0; i < data.length; i++) {
      if (data[i].name.trim() == curChange.children[0].textContent.trim()) {
         id = data[i].id;
      }
   }


   const [inputName, setInputName] = useState(curChange.children[0].textContent.trim());
   const [inputTel, setInputTel] = useState(curChange.children[1].textContent);
   const [inputAdress, setInputAdress] = useState(curChange.children[2].textContent);
   const [inputEmail, setInputEmail] = useState(curChange.children[3].textContent);

   const handleChange = (event) => {

      switch (event.target.id) {
         case 'Name':
            setInputName(event.target.value.trim());
            break;
         case 'Tel':
            setInputTel(event.target.value.trim());
            break;
         case 'Adress':
            setInputAdress(event.target.value.trim());
            break;
         case 'Email':
            setInputEmail(event.target.value.trim());
            break;
      }

   };

   const handleSubmit = () => {
      if (!/\d/.test(inputName) && inputAdress.length >= 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail) && !/[a-zA-Z]/.test(inputTel)) {
         let oldTable = JSON.parse(localStorage.getItem('table'))
         let newTable = oldTable.map((item) => {
            let nItem = item
            if (id == nItem.id) {
               return ({ id: id, name: inputName, tel: inputTel, adress: inputAdress, email: inputEmail })
            }
            else return (item)
         })
         localStorage.removeItem('table')
         localStorage.setItem('table', JSON.stringify(newTable))
         update(newTable)
         onClose();
      }
      else {
         setErr(true)
      }
   };

   let Err = () => {
      let er = "";
      if (/\d/.test(inputName)) er = "Ім'я";
      if (inputAdress.length <= 3) er = "Адреса";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) er = "Email";
      if (/[a-zA-Z]/.test(inputTel)) er = "Телефон";

      if (/\d/.test(inputName) || inputAdress.length <= 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail) || /[a-zA-Z]/.test(inputTel)) {
         return (
            <p className='err'>Щось пішло не за планом, перевірти чи заповнили ви усе правильно
               <br />
               Проблема з полем: {er}
            </p>
         )
      } else {
         return (
            <p className="err">Усе має бути добре</p>
         )
      }
   }


   return (
      <div className="modal">
         <p className='descr'>Редагування</p>
         <hr />
         <div className="modal_content">
            <img src="../img/close.png" alt="qwe" onClick={onClose} />
            <input type="text" value={inputName} id='Name' onChange={handleChange} placeholder='ПІБ' />
            <input type="text" value={inputTel} id='Tel' onChange={handleChange} placeholder='Телефон' />
            <input type="text" value={inputAdress} id='Adress' onChange={handleChange} placeholder='Адреса' />
            <input type="text" value={inputEmail} id='Email' onChange={handleChange} placeholder='Email' />
            <button onClick={handleSubmit}>Отправить</button>
         </div>
         {err && <Err />}
      </div>
   );
};