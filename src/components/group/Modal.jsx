import React, { useState } from 'react';


export default function Modal({ onClose, update, data }) {
   const [inputName, setInputName] = useState('');
   const [inputTel, setInputTel] = useState('');
   const [inputAdress, setInputAdress] = useState('');
   const [inputEmail, setInputEmail] = useState('');

   const [err, setErr] = useState(false);

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
      if (!/\d/.test(inputName) && inputAdress.length >= 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail) && !/[a-zA-Z]/.test(inputTel)) {
         setErr(false)
         let newMamber = { id: data.length + 1, name: inputName.trim(), tel: inputTel, adress: inputAdress, email: inputEmail };
         data.push(newMamber)
         localStorage.removeItem('table')
         localStorage.setItem('table', JSON.stringify(data));
         update(JSON.parse(localStorage.getItem('table')))
         localStorage.setItem('table', JSON.stringify(data));
         // Закрываем модальное окно
         onClose();
      }
      else setErr(true)
   };

   let Err = () => {
      let er = "";
      if (/\d/.test(inputName)) er += "Ім'я ";
      if (/[a-zA-Z]/.test(inputTel)) er += "Телефон ";
      if (inputAdress.length <= 3) er += "Адреса ";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) er += "Email";
      

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
         <p className='descr'>Додати користувача</p>
         <hr />
         <div className="modal_content">
            <img src="../img/close.png" alt="qwe" onClick={onClose} />
            <input type="text" value={inputName} id='Name' onChange={handleChange} placeholder='ПІБ' />
            <input type="tel" value={inputTel} id='Tel' onChange={handleChange} placeholder='Телефон' />
            <input type="text" value={inputAdress} id='Adress' onChange={handleChange} placeholder='Адреса' />
            <input type="text" value={inputEmail} id='Email' onChange={handleChange} placeholder='Email' />
            <button onClick={handleSubmit}>Отправить</button>
         </div>
         {err && <Err />}
      </div>
   );
};