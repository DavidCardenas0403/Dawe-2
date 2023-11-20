<script setup lang="ts">
import type { Emoji } from "@/types/Emoji";
import { ref, type Ref, watch } from "vue";
const emoji: Ref<Emoji> = ref("happy");

const emit = defineEmits<{
  "@selectEmoji": [emoji: Emoji];
}>();

const emitEmoji = (): void => {
  emit("@selectEmoji", emoji.value);
};

watch(emoji, emitEmoji);
</script>

<template>
  <div>
    <button type="button" @click="() => (emoji = 'happy')">
      <img
        :class="emoji === 'happy' ? 'selected' : ''"
        src="../assets/icons/happy.svg"
        alt="Emoji happy"
      />
    </button>
    <button type="button" @click="() => (emoji = 'sad')">
      <img
        :class="emoji === 'sad' ? 'selected' : ''"
        src="../assets/icons/sad.svg"
        alt="Emoji sad"
      />
    </button>
    <button type="button" @click="() => (emoji = 'neutral')">
      <img
        :class="emoji === 'neutral' ? 'selected' : ''"
        src="../assets/icons/neutral.svg"
        alt="Emoji neutral"
      />
    </button>
    <button type="button" @click="() => (emoji = 'angry')">
      <img
        :class="emoji === 'angry' ? 'selected' : ''"
        src="../assets/icons/angry.svg"
        alt="Emoji angry"
      />
    </button>
    <button type="button" @click="() => (emoji = 'surprised')">
      <img
        :class="emoji === 'surprised' ? 'selected' : ''"
        src="../assets/icons/surprised.svg"
        alt="Emoji surprised"
      />
    </button>
  </div>
</template>

<style scoped>
div {
  margin: 10px 0 5px 0;
  display: flex;
  gap: 5px;
}
button {
  width: 25px;
  height: 25px;
  padding: 0;
  border: 0;
  background-color: transparent;
}
img {
  width: 25px;
}
img:hover {
  cursor: pointer;
}
.selected {
  background-color: rgb(197, 197, 197);
  border-radius: 50%;
}
</style>
