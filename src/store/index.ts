import { createStore } from "vuex";

import auth from "@/modules/auth/store";
import tasks from "@/modules/tasks/store";


const store = createStore({
  modules: {
    auth,
    tasks
  }
})

export default store
