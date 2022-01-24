
import  firebase  from "../Service/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

type ProductProps = {
  id: string,
  name: string,
  matricula: string
};

export function EmployeeList({
  id,
  name,
  matricula
}: ProductProps) {
  async function handleDeleteProduct(id: string) {
    await deleteDoc(doc(firebase, "Employee", id));
  }

  async function handleToggleDone(id: string, done: boolean) {
    await updateDoc(doc(firebase, "Employee", id), {
      done: !done,
    });
  }

  return (
    <div className="bg-gray-200 rounded-md flex w-5/6 mx-12 px-2 mb-4 h-20 items-center justify-between">
      <div className="ml-2">
        <h4 className="font-bold">{name}</h4>
        <span className="font-thin text-gray-400">{`Quantidade: ${matricula}`}</span>
      </div>
      <div>
      
      </div>
      <div>
        <button id="text">Name</button>
      </div>
    </div>
  );
}
