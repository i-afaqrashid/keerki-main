<template>
  <div>
    <div
      class="mt-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="font-weight-bold fs-5 w-60">
        {{ $t("randomSmall") }}
      </h1>
      <h4 class="font-weight-normal pt-4 w-60 fs-20 text-center">
        {{ $t("randomLarge") }}
      </h4>
      <div
        class="d-flex justify-content-between mt-5 align-items-center flex-column flex-sm-row"
      >
        <router-link to="/dashboard/order-form">
          <b-button
            class="p-3 btn-width-160 mx-3"
            squared
            variant="secondary"
            >{{ $t("tryForFree") }}</b-button
          >
        </router-link>
        <b-modal
          id="catalogs-modal"
          centered
          :title="`${$t('downloadYourCatalog')}`"
          hide-footer
          header-class="border-0"
        >
          <div
            class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
            dir="auto"
          >
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24">*</p>
              <input
                id="input-700"
                type="text"
                :placeholder="`${$t('yourName')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <input
                id="input-800"
                type="text"
                :placeholder="`${$t('companyName')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <input
                id="input-900"
                type="text"
                :placeholder="`${$t('catalogEmail')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <b-dropdown
                  :text="selected"
                  toggle-class="catalog-input outline-none mr-3 select-width border mt-3 d-flex justify-content-center align-items-center px-4"
                  menu-class="h-select-200"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="(options, index) in countryCodes"
                    :key="options.value"
                    @click="(e) => itemSelected(e, index)"
                    >{{ options.text }}</b-dropdown-item
                  >
                </b-dropdown>
                <input
                  id="input-7"
                  type="text"
                  :placeholder="`${$t('catalogPhone')}`"
                  class="catalog-input form-input input-width outline-none border rounded-lg px-3 mt-3"
                  style="width: 73% !important"
                />
              </div>
            </div>
            <div class="w-90 d-flex">
              <b-form-checkbox class="mt-4" required>{{
                $t("termsAndConditions")
              }}</b-form-checkbox>
            </div>
            <button
              class="text-white btn w-100 catalog-btn outline-none mt-4"
              @click="$bvModal.hide('catalogs-modal')"
            >
              {{ $t("catalogDownloadBtn") }}
            </button>
          </div>
        </b-modal>
        <b-button
          v-b-modal.catalogs-modal
          class="p-3 btn-width-160 mt-3 mt-sm-0"
          squared
          variant="outline-light"
          >{{ $t("catalogs") }}</b-button
        >
      </div>
    </div>
    <div class="mt-5">
      <img src="../assets/introImage.png" class="img-fluid w-100 introImage" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
  data() {
    return {
      countryCodes: [
        { value: "+986", text: " +986 " + this.$t("ksa") },
        { value: "+971", text: " +971 " + this.$t("uae") },
        { value: "+974", text: " +974 " + this.$t("qatar") },
        { value: "+973", text: " +973 " + this.$t("bahrain") },
        { value: "+978", text: " +978 " + this.$t("oman") },
        { value: "+961", text: " +961 " + this.$t("lebanon") },
        { value: "+962", text: " +962 " + this.$t("jordan") },
        { value: "+963", text: " +963 " + this.$t("egypt") },
        { value: "+376", text: " +376 " + this.$t("germany") },
        { value: "+244", text: " +244 " + this.$t("Andorra") },
        { value: "+1264", text: " +1264 " + this.$t("Angola") },
        { value: "+1268", text: " +1268 " + this.$t("Anguilla") },
        { value: "+54", text: " +54 " + this.$t("Antigua") },
        { value: "+374", text: " +374 " + this.$t("Argentina") },
        { value: "+297", text: " +297 " + this.$t("Armenia") },
        { value: "+61", text: " +61 " + this.$t("Aruba") },
        { value: "+43", text: " +43 " + this.$t("Australia") },
        { value: "+994", text: " +994 " + this.$t("Austria") },
        { value: "+1242", text: " +1242 " + this.$t("Azerbaijan") },
        { value: "+880", text: " +880 " + this.$t("Bahamas") },
        { value: "+1246", text: " +1246 " + this.$t("Bangladesh") },
        { value: "+1375", text: " +1375 " + this.$t("Belarus") },
      ],
      selected: "+986",
    };
  },
  methods: {

    itemSelected(e, index) {
      this.selected = this.countryCodes[index].value;
    },
  },
};
</script>
<style scoped>
.text-red {
  color: red !important;
}
</style>