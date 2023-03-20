//import React from 'react';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: ""});  
  const handleSubmit = () => {
    axios.post("/api/now/table/x_nuvo_re_rem_lease_contract", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        setIncidents([...incidents, res.data.result]);
        setFormData({ name: "", number: "" });
        setShowForm(false);
      })
      .catch(error => {
        console.error(error);
      });
  }; 
  return ( 
    <div className="App">
      <div className='Head'>
        <header className="App-header"> Real Estate Contracts </header>
      </div>
      <div className='Tabs'>    
        <Tabs>
          <div className='rect_tabs'>
          <TabList className="tabList">
            <div className='Tabs'>
              <Tab className="Tab1">Assets</Tab>
              <Tab className="Tab1">DASHBOARD</Tab>
         
            </div>
          </TabList>
          <div className='Content'>
            <TabPanel>              
             
            </TabPanel>
            <TabPanel>              
             Trescope
            </TabPanel>

          </div>
          </div>
        </Tabs>
     <div>
     <button onClick={() => setShowForm(true)}>+</button>
  {showForm && (
    <div className="form">
      <div className='header-div'> 
      <h3>Add Contract</h3>
      <button className='Xbutton' onClick={() => setShowForm(false)}>X</button>
      </div>
      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder = "Name" />  
      <div className='btnSaveAndClose'>
      <button className='btnCancel' onClick={() => setShowForm(false)}>Cancel</button>   
      <button className='btnSave' onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )}
     </div>
      </div>
    </div>
  )
}
export default App;