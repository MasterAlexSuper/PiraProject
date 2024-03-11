export default function InputGroup(props) {

   function selected(event) {

      if (event.target.classList.contains('active_cell')) {
         event.target.classList.remove('active_cell')
      }
      else {
         const listItems = document.querySelectorAll('.table_element');

         listItems.forEach(item => {
            item.classList.remove('active_cell')
         })
         event.target.classList.add("active_cell")
      }
      props.setInfo(event.target.textContent)
      // console.log(event.target.textContent)
   }


   let info = props.data.map((item, index) => (
      <div key={index} className="group_input">
         <div className="table_element" onClick={selected}> {item.name}</div>
         <div className="table_element" onClick={selected}> {item.tel}</div>
         <div className="table_element" onClick={selected}> {item.adress}</div>
         <div className="table_element" onClick={selected}> {item.email}</div>
      </div>
   ))

   return (
      <div className="ul">
         {info}
      </div>
   )
}