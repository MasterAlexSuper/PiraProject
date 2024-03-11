import React, { useState } from 'react';


export default function Modal({ onClose, update, data }) {
   const [inputName, setInputName] = useState('');
   const [inputTel, setInputTel] = useState('');
   const [inputAdress, setInputAdress] = useState('');
   const [inputEmail, setInputEmail] = useState('');

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
      let newMamber = { id: data.length + 1, name: inputName, tel: inputTel, adress: inputAdress, email: inputEmail };
      data.push(newMamber)
      localStorage.removeItem('table')
      localStorage.setItem('table', JSON.stringify(data));
      console.log("data:", data)
      console.log(JSON.parse(localStorage.getItem('table')))
      update(JSON.parse(localStorage.getItem('table')))
      localStorage.setItem('table', JSON.stringify(data));
      console.log(newMamber);
      // Закрываем модальное окно
      onClose();
   };

   return (
      <div className="modal">
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