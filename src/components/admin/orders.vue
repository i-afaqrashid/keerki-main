<template>
<div class="w-90 d-flex justify-content-center align-items-center flex-column">

    <div class="w-90 d-flex justify-content-end align-items-center pt-9">
      <button
        class="outline-none justify-content-center d-flex align-items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="mx-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 6L12 2L8 6"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2V15"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="mb-0">{{$t('adminOrdersExportToCsv')}}</p>
      </button>
    </div>
    <OrdersTable/>
</div>
</template>
<script>
import OrdersTable from './ordersTable'
export default {
    name:"AdminOrders",
    components:{
        OrdersTable
    }
}
</script>