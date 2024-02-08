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

        <tableVue :item="user" @view-details="showDetailsDialog"></tableVue>
        <transition name="fade" mode="out-in">
          <Dialog
            v-if="showDialog"
            @close-dialog="toggleDialog"
            :item="selectedUser"
          />
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
