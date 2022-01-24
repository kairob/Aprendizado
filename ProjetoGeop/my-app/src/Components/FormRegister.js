import React, {useState,useEffect}from "react";
import { collection, doc,setDoc } from "firebase/firestore";
import firebase from "../Service/firebase";

const FormRegister = (props) => {
 
 const [dataEmployee, setDataEmployee] = useState({
   name: "",
   matricula: "",
 });
 const getDataEmployee = () => {
if(props.idAtual === ''){
  setDataEmployee({...dataEmployee})
}else{
  setDataEmployee({
    ...props.EmployeeList[props.id]
  })
}
 }
 useEffect(() => {
   getDataEmployee()
 })
 ////////////////add
   const [name, setName] = useState("");
   const [matricula, setMatricula] = useState("");
   
    async function handleAddEmplolee() {
      const AddDoc = doc(collection(firebase, "Employee"));
      const AddData = {
        name: name,
        matricula: matricula
      }

      await setDoc(AddDoc, AddData );
      
      
      console.log(AddData,AddDoc)
      
    }

  return (
    <>
      <div className="input-group mb-3">
       
        <input
          type="text"
          className="form-control"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Matricula"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
        />
        
      </div>
      <div className="col-auto">
        <button onClick={handleAddEmplolee}>Salvar</button>
      </div>
    </>
  );
};
export default FormRegister;
