<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white h-16 padding-Head-Table">
              <th
                scope="col"
                :colspan="$route.name !== 'Home' ? '5' : '7'"
                class="bg-white text-black pl-4 font-user-list w-max text-left rounded-t-xl"
              >
                User List
              </th>
              <th
                v-if="$route.name !== 'Home'"
                scope="col"
                colspan="1"
                class="bg-white pl-4 font-user-list w-max text-left rounded-t-xl relative"
              >
                <div class="flex items-center">
                  <select v-model="provinceId">
                    <option :value="null" disabled>Select Province</option>
                    <option
                      v-for="item in province"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </th>

              <th
                v-if="$route.name !== 'Home'"
                scope="col"
                colspan="1"
                class="bg-white pl-4 font-user-list text-left rounded-t-xl"
              >
                <div class="flex items-center">
                  <select v-model="cityId" v-if="provinceId">
                    <option
                      v-for="item in city"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </th>
            </thead>
            <thead class="bg-gray-200 border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-2"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-48"
                >
                  User
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-44"
                >
                  Date Of Birth
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-44"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-44"
                >
                  Job
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left w-40"
                >
                  Country
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                v-for="(user, index) in item"
                :key="index"
              >
                <td
                  class="pl-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"
                >
                  {{ user.id }}
                </td>
                <td
                  class="text-sm text-gray-900 font-semibold pl-6 py-4 whitespace-nowrap flex"
                >
                  <img
                    :src="user.profile_picture"
                    alt=""
                    class="rounded-full w-6 h-6 mr-2"
                  />
                  {{ `${user.first_name} ${user.last_name}` }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light pl-6 py-4 whitespace-nowrap"
                >
                  {{ formatBirthDate(user.date_of_birth) }}
                </td>
                <td
                  class="text-sm text-gray-900 font-semibold pl-6 py-4 whitespace-nowrap"
                >
                  {{ user.email }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light pl-6 py-4 whitespace-nowrap"
                >
                  {{ user.job }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light pl-6 py-4 whitespace-nowrap"
                >
                  {{ user.country }}
                </td>
                <td
                  class="flex text-sm text-gray-900 font-light pl-6 py-4 whitespace-nowrap"
                >
                  <button
                    class="middle none center mr-3 rounded-lg border border-gray-300 py-3 px-6 font-sans text-xs font-medium hover:border-gray-500"
                  >
                    Select
                  </button>
                  <button
                    @click="viewDetails(user)"
                    class="middle none center mr-3 rounded-lg border border-gray-300 py-3 px-6 font-sans text-xs font-medium hover:border-gray-500"
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import provinceJs from "../assets/js/province";
import cityJs from "../assets/js/city";
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      province: null,
      city: null,
      provinceId: null,
      cityId: null,
    };
  },
  methods: {
    formatBirthDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate().toString().padStart(2, "0")} / ${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")} / ${date.getFullYear()}`;
    },
    viewDetails(user) {
      this.$emit("view-details", user); // Emit an event with the user data
    },
    async getProvinceName() {
      try {
        this.province = provinceJs;
        console.log(this.province);
      } catch (error) {
        console.error("Error fetching province data:", error);
        return null;
      }
    },
    async getCityName(provinceId) {
      try {
        this.city = cityJs.filter((city) => city.provinsi_id === provinceId);
        console.log(this.city);
      } catch (error) {
        console.error("Error fetching city data:", error);
        return null;
      }
    },
  },
  created() {
    this.getProvinceName();
  },
  watch: {
    provinceId(newProvinceId, oldProvinceId) {
      // Do something when provinceId changes
      console.log(
        `Province ID changed from ${oldProvinceId} to ${newProvinceId}`
      );

      // You can perform other actions or call methods here based on the new value of provinceId
      this.getCityName(newProvinceId);
    },
  },
};
</script>
<style>
.padding-Head-Table {
  padding-left: 28px;
  padding-top: 25px;
  padding-bottom: 18px;
}
.font-user-list {
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
