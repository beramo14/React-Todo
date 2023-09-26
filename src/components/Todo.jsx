import { useState } from "react";
import { Button } from "react-bootstrap";
import { CheckSquareFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Todo() {

    let [todoList, setTodoList] = useState([]);
    let [count, setCount] = useState(1);
    
    return (
        <div className='todo-list'>
            <TodoItemAdd todoList={todoList} setTodoList={setTodoList} count={count} setCount={setCount}/>
            {
                todoList.map((item) => {
                    return <TodoItem item={item} todoList={todoList} setTodoList={setTodoList} key={item.id}/>
                })
            }
        </div>
    )
}


function TodoItemAdd({todoList, setTodoList, count, setCount}) {
    let [todoAdd, setTodoAdd] = useState('');

    return (
        <div className="todo-add">
                <input type="text" className="form-control todo-add-input" value={todoAdd} onChange={(e)=>{setTodoAdd(e.target.value)}}/>
                <Button className="todo-add-button" onClick={() => {
                    let todoListCopy = [...todoList];
                    todoListCopy.push({id:count, content:todoAdd, checked:false});
                    setTodoList(todoListCopy);
                    setCount(count+1);
                    setTodoAdd('');
                }}>추가</Button>
            </div>
    )
}

function TodoItem({item, todoList, setTodoList}) {
    let [isModify, setIsModify] = useState(false);
    let [modify, setModify] = useState(item.content); 

    return (
        <div className="todo-item">
            <input type="checkbox" className="todo-item-check" checked={item.checked}
                onChange={(e) => {
                    let todoListCopy = [...todoList];
                    let findedItem = todoListCopy.find((f_item) => {
                        return f_item.id === item.id;
                    });
                    findedItem.checked = e.target.checked;
                    setTodoList(todoListCopy);
                }
            }/>
            {
                isModify?
                <input type='text' className='form-control form-control-sm' value={modify} onChange={e=>{setModify(e.target.value)}}/>
                :
                <span className={"todo-item-content "+(item.checked? "checked" : "")}>{item.content}</span>
            }
            <button className="todo-item-control" onClick={() => {
                if(isModify === true) {
                    let todoListCopy = [...todoList];
                    let modifyTarget = todoListCopy.find(f_item=>item.id === f_item.id)
                    modifyTarget.content = modify;
                }
                setIsModify(!isModify);
            }}>
                {
                    isModify? <CheckSquareFill/> : <PencilFill/>
                }
            </button>
            <button className="todo-item-control" onClick={() => {
                let filteredList = todoList.filter(f_item => f_item.id !== item.id);
                setTodoList(filteredList);
            }}>
                <Trash3Fill/>
            </button>
        </div>
    )
}

export default Todo;