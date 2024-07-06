export default {
  name: 'tasks',
  component: () => import( '@/modules/tasks/layouts/TasksLayout.vue'),
  // children: [
  //   {
  //     path: '',
  //     name: 'no-entry',
  //     component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
  //   },
  //   {
  //     path: ':id',
  //     name: 'entry-view',
  //     component: () => import('@/modules/daybook/views/EntryView.vue'),
  //     props: ( route ) => {
  //       return {
  //         id: route.params.id
  //       }
  //     }
  //   }
  // ]
}