import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    tasks:[
        {
          id:1,
          task:"Go to gym",
          completed:false,
        },
        {
          id:2,
          task:"Groceries",
          completed:true,

        },
        {
          id:3,
          task:"Meeting with the client",
          completed:false,

        }
    ],
  },
  mutations: {
    addTask(state, taskTitle){
        
      let newTask = {
        
        id: Date.now(),
        task: taskTitle,
        completed:false,
      }

      state.tasks.push(newTask);
      
    },
    toggleTask(state, id){

        let task = state.tasks.filter(task => task.id === id)[0];

        task.completed = !task.completed;
        

    },
    deleteTask(state, index) {
      state.tasks = state.tasks.filter(item => item.id != index)
    }
  },
  actions: {
  },
  getters: {
  }
})
