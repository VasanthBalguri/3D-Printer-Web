import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mock = true;

const initialState = {
    tasks:[]
}

export const asyncGetTasks = createAsyncThunk("tasks/asyncGetTasks",async() => {
    if(!mock)
    return axios.get('/tasks').then(function (response){
        // handle success
        return response.data;
        }).catch(function (error) {
        // handle error
        console.log(error);
        return error;
        });
    else
    {
        return setTasks([{id:"12",name:"horse",status:"completed"},{id:"13",name:"ship",status:"pending"},{id:"14",name:"cube",status:"processing"},{id:"15",name:"lever",status:"printed"},{id:"16",name:"dog",status:"processing"},{id:"17",name:"Holder",status:"processing"}]);
    }
});

export const asyncAddTask = createAsyncThunk("tasks/asyncAddTask",async(newTask) => {
    if(!mock)
    axios.post('/addTask',newTask).then(function (response){
        // handle success
        return response.data;
        }).catch(function (error) {
        // handle error
        console.log(error);
        return error;
        });
    else
    {
        return null;
    }
});

export const asyncGetTask = createAsyncThunk("tasks/asyncGetTask",async(taskId) => {
    if(!mock)
    return axios.get(`/task{taskId}`).then(function (response){
        // handle success
        return response.data;
        }).catch(function (error) {
        // handle error
        console.log(error);
        return error;
        });
    else
    {
       return setTask({id:props.taskId,name:props.taskName,type:"FDM",material:"PLA",infill:"10%",modelUri:"",status:props.taskStatus,progress:60});
    }
});

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{

    },
    extraReducers: {
        [asyncGetTasks.pending]: (state,action) => {

        },
        [asyncGetTasks.fulfilled]: (state,action) => {
            state.tasks = action.payload;
        },
        [asyncGetTasks.rejected]: (state,action) => {

        },
        [asyncGetTask.pending]: (state,action) => {

        },
        [asyncGetTask.fulfilled]: (state,action) => {
            //console.log(action.payload);
            const indexVal = state.tasks.findIndex(tasks => tasks.id == action.payload.id)
            const newArr = [...state.tasks.slice(0,indexVal),action.payload,...state.tasks.slice(indexVal+1)]
            state.tasks = newArr;
        },
        [asyncGetTask.rejected]: (state,action) => {
            
        },
        [asyncAddTask.pending]: (state,action) => {
        },
        [asyncAddTask.fulfilled]: (state,action) => {
            state.tasks = [...state.tasks,action.payload];
        },
        [asyncAddTask.rejected]: (state,action) => {
            
        }
    }
});

export default tasksSlice.reducer