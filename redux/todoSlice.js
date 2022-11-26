import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {
  getTodosHandler,
  createTodoHandler,
  markTodoCompleteHandler,
  markTodoUncompleteHandler,
  deleteTodoHandler,
} from "@services/services";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    try {
      const todos = await getTodosHandler();
      return { todos };
    } catch (error) {
      console.log(error);
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    try {
      const todo = await createTodoHandler(payload);
      return { todo };
    } catch (error) {
      console.log(error);
    }
  }
);

export const markCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    try {
      const todo = await markTodoCompleteHandler(payload.id);
      return { todo };
    } catch (error) {
      console.log(error);
    }
  }
);

export const markUncompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    try {
      const todo = await markTodoUncompleteHandler(payload.id);
      return { todo };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    try {
      await deleteTodoHandler(payload.id);
      return { id: payload.id };
    } catch (error) {
      console.log(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload?.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [markCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state[index].completed = action.payload.todo.completed;
    },
    [markUncompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
