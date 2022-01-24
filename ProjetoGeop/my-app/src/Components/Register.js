import React ,{useEffect,useState}from "react";
import FormRegister from "./FormRegister";
 import { collection, getDocs} from "firebase/firestore";
 import firebase from "../Service/firebase";
 //import EmployeeList from "./EmployeeList"
/*type ProductProps = {
  id: string,
  name: string,
  matricula:string
 
};*/
const Register = () => {
 

  /////////////lista/////////////
let [EmployeeList, setEmployeeList] = useState({});
let [idAtual, setIdAtual] = useState('')

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
      
  return cityList;
}
useEffect(() => {
      getCities()
    }, [])

 
 
  return (
    <>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Cadastro de Empregados</h1>
        </div>
        <div className="my-4"></div>
        <FormRegister {...({idAtual, EmployeeList})} />
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
            {
              Object.keys(EmployeeList).map(id =>{
                return (
                  <tr key={id}>
                    <td>{EmployeeList[id].name}</td>
                    <td>{EmployeeList[id].matricula}</td>
                    <td>
                      <button className="btn btn-primary fas fa-pencil-alt" onClick={() => {setIdAtual(idAtual)}}>
                        alterar
                      </button>
                      <button className="btn btn-danger fas fa-pencil-alt">
                    delear
                      </button>
                    </td>
                  </tr>
                );
              })
            }
       
            
           
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Register;
