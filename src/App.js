import './App.css';
import RhForm from "./components/RHForm";
import FormikForm from "./components/FormikForm";
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className='link_div'>
            <Link to={'form-rhf'}>Form with react-hook-form</Link>
        </div>
        <div className='link_div'>
            <Link to={'form-formik'}>Form with formik</Link>
        </div>
        <div className='form_div'>
            <Routes>
                <Route path='/form-rhf' element={<RhForm/>}></Route>
                <Route path='/form-formik' element={<FormikForm/>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
