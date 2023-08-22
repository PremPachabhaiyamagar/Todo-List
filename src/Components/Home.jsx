import React,{useState}from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import {RiDeleteBin6Line} from 'react-icons/ri'


import {addTodo,removeTodo,deleteTodo} from '../services/action/todoAction'

const Home = () => {
  const [inputData ,setInputData] = useState('')
  const dispatch = useDispatch()
  const newList = useSelector((state)=>state.todoReducer.list)
  return (
    <div className='home'>
     <h1 className='title'>Todo List using react-redux</h1>
      <div className='user_input'>
         <input type='text' placeholder='Enter the list' value={inputData}
           onChange={(event)=>setInputData(event.target.value)}/>
           <div className='btn'
             onClick={()=> inputData&& dispatch(addTodo(inputData),setInputData(''))}
          >
             <button><AiOutlinePlus className='icon' /></button>
           </div>
      </div>
       {
         newList.map((elem)=>(
          
          <div className='myList' key={elem.id}>
           <h3 className='new_data'>{elem.data}</h3>
            <div className='btn'
              onClick={()=> dispatch(deleteTodo(elem.id))}
           >
                <button><RiDeleteBin6Line className='icon' /></button>
           </div>
         </div>
         )
        )
      }

      <div className='remove_all'>
       <div 
              onClick={()=>dispatch(removeTodo())}
           >
                <button>Remove all</button>
           </div>
      </div>

    </div>
  )
}

export default Home
