import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import firebase from "./Service/firebase";
import { IoMdTrash } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc
  
} from "firebase/firestore";
/*type EmployeeProps = {
  id: string,
  name: string,
  matricula: string,
};*/
const Register = (props) => {

  //////////////EditEmployee///////////
  const [atualizacion, setAtualizacion] = useState(false);
 const [idAtual, setIdAtual]  = useState('')
 const initialValue = {
   name: "",
   matricula: "",
 };
 const [dataEmployee, setDataEmployee] = useState(initialValue)
 
 useEffect(async () => {
  return(
    setDataEmployee({
      
    })
  )
  console.log(EmployeeList.name, EmployeeList.matricula);
 },[]);
async function AtualizacionData (id) {
  const Atualizar = doc(firebase,'Employee',)

  const data = {
    name: name,
    matricula: matricula
  }
await updateDoc(Atualizar, {data})

setAtualizacion(false);
}

  /////////ListEmployee/////////////////////
  const [EmployeeList, setEmployeeList] = useState({});
  async function getCities() {
    const citiesCol = collection(firebase, "Employee");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setEmployeeList(cityList);
    console.log(cityList);
    return cityList;
  }
  useEffect(() => {
    getCities();
  }, []);

  ///////AddEmployee//////
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");

  console.log(name, matricula);
  async function handleAddEmplolee(e) {
    e.preventDefault();
    const AddDoc = doc(collection(firebase, "Employee"));
    const AddData = {
      name: name,
      matricula: matricula,
    };

    await setDoc(AddDoc, AddData);

    
  }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Matricula"
            value={matricula}
            onChange={(event) => setMatricula(event.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="col-auto">
        {atualizacion ? (
          <button onclick={AtualizacionData()}>Atualizar</button>
        ) : (
          <button onClick={handleAddEmplolee}>Salvar</button>
        )}
      </div>
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Matricula</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(EmployeeList).map((id) => {
              return (
                <tr key={id}>
                  <td>{EmployeeList[id].name}</td>
                  <td>{EmployeeList[id].matricula}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {setIdAtual(id);}}
                    >
                      <AiOutlineEdit />
                    </button>
                    <button className="btn btn-danger" onClick={() => {}}>
                      <IoMdTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};
export default Register;
