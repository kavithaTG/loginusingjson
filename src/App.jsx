import React from 'react'
import json from "./Data.json"
const App = () => {
  return (
    <div className="maindiv">
        <div className="empdatadiv">
            <table>
                <thead>
                    <tr>
                        <th>EMP_ID</th>
                        <th>EMP_IMG</th>
                        <th>EMP_NAME</th>
                        <th>EMP_EMAIL</th>
                        <th>EMP_PHONE</th>
                        <th>EMP_VIDEO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        json.map((x,index)=>{
                          return<tr key={index}>
                                <td>{x.emp_id}</td>
                                <td>
                                  <img src={x.image} alt="" width="10px" height="10px"/>
                                </td>
                                <td>{x.emp_name}</td>
                                <td>{x.emp_email}</td>
                                <td>{x.emp_phone}</td>
                                
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default App