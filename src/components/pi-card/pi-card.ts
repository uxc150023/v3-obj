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

const props = {
  piItem: {
    type: Object,
    default: () => {},
  },
};

export default defineComponent({
  components: {
  },
  props,
  setup(props) {
    const state = reactive({
      piItem: props.piItem,
    })
    const router = useRouter();
    const route = useRoute();


    function jumpTo(){

    }

    onMounted(() => {
      
    });
    return {
      ...toRefs(state),
      jumpTo,
    };
  },
});
