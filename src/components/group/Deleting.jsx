export default function Deleting({ onClose, data, update }) {

   let curChange = document.querySelector(".active_cell")
   if (!curChange) {
      return (<div style={{ color: 'white', textAlign: 'center', marginTop: '20px', marginBottom: '20px', fontSize: '20px' }}>
         Select row to delete
      </div>)
   }
   let id;

   for (let i = 0; i < data.length; i++) {
      if (data[i].name.trim() == curChange.children[0].textContent.trim()) {
         id = data[i].id;
      }
   }
   console.log(id);
   const delet = () => {

      let newData = data.filter((item) => {
         let nItem = item;
         if (nItem.id != id) {
            return nItem
         }
      })
      localStorage.removeItem('table')
      update(newData)
      localStorage.setItem('table', JSON.stringify(newData))
      console.log(newData);
      onClose()
   }
   const close = () => {
      onClose()
   }

   return (
      <>
         <div className="deleting_container">
            <button type="submit" onClick={delet}>Видалити</button>
            <button type="submit" onClick={close}>Залишити</button>
         </div>
      </>
   )
}