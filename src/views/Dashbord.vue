<template>
<v-container>
  <v-row >
    <v-col cols="3">
      <TaskForm
        form-title="AddTask"
      />
    </v-col>
    <v-col cols="9">
      <v-row no-gutters>
        <v-col cols="6">
          <TaskList title = "Todo">
            <template v-slot:contents>
              <TaskCard
                v-for="task in tasks"
                :key="task.id"
                :id ="task.id"
                :title="task.title"
                :text="task.text"
                class="mb-3"
              />
            </template>
          </TaskList>
        </v-col>
        <v-col cols="6">
          <TaskList
            title = "Done"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <Overlay :is-overlay="isOverlay">
    <template v-slot:inner>
      <TaskForm
        form-title="UpdateTask"
      />
    </template>
  </Overlay>
</v-container>
</template>
<script>
  import TaskList from '../components/TaskList'
  import TaskForm from '../components/TaskForm'
  import TaskCard from '../components/TaskCard'
  import Overlay from '../components/Overlay'
  export default {
    components: {
      TaskList,
      TaskForm,
      TaskCard,
      Overlay
    },
    data: ()=>({
      isOverlay: false,
      tasks: [
        {
          title: 'test1',
          text: 'foo bar hoge',
          id: 1,
          finished: false
        },
        {
          title: 'test2',
          text: 'foo bar hoge',
          id: 2,
          finished: false,
        },
        {
          title: 'test3',
          text: 'foo bar hoge',
          id: 3,
          finished: false,
        },         
      ]
    })
}
</script>