<template>
    <v-text-field   
        class="pt-5 pr-3 pl-3 pb-3"
        v-model="taskTitle"
        @click:append="addTask"
        @keyup.enter="addTask"
        outlined
        hide-details=""
        label="Add a task"
        append-icon="mdi-plus"
        clearable
    ></v-text-field>
</template>

<script>
export default {

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
    }

}
</script>

<style>

</style>