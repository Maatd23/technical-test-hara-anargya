<template>
  <div>
    <div class="flex bg-white">
      <sidebar></sidebar>
      <div class="min-h-screen w-full bg-gray-100 border-l">
        <nav
          class="flex items-center justify-between bg-white pt-6 pb-4 pl-10 border-b"
        >
          <div class="flex items-center px-4 py-2 rounded-md space-x-3 w-96">
            <p class="text-black">Conversion</p>
          </div>
        </nav>
        <div
          class="mb-12 mt-6 ml-8 mr-8 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border"
          >
            <div class="flex justify-between">
              <div class="pl-6 pt-6">
                <p class="text-xs leading-normal font-semibold text-[#727272]">
                  Pending
                </p>
                <h4 class="text-xl font-semibold text-blue-gray-900">
                  2.480,<span class="text-[#9A9A9A]">30</span>
                </h4>
              </div>
              <div class="pt-6 pr-6">
                <div
                  class="flex bg-[#F2F4F7] rounded w-8 h-8 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.63"
                    height="22.63"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linejoin="round"
                        d="M17 10H7l3.438-3M7 14h10l-3.437 3"
                      />
                      <path
                        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="border-blue-gray-50 pt-8 pl-4 pb-3">
              <p class="text-xs font-medium text-[#AAAAAA] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  class="transform rotate-45"
                >
                  <path
                    fill="#4CBF93"
                    d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"
                  />
                </svg>
                <strong class="font-semibold text-[#4CBF93]">2,15%</strong
                >&nbsp;Last Month
              </p>
            </div>
          </div>
          <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border"
          >
            <div class="flex justify-between">
              <div class="pl-6 pt-6">
                <p class="text-xs leading-normal font-semibold text-[#727272]">
                  Paid
                </p>
                <h4 class="text-xl font-semibold text-blue-gray-900">84.310</h4>
              </div>
              <div class="pt-6 pr-6">
                <div
                  class="flex bg-[#F2F4F7] rounded w-8 h-8 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.63"
                    height="22.63"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linejoin="round"
                        d="M17 10H7l3.438-3M7 14h10l-3.437 3"
                      />
                      <path
                        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="border-blue-gray-50 pt-8 pl-4 pb-3">
              <p class="text-xs font-medium text-[#AAAAAA] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  class="transform rotate-135"
                >
                  <path
                    fill="#EE7C85"
                    d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"
                  />
                </svg>
                <strong class="font-semibold text-[#EE7C85]">1,10%</strong
                >&nbsp;Last Month
              </p>
            </div>
          </div>
          <div
            class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border"
          >
            <div class="flex justify-between">
              <div class="pl-6 pt-6">
                <p class="text-xs leading-normal font-semibold text-[#727272]">
                  Rejected
                </p>
                <h4 class="text-xl font-semibold text-blue-gray-900">12.155</h4>
              </div>
              <div class="pt-6 pr-6">
                <div
                  class="flex bg-[#F2F4F7] rounded w-8 h-8 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.63"
                    height="22.63"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linejoin="round"
                        d="M17 10H7l3.438-3M7 14h10l-3.437 3"
                      />
                      <path
                        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="border-blue-gray-50 pt-8 pl-4 pb-3">
              <p class="text-xs font-medium text-[#AAAAAA] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  class="transform rotate-45"
                >
                  <path
                    fill="#4CBF93"
                    d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"
                  />
                </svg>
                <strong class="font-semibold text-[#4CBF93]">2,15%</strong
                >&nbsp;Last Month
              </p>
            </div>
          </div>
        </div>
        <tableVue :item="user" @view-details="showDetailsDialog"></tableVue>
        <transition name="fade" mode="out-in">
          <Dialog v-if="showDialog" @close-dialog="toggleDialog" :item="selectedUser" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sidebar from "../components/sidebar.vue";
import tableVue from "../components/table.vue";
import Dialog from "../components/DialogVue.vue";
export default {
  components: { sidebar, tableVue, Dialog },
  data() {
    return {
      user: [],
      showDialog: false,
      selectedUser: null,
    };
  },
  methods: {
    async getUser() {
      const { data } = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/users"
      );
      this.user = data.users;
      console.log(this.user);
    },
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
    showDetailsDialog(user) {
      this.selectedUser = user;
      this.toggleDialog();
      console.log(this.selectedUser);
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style>
.rotate-135 {
  transform: rotate(135deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
