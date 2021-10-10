<template>
  <div class="trello-navbar">
    <div class="trello-navbar__left">
      <div class="trello-navbar__app-icon"></div>

      <router-link to="/trello" class="trello-navbar__gohome">
        <div class="trello-navbar__icon"></div>
      </router-link>
      <Dropdown>
        <template #toggle>
          <button class="btn btn-trello--header">
            Các không gian làm việc
            <i class="icon ic-down ml-2"></i>
          </button>
        </template>
        <div class="workspace-card">
          <div class="workspace-card__title">
            Các không gian làm việc
            <span>
              <i class="icon ic-close"></i>
            </span>
          </div>
          <div class="workspace-card__content">
            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc hiện tại
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>

            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc khác
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>
          </div>
        </div>
      </Dropdown>

      <Dropdown>
        <template #toggle>
          <button class="btn">
            Gần đây
            <i class="icon ic-down ml-2"></i>
          </button>
        </template>
        <div class="workspace-card">
          <div class="workspace-card__title">
            Các không gian làm việc
            <span>
              <i class="icon ic-close"></i>
            </span>
          </div>
          <div class="workspace-card__content">
            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc hiện tại
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>

            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc khác
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>
          </div>
        </div>
      </Dropdown>

      <Dropdown>
        <template #toggle>
          <button class="btn">
            Đã đánh dấu sao
            <i class="icon ic-down ml-2"></i>
          </button>
        </template>
        <div class="workspace-card">
          <div class="workspace-card__title">
            Các không gian làm việc
            <span>
              <i class="icon ic-close"></i>
            </span>
          </div>
          <div class="workspace-card__content">
            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc hiện tại
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>

            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc khác
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>
          </div>
        </div>
      </Dropdown>

      <Dropdown>
        <template #toggle>
          <button class="btn">
            Tạo mới
            <i class="icon ic-down ml-2"></i>
          </button>
        </template>
        <div class="workspace-card">
          <div class="workspace-card__title">
            Các không gian làm việc
            <span>
              <i class="icon ic-close"></i>
            </span>
          </div>
          <div class="workspace-card__content">
            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc hiện tại
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>

            <div class="workspace-card__content__item">
              <div class="workspace-card__content__item__title">
                Không gian làm việc khác
              </div>
              <div class="workspace-card__content__item__content">
                Không gian làm việc hiện tại
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
    <div class="trello-navbar__right">
      <SearchInput />
      <button class="btn mx-1">
        <i class="icon ic-info"></i>
      </button>
      <button class="btn mx-1">
        <i class="icon ic-noti"></i>
      </button>
      <Avatar class="mx-1" name="Hiep"></Avatar>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { Dropdown, Avatar } from '/@/components/Common'
import SearchInput from './components/SearchInput.vue'
export default defineComponent({
  name: 'TrelloNavbar',
  components: {
    Dropdown,
    Avatar,
    SearchInput,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.trello-navbar {
  position: fixed;
  display: flex;
  height: 50px;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #0569a7;
  z-index: 999;
  button {
    color: white;
    display: flex;
    border-radius: 5px;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  &__app-icon {
    padding: 10px;
  }
  &__left {
    display: flex;
  }
  &__right {
    display: flex;
  }

  &__gohome {
    margin: 0 10px 0 6px;
    height: 32px;
  }
  &__icon {
    width: 75px;
    height: 15px;
    padding: 8px 0;
    position: relative;
    margin: 0;
    opacity: 1;
    &:before {
      content: '';
      background-image: url(/images/trello/header-logo.gif);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
    &:after {
      background-image: url(/images/trello/header-logo.gif);
      opacity: 0;
    }
  }

  .workspace-card {
    width: 300px;
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-bottom: 10px;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
      span {
        position: absolute;
        right: 0;
      }
    }
    &__content {
      &__item {
        border-top: solid 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
