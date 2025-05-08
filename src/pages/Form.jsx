//Context
import { useContext } from "react";
import ConstantsContext from '../context/Context';

const Form = () => {

    const {contextName} = useContext(ConstantsContext);

  return (
    <div>{contextName}</div>
  )
}

export default Form;