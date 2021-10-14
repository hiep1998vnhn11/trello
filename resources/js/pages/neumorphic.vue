<template>
  <div class="container">
    <div class="components">
      <div class="switch">
        <div class="switch__1">
          <input id="switch-1" type="checkbox" />
          <label for="switch-1"></label>
        </div>

        <div class="switch__2">
          <input id="switch-2" type="checkbox" checked />
          <label for="switch-2"></label>
        </div>
      </div>

      <div class="checkbox">
        <div class="checkbox__1">
          <input id="checkbox-1" type="checkbox" />
          <label for="checkbox-1">
            <ion-icon name="checkmark-outline"></ion-icon
          ></label>
        </div>
        <div class="checkbox__2">
          <input id="checkbox-2" type="checkbox" checked />
          <label for="checkbox-2">
            <ion-icon name="checkmark-outline"></ion-icon
          ></label>
        </div>
      </div>

      <div class="radio">
        <div class="radio__1">
          <input id="radio-1" type="radio" name="radio" value="1" />
          <label for="radio-1"></label>
        </div>

        <div class="radio__2">
          <input id="radio-2" type="radio" name="radio" value="2" checked />
          <label for="radio-2"></label>
        </div>
      </div>

      <div class="btn btn__primary"><p>Button</p></div>
      <div class="btn btn__secondary"><p>Button</p></div>

      <div class="clock">
        <div class="hand hours"></div>
        <div class="hand minutes"></div>
        <div class="hand seconds"></div>
        <div class="point"></div>
        <div class="marker">
          <span class="marker__1"></span>
          <span class="marker__2"></span>
          <span class="marker__3"></span>
          <span class="marker__4"></span>
        </div>
      </div>

      <div class="chip">
        <div class="chip__icon">
          <ion-icon name="color-palette"></ion-icon>
        </div>
        <p>Neumorphic Design</p>
        <div class="chip__close">
          <ion-icon name="close"></ion-icon>
        </div>
      </div>

      <div class="circle">
        <span class="circle__btn">
          <ion-icon class="pause" name="pause"></ion-icon>
          <ion-icon class="play" name="play"></ion-icon>
        </span>
        <span class="circle__back-1"></span>
        <span class="circle__back-2"></span>
      </div>

      <div class="form">
        <input type="text" class="form__input" placeholder="Type anything..." />
      </div>

      <div class="search">
        <input type="text" class="search__input" placeholder="Search..." />
        <div class="search__icon">
          <ion-icon name="search"></ion-icon>
        </div>
      </div>

      <div class="segmented-control">
        <input type="radio" name="radio2" value="3" id="tab-1" checked />
        <label for="tab-1" class="segmented-control__1"> <p>Tab 1</p></label>

        <input type="radio" name="radio2" value="4" id="tab-2" />
        <label for="tab-2" class="segmented-control__2"> <p>Tab 2</p></label>

        <input type="radio" name="radio2" value="5" id="tab-3" />
        <label for="tab-3" class="segmented-control__3"> <p>Tab 3</p></label>

        <div class="segmented-control__color"></div>
      </div>

      <div class="icon">
        <div class="icon__home">
          <ion-icon name="home"></ion-icon>
        </div>
        <div class="icon__account">
          <ion-icon name="person"></ion-icon>
        </div>
        <div class="icon__settings">
          <ion-icon name="settings"></ion-icon>
        </div>
      </div>

      <div class="slider">
        <div class="slider__box">
          <span class="slider__btn" id="find"></span>
          <span class="slider__color"></span>
          <span class="slider__tooltip">50%</span>
        </div>
      </div>
    </div>
    <a href="https://dribbble.com/myacode" class="dribbble" target="_blank">
      <ion-icon name="logo-dribbble"></ion-icon>
    </a>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'NeumorphicPage',
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
$primary-light: #8abdff;
$primary: #6d5dfc;
$primary-dark: #5b0eeb;
$white: #ffffff;
$greyLight-1: #e4ebf5;
$greyLight-2: #c8d0e7;
$greyLight-3: #bec8e4;
$greyDark: #9baacf;
$shadow: 0.3rem 0.3rem 0.6rem $greyLight-2, -0.2rem -0.2rem 0.5rem $white;
$inner-shadow: inset 0.2rem 0.2rem 0.5rem $greyLight-2,
  inset -0.2rem -0.2rem 0.5rem $white;

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px    100% = 16px
  overflow-y: scroll;
  background: $greyLight-1;

  @media screen and (min-width: 900px) {
    font-size: 75%;
  }
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: $greyLight-1;
}

.components {
  width: 75rem;
  height: 40rem;
  border-radius: 3rem;
  box-shadow: 0.8rem 0.8rem 1.4rem $greyLight-2, -0.2rem -0.2rem 1.8rem $white;
  padding: 4rem;
  display: grid;
  grid-template-columns: 17.6rem 19rem 20.4rem;
  grid-template-rows: repeat(autofit, min-content);
  grid-column-gap: 5rem;
  grid-row-gap: 2.5rem;
  align-items: center;
}

/*  SWITCH  */
.switch {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 3rem;
  justify-self: center;
  input {
    display: none;
  }

  &__1,
  &__2 {
    width: 6rem;
    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3rem;
      box-shadow: $shadow;
      background: rgba(255, 255, 255, 0);
      position: relative;
      cursor: pointer;
      border-radius: 1.6rem;

      &::after {
        content: '';
        position: absolute;
        left: 0.4rem;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 50%;
        background: $greyDark;
        transition: all 0.4s ease;
      }
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(
            330deg,
            $primary-dark 0%,
            $primary 50%,
            $primary-light
          )
          100%;
        opacity: 0;
        transition: all 0.4s ease;
      }
    }
  }
  & input:checked {
    & ~ label {
      &::before {
        opacity: 1;
      }
      &::after {
        left: 57%;
        background: $greyLight-1;
      }
    }
  }
}

/*  CHECKBOX  */
.checkbox {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: repeat(2, 6rem);
  grid-gap: 3rem;
  justify-content: center;
  input {
    display: none;
  }

  &__1,
  &__2 {
    width: 6rem;
    display: flex;
    justify-content: center;
    label {
      box-shadow: $shadow;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      width: 2.8rem;
      height: 2.8rem;

      &:hover i {
        color: $primary;
      }

      i {
        font-size: 1.8rem;
        font-weight: 700;
        color: $greyDark;
        transition: 0.3s ease;
      }
    }

    & input:checked {
      & ~ label {
        box-shadow: $inner-shadow;
        i {
          color: $primary;
        }
      }
    }
  }
}

/*  RADIO  */
.radio {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  input {
    display: none;
  }

  &__1,
  &__2 {
    & input:checked {
      & ~ label {
        box-shadow: $inner-shadow;
        &::after {
          background: $primary;
        }
      }
    }
    label {
      box-shadow: $shadow;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      &:hover {
        &::after {
          background: $primary;
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        background: $greyDark;
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }
  }
}

/*  BUTTONS  */
.btn {
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: $shadow;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;

  &__primary {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    background: $primary;
    box-shadow: inset 0.2rem 0.2rem 1rem $primary-light,
      inset -0.2rem -0.2rem 1rem $primary-dark, $shadow;
    color: $greyLight-1;

    &:hover {
      color: $white;
    }
    &:active {
      box-shadow: inset 0.2rem 0.2rem 1rem $primary-dark,
        inset -0.2rem -0.2rem 1rem $primary-light;
    }
  }

  &__secondary {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    color: $greyDark;
    &:hover {
      color: $primary;
    }
    &:active {
      box-shadow: $inner-shadow;
    }
  }

  p {
    font-size: 1.6rem;
  }
}

/*  CLOCK  */
.clock {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  width: 12rem;
  height: 12rem;
  justify-self: center;
  box-shadow: $shadow;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .hand {
    position: absolute;
    transform-origin: bottom;
    bottom: 6rem;
    border-radius: 0.2rem;
    z-index: 200;
  }

  .hours {
    width: 0.4rem;
    height: 3.2rem;
    background: $greyLight-3;
  }

  .minutes {
    width: 0.4rem;
    height: 4.6rem;
    background: $greyDark;
  }
  .seconds {
    width: 0.2rem;
    height: 5.2rem;
    background: $primary;
  }
  .point {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: $primary;
    z-index: 300;
  }

  .marker {
    width: 95%;
    height: 95%;
    border-radius: 50%;
    position: relative;
    box-shadow: $inner-shadow;

    &::after {
      content: '';
      width: 60%;
      height: 60%;
      position: absolute;
      box-shadow: inset 1px 1px 1px $greyLight-2, inset -1px -1px 1px $white;
      border-radius: 50%;
      top: 20%;
      left: 20%;
      filter: blur(1px);
    }

    &__1,
    &__2,
    &__3,
    &__4 {
      position: absolute;
      border-radius: 0.1rem;
      box-shadow: inset 1px 1px 1px $greyLight-2, inset -1px -1px 1px $white;
    }

    &__1,
    &__2 {
      width: 0.2rem;
      height: 0.6rem;
      left: 5.6rem;
    }

    &__3,
    &__4 {
      width: 0.6rem;
      height: 0.2rem;
      top: 5.6rem;
    }

    &__1 {
      top: 2%;
    }
    &__2 {
      top: 98%;
      transform: translateY(-0.6rem);
    }
    &__3 {
      left: 2%;
    }
    &__4 {
      left: 98%;
      transform: translateX(-0.6rem);
    }
  }
}

/*  CHIP  */
.chip {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  justify-self: center;
  width: 17rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: $shadow;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin: 0 0 0 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: $primary;
  }

  p {
    font-size: 0.9rem;
    margin-left: -1.8rem;
    color: $greyDark;
  }

  &__close {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 0.5rem;
    display: flex;
    font-size: 1.6rem;
    color: $greyLight-3;
    cursor: pointer;
  }
}

/*  PLAY BUTTON  */
.circle {
  grid-column: 2 / 3;
  grid-row: 4 / 6;
  width: 9rem;
  height: 100%;
  justify-self: center;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;

  &__btn {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 6rem;
    height: 6rem;
    display: flex;
    margin: 0.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 3.2rem;
    color: $primary;
    z-index: 300;
    background: $greyLight-1;
    box-shadow: $shadow;
    cursor: pointer;
    position: relative;
    &.shadow {
      box-shadow: $inner-shadow;
    }

    .play {
      position: absolute;
      opacity: 0;
      transition: all 0.2s linear;
      &.visibility {
        opacity: 1;
      }
    }
    .pause {
      position: absolute;
      transition: all 0.2s linear;
      &.visibility {
        opacity: 0;
      }
    }
  }

  &__back-1,
  &__back-2 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    filter: blur(1px);
    z-index: 100;
  }

  &__back-1 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight-2, -0.4rem -0.4rem 0.8rem $white;
    background: linear-gradient(to bottom right, $greyLight-2 0%, $white 100%);
    animation: waves 4s linear infinite;

    &.paused {
      animation-play-state: paused;
    }
  }

  &__back-2 {
    box-shadow: 0.4rem 0.4rem 0.8rem $greyLight-2, -0.4rem -0.4rem 0.8rem $white;
    animation: waves 4s linear 2s infinite;

    &.paused {
      animation-play-state: paused;
    }
  }
}

/*  FORM  */
.form {
  grid-column: 3 / 4;
  grid-row: 3 / 4;

  &__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 1.4rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: $greyDark;

    &::placeholder {
      color: $greyLight-3;
    }
    &:focus {
      outline: none;
      box-shadow: $shadow;
    }
  }
}

/*  SEARCH  */
.search {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  position: relative;
  display: flex;
  align-items: center;

  &__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: $greyDark;

    &::placeholder {
      color: $greyLight-3;
    }
    &:focus {
      outline: none;
      box-shadow: $shadow;

      + .search__icon {
        color: $primary;
      }
    }
  }

  &__icon {
    height: 2rem;
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: $greyDark;
    transition: 0.3s ease;
  }
}

/*  SEGMENTED-CONTROL */
.segmented-control {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 20.4rem;
  height: 4rem;
  box-shadow: $shadow;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  input {
    display: none;
  }

  > input:checked + label {
    transition: all 0.5s ease;
    color: $primary;
  }

  &__1,
  &__2,
  &__3 {
    width: 6.8rem;
    height: 3.6rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $greyDark;
    transition: all 0.5s ease;

    &:hover {
      color: $primary;
    }
  }

  &__color {
    position: absolute;
    height: 3.4rem;
    width: 6.2rem;
    margin-left: 0.3rem;
    border-radius: 0.8rem;
    box-shadow: $inner-shadow;
    pointer-events: none;
  }
}

#tab-1:checked ~ .segmented-control__color {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-2:checked ~ .segmented-control__color {
  transform: translateX(6.8rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-3:checked ~ .segmented-control__color {
  transform: translateX(13.6rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/*  ICONS  */
.icon {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  display: flex;
  justify-content: space-between;
  &__account,
  &__home,
  &__settings {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: $shadow;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    color: $greyDark;
    transition: all 0.5s ease;

    &:active {
      box-shadow: $inner-shadow;
      color: $primary;
    }
    &:hover {
      color: $primary;
    }
  }
}

/*  RANGE-SLIDER  */
.slider {
  grid-column: 3 / 4;
  grid-row: 5 / 6;
  align-self: center;
  display: flex;
  flex-direction: column;

  &__box {
    width: 100%;
    height: 1rem;
    cursor: pointer;
    box-shadow: $inner-shadow;
    border-radius: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: $white;
    position: absolute;
    box-shadow: 0px 0.1rem 0.3rem 0px $greyLight-3;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ~ .slider__tooltip {
      opacity: 1;
    }
    &::after {
      content: '';
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      box-shadow: $inner-shadow;
    }
  }

  &__color {
    height: 100%;
    width: 50%;
    position: absolute;
    left: 0;
    z-index: 100;
    border-radius: inherit;
    background: $primary;
    background: linear-gradient(-1deg, $primary-dark) 0%, $primary 50%,
      $primary-light 100%;
  }

  &__tooltip {
    position: absolute;
    top: 2.6rem;
    height: 2.5rem;
    width: 3rem;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: $primary;
    box-shadow: $shadow;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.dribbble {
  position: fixed;
  font-size: 2.6rem;
  right: 2rem;
  bottom: 1rem;
  color: #ea4c89;
}
</style>
