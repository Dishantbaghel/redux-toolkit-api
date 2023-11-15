import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllData } from './redux/slices/gitUsersSlice'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    console.log(state.app);
    return state.app
  })

  if(data.loading){
    return <h2>Loading...</h2>
  }

  return (
    <div><h1>hello</h1>
    <button onClick={()=> dispatch(getAllData())} >Get GitUsers Data</button>

    {data.users.map((ele)=>(
      <li key={ele.id}>{ele.login}</li>
    ))}
    </div>
  )
}

export default App