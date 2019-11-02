<template>
  <layout>
    <template v-slot:header>
      Latest news
    </template>
    <NewsCard>
      <template v-slot:publish-date="slotProps">
        Added: {{ slotProps.date | locale }}
      </template>
    </NewsCard>
    <template v-slot:footer>
      AwesomeNews INC ©
    </template>
  </layout>
</template>

<script>
import Layout from './Layout';
import NewsCard from './NewsCard';

export default {
  components: { Layout, NewsCard },
  filters: {
    locale(value) {
      return value instanceof Date
        ? value.toLocaleString()
        : value;
    }
  }
};
</script>
