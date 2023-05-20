import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InfoMemo from './components/pages/Info';
import SelectPlanMemo from './components/pages/SelectPlan';
import AddOns from './components/pages/AddOns';
import Summary from './components/pages/Summary';
import Navbar from './components/layout/Navbar';
import { useState } from 'react';
import Confirmacao from './components/pages/Confirmacao';

function App() {

  const [step, setStep] = useState(1);
  /*Select Plan*/
  const [selected, setSelected] = useState();
  const [valorPlan, setValorPlan] = useState();
  const [msgPromocao, setMsgPromocao] = useState();
  const [mesAno, setMesAno] = useState(false);
  /*Add Ons*/
  const [planOn, setPlanOn] = useState(false);
  const [planLager, setPlanLager] = useState(false);
  const [planCust, setPlanCust] = useState(false);
  const [valorOn, setValorOn] = useState();
  const [valorLager, setValorLager] = useState();
  const [valorCust, setValorCust] = useState();
  /*Summary*/
  const [porMesAno, setPorMesAno] = useState();
  const [valorTotal ,setValorTotal] = useState();
  
  

  return (
    <div className="App">
      <Router>
        <Navbar step={step}/>
          <Routes>
            <Route exact path="/" element={<InfoMemo step={step} setStep={setStep} />} />
            
            <Route exact path="/selectplan" element={<SelectPlanMemo setMsgPromocao={setMsgPromocao} msgPromocao={msgPromocao} selected={selected} setSelected={setSelected} setStep={setStep} mesAno={mesAno} setMesAno={setMesAno} valorPlan={valorPlan} setValorPlan={setValorPlan} />} />

            <Route exact path="/addons" element={<AddOns planOn={planOn} setPlanOn={setPlanOn} planLager={planLager} setPlanLager={setPlanLager} planCust={planCust} setPlanCust={setPlanCust} step={step} setStep={setStep} mesAno={mesAno} valorOn={valorOn} setValorOn={setValorOn} valorLager={valorLager} setValorLager={setValorLager} valorCust={valorCust} setValorCust={setValorCust} />} />

            <Route exact path="/summary" element={<Summary selected={selected} setStep={setStep} mesAno={mesAno} porMesAno={porMesAno} setPorMesAno={setPorMesAno} valorPlan={valorPlan} valorOn={valorOn} setValorOn={setValorOn} valorLager={valorLager} setValorLager={setValorLager} valorCust={valorCust} setValorCust={setValorCust} planOn={planOn} planLager={planLager} planCust={planCust} valorTotal={valorTotal} setValorTotal={setValorTotal} />} />

            <Route exact path="/confirm" element={<Confirmacao/>}/>

          </Routes>
         
      </Router>
    </div>
  );
}

export default App;
