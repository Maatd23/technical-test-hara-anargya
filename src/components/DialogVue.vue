<!-- Dialog.vue -->

<template>
  <div class="dialog-overlay" @click="closeDialog">
    <div class="dialog-content" @click.stop>
      <div class="flex justify-between items-start">
        <div class="flex pt-8 pl-6">
          <img
            :src="item.profile_picture"
            alt=""
            class="img-size-dialog rounded-full"
          />
          <div class="pt-15 pl-8">
            <p class="text-4xl font-medium text-black">
              {{ `${item.first_name} ${item.last_name}` }}
            </p>
            <p class="text-xl font-medium text-black">
              {{ item.email }}
            </p>
            <p class="text-xl font-medium text-black">
              {{ item.phone }}
            </p>
          </div>
        </div>
        <div @click="closeDialog" role="button" class="w-max rounded-lg p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FA1212"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
      <div class="pt-8 pl-8">
        <div class="flex items-start">
          <p class="text-lg font-normal text-black w-20">Gender </p>
          <p class="text-lg font-normal text-black">: {{ item.gender }}</p>
        </div>
        <div class="flex items-start">
          <p class="text-lg font-normal text-black w-20">Job </p>
          <p class="text-lg font-normal text-black">: {{ item.job }}</p>
        </div>
        <div class="flex items-start">
          <p class="text-lg font-normal text-black w-20">Address</p>
          <p
            v-html="fullAddress(item)"
            class="text-lg font-normal text-black"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog"); // Emit an event to notify the parent component to close the dialog
    },
    fullAddress(item) {
      if (!item) return "";

      const { street, city, state, zipcode, country } = item;

      // Construct a proper address with line breaks
      return `: ${street}<br>${city}, ${state} ${zipcode}<br>${country}`;
    },
  },
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}
.pt-15 {
  padding-top: 31px;
}

.dialog-content {
  background: white;
  
  height: 436px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.img-size-dialog {
  width: 150px;
  height: 150px;
}
</style>
