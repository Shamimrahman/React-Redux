import React from 'react'
import './App.css'
import {useSelector , useDispatch} from 'react-redux'
import {increment ,decrement} from './action/index.js'
const App = () => {

  //useselector for get reducer state
  const mystate = useSelector(state => state.changeNum)

  //useDispatch for get action
  const dispatch = useDispatch()

 const add=(()=>{
   //dispatch (increment())*/
   dispatch(increment(5))
 })

 //ekhn amra jdi chai + korle 5 kore barbe thn amader action a giye 
 //argument nite hobe thn type er payload:num likhte hobe
 //thn reducer a giye action.paylod likhte hobe

 const dec=()=>{
   dispatch(decrement())
 }

  return (
    <div>
    <div className="main-div">
      

    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <a className="quantity__minus" title="Decrement" onClick={dec}><span>-</span></a>
      <input name="quantity" type="text" className="quantity__input" value={mystate}  />
      <a className="quantity__plus" title="Increment" onClick={add}><span>+</span></a>
    </div>

        </div>
      </div>
    </div>
  )
}

export default App
