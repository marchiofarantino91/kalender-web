<script setup>
import { ref } from "#imports";
const date = ref(new Date());

const label = computed(() =>
  date.value.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);
const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);
</script>

<template>
  <div>
    <client-only>
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton icon="i-heroicons-calendar-days-20-solid" :label="label" />

        <template #panel="{ close }">
          <!-- <VDatePicker v-model="date" :attributes="attrs" /> -->
          <VDatePicker
            :popover="{ visibility: 'click', placement: 'top' }"
            :input-props="{
              placeholder: 'Date de fin',
              class: 'form-control rounded-0',
            }"
            v-model="date"
            format="yyyy"
            value-format="yyyy"
            type="year"
          />
        </template>
      </UPopover>
    </client-only>
  </div>
</template>
