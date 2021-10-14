import { defineComponent, onMounted, ref, unref, h } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const count = ref(0)

    const increment = () => count.value++
    onMounted(() => {})
    return () => (
      <button class='btn btn-success' onClick={increment}>
        Increate ({count.value})
      </button>
    )
  },
})
