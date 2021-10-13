<template>
  <div class="sidebar-sticky">
    <perfect-scrollbar>
      <nav class="sidebar-sticky-container">
        <ul>
          <router-link
            to="/trello/boards"
            custom
            v-slot="{ isExactActive, href, navigate }"
          >
            <li
              class="sidebar-sticky__item"
              :class="{ active: isExactActive }"
              @click="navigate"
            >
              <a :href="href">
                <i class="icon ic-album mr-2"></i>
                Bảng
              </a>
            </li>
          </router-link>
          <router-link
            to="/trello/templates"
            custom
            v-slot="{ isActive, href, navigate }"
          >
            <li
              class="sidebar-sticky__item"
              :class="{ active: isActive }"
              @click="navigate"
            >
              <a :href="href">
                <i class="icon ic-album mr-2"></i>

                Mẫu
              </a>
            </li>
          </router-link>
          <div v-if="loadingTemplate">Loading ...</div>
          <ul v-else-if="showTemplate">
            <HomeSidebarItem
              v-for="item in templates"
              :key="item.slug"
              :item="item"
            >
            </HomeSidebarItem>
          </ul>
          <router-link
            to="/trello"
            custom
            v-slot="{ isExactActive, href, navigate }"
          >
            <li
              class="sidebar-sticky__item"
              :class="{ active: isExactActive }"
              @click="navigate"
            >
              <a :href="href">
                <i class="icon ic-mn-home"></i>

                Trang chủ
              </a>
            </li>
          </router-link>
        </ul>
      </nav>
    </perfect-scrollbar>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, watch, toRaw } from 'vue'
import type { HomeSidebarTemplate } from './types'
import { homeSidebarItems } from './data'
import { useRoute } from 'vue-router'
import HomeSidebarItem from './HomeSidebarItem.vue'
export default defineComponent({
  name: 'TrelloHomeSidebar',
  components: { HomeSidebarItem },
  setup() {
    const templates = ref<HomeSidebarTemplate[]>([])
    const loadingTemplate = ref(false)
    const showTemplate = ref(false)
    const route = useRoute()
    watch(
      () => route.path,
      () => {
        if (
          route.name === 'TrelloTemplates' ||
          route.name === 'TrelloTemplatesUrl'
        ) {
          showTemplate.value = true
          if (templates.value.length) return
          getTemplates()
        } else {
          showTemplate.value = false
        }
      }
    )
    const getTemplates = async () => {
      try {
        loadingTemplate.value = true
        await new Promise((resolve) => setTimeout(resolve, 1000))
        templates.value = homeSidebarItems
      } catch (err) {
        console.log(err)
      } finally {
        loadingTemplate.value = false
      }
    }
    onMounted(() => {
      if (
        route.name === 'TrelloTemplates' ||
        route.name === 'TrelloTemplatesUrl'
      ) {
        showTemplate.value = true
        if (templates.value.length) return
        getTemplates()
      } else {
        showTemplate.value = false
      }
    })
    return { loadingTemplate, templates, showTemplate }
  },
})
</script>
<style lang="scss" scoped>
.sidebar-sticky {
  top: 0px;
  position: relative;
  height: calc(100vh - 50px);
  .ps {
    height: 100%;
    nav {
      padding: 0 16px;
      width: 240px;
    }
  }

  &__item {
    border-radius: 5px;
    margin: 5px 0;
    font-weight: bold;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    &.active {
      background: #e4f0f5;
      color: #0079bf;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 5px 10px;
    }
  }
}
</style>
