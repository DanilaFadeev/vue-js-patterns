<template>
  <ticket-renderless v-slot="props">
    <div v-loading="props.loading">
      <el-card v-if="props.ticketInfo">
        <template v-slot:header>
          Ticket type: {{ props.ticketInfo.transport }}
        </template>
        <p>Passanger: {{ props.ticketInfo.passanger }}</p>
        <p>Destination: {{ props.ticketInfo.destination }}</p>
        <p>Arrival Date: {{ props.ticketInfo.arrivalDate.toLocaleString() }}</p>
      </el-card>
    </div>
  </ticket-renderless>
</template>

<script>
import TicketRenderless from './TicketRenderless';

export default {
  components: { TicketRenderless }
};
</script>
