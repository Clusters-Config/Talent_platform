import { Link , useNavigate} from 'react-router-dom';
import Button from './Button';

const FormRegister = () => { 
     const navigate  = useNavigate();
    return ( 
        <>
         <Button className="bg-blue-500 z-40 text-white p-4 rounded-xl ml-16 w-[8rem]  h-16 hover:bg-blue-600" 
          title='Register'
           onClick={() => {
           <Link to="/register" />
           navigate("/register")}
           }/>
        </>
    )
}

export default FormRegister;