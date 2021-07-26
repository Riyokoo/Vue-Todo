<template>
  <div>

    <AddTaskField></AddTaskField>


    <div
    v-if="$store.state.tasks.length"  
    >
      <v-list
        
        v-for="item in $store.state.tasks"
        :key="item.id"
        subheader
        two-line
        flat
      >
        
        
          <v-list-item class="task-item"
          :class="{ 'light-blue lighten-4' : item.completed}"
          @click="$store.commit('toggleTask', item.id)"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="item.completed"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content 
            >
             <div class="d-flex flex-row">
                <div
                :class="{'strike-through' : item.completed}"
                >{{item.task}}
              </div>

              
              
                
                  <v-icon color="primary" class="trash-icon" @click.stop="$store.commit('deleteTask',item.id)">mdi-delete</v-icon>
               
              
             </div>

            </v-list-item-content>
            </template>

          </v-list-item>

          <v-divider></v-divider>

        
      </v-list>
    </div>

    <div
    v-else
      ><div  class="no-tasks">
      <v-icon size = "100" color="primary">mdi-check</v-icon>
      <div class="text-h5">No tasks !</div>
      <div>{{$store.state.name}}</div>
    </div>

    </div>
    
   
  </div>

  
  
</template>

<script>

  import AddTaskTextField from '../components/AddTaskTextField.vue'

  export default {
    name: 'Home',

    components:{
      'AddTaskField':AddTaskTextField,
    },

    data(){
      return{
        taskTitle:'',
        
      
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

  .task-item{
    margin-top: -8px;
  }

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