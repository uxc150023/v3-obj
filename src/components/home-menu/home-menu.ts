import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
} from "vue";
import { useRouter, useRoute } from "vue-router";

interface menuItem {
  id: number;
  label: string;
  jumpTo: string;
}

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive({
      menuList: [
        {
          id: 0,
          label: "首页",
          jumpTo: "home",
        },
        {
          id: 1,
          label: "找工具",
          jumpTo: "tools",
        },
        {
          id: 2,
          label: "找任务",
          jumpTo: "tasks",
        },
        {
          id: 3,
          label: "找专家",
          jumpTo: "",
        },
        {
          id: 4,
          label: "找研究者",
          jumpTo: "",
        },
      ],
      activeMenuIndex:  0,
    })
    const router = useRouter();
    const route = useRoute();

    function jumpTo(item: menuItem) {
      state.activeMenuIndex = item.id;
      router.push({ name: item.jumpTo });
    }

    onMounted(() => {
      
    });
    return {
      ...toRefs(state),
      jumpTo,
    };
  },
});
