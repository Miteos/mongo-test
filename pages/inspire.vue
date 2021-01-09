<template>
  <v-row>
    <v-col class="text-center">
      <v-text-field v-model="bookForm.title" label="book title" />
      <v-text-field v-model="bookForm.author" label="author" />
      <v-select
        v-model="bookForm.cover"
        label="cover type"
        :items="['hardcover', 'softcover']"
      />
      <v-text-field v-model="bookForm.pages" label="pages" />
      <v-btn @click="postBookForm">Submit</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const ip = await $axios.$get('api/')
    return { ip }
  },
  data() {
    return {
      bookForm: {
        title: '',
        author: '',
        cover: '',
        pages: '',
      },
    }
  },
  methods: {
    async postBookForm() {
      await this.$axios.post('api/book', this.bookForm)
    },
  },
}
</script>
