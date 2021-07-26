<template>

    

  <div>

<v-text-field
            
            class="pt-5 pr-3 pl-3"
            v-model="taskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            outlined
            hide-details=""
            label="Add a task"
            append-icon="mdi-plus"
            clearable
        >
        </v-text-field>

    <v-list
      v-if="$store.state.tasks.length"
      subheader
      two-line
      flat
    >
    <div
     
    v-for="task in $store.state.tasks" 
        :key = "task.id">
      <v-list-item 
        v-if="tasks.length"
        :class="{ 'light-blue lighten-4' : task.completed}"
        @click="$store.commit('toggleTask', task.id)"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox

                :input-value="task.completed"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content 
            >
             <div class="d-flex flex-row">
                <div
                :class="{'strike-through' : task.completed}"
                >{{task.task}}
              </div>

              
              
                
                  <v-icon color="primary" class="trash-icon" @click.stop="$store.commit('deleteTask',task.id)">mdi-delete</v-icon>
               
              
             </div>

            </v-list-item-content>
          </template>

          
          
        </v-list-item>
  
        <v-divider></v-divider>

    </div>

    </v-list>

    <div
    v-else
    >
    
    <div  class="no-tasks">
      <v-icon size = "100" color="primary">mdi-check</v-icon>
      <div class="text-h5">No tasks !</div>
      <div>{{$store.state.name}}</div>
    </div>

    </div>
    
  </div>
</template>

<script>

  export default {
    name: 'Home',

    data(){
      return{
        taskTitle:'',
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

        },{
          id:4,
          task:"Go to date",
          completed:false,
        },
        {
          id:5,
          task:"Cut the grass",
          completed:true,

        },
        {
          id:6,
          task:"Get a haircut",
          completed:false,

        }
      ],
      
      }
    },
    methods:{

      addTask(){

        this.$store.commit('addTask', this.taskTitle);
        this.taskTitle = '';

      },

      /*
      deleteTask(index){
      
        this.tasks = this.tasks.filter(item => item.id != index)
      },
      */
      
    }

  }
</script>

<style scoped>
  .strike-through{
    text-decoration: line-through;
  }
  .trash-icon{
   position: absolute;
   right: 0px;
   margin-right: 5%;
  }

  .no-tasks{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   opacity: 0.7;
   color: #1976d2;
   

  }

</style>