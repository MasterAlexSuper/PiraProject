import React, { useState } from 'react';


export default function Editing({ onClose, setInfo, info }) {

   let curChange = document.querySelector(".active_cell")
   if (!curChange) {
      return (<div>"Select pls"</div>)
   }
   // console.log(info);
   let id = 10;
   for (let i = 0; i < info.length; i++) {
      if (info[i].name == curChange.children[0].textContent.trim()) {
         id = info[i].id;
      }
   }


   const [inputName, setInputName] = useState(curChange.children[0].textContent);
   const [inputTel, setInputTel] = useState(curChange.children[1].textContent);
   const [inputAdress, setInputAdress] = useState(curChange.children[2].textContent);
   const [inputEmail, setInputEmail] = useState(curChange.children[3].textContent);

   const handleChange = (event) => {

      switch (event.target.id) {
         case 'Name':
            setInputName(event.target.value);
            break;
         case 'Tel':
            setInputTel(event.target.value);
            break;
         case 'Adress':
            setInputAdress(event.target.value);
            break;
         case 'Email':
            setInputEmail(event.target.value);
            break;
      }

   };

   const handleSubmit = () => {
      let oldTable = JSON.parse(localStorage.getItem('table'))
      console.log(id);
      let newTable = oldTable.map((item, index) => {
         let nItem = item
         if (id == nItem.id) {
            return ({ id: id, name: inputName, tel: inputTel, adress: inputAdress, email: inputEmail })
         }
         else return (item)
      })
      localStorage.removeItem('table')
      localStorage.setItem('table',JSON.stringify(newTable))
      onClose();
   };

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
      </div>
   );
};