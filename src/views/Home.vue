<style lang="scss">
Label.link {
  padding: 10 0;
}
</style>


<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home" />

    <StackLayout>

      <!-- <ScrollView>
      <StackLayout>
        <Label v-for="link in links" class="text-capitalize text-center link" @tap="$router.push(link.path)">{{link.text}}</Label>
      </StackLayout>
    </ScrollView> -->

      <ListView for="link in links" @itemTap="navTo">
        <v-template>
          <Label :text="link.text" class="text-capitalize text-center link" />
        </v-template>
      </ListView>

    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: '/routing/123/childroute?b=456',
          text: 'routing'
        },
        {
          path: '/vuex',
          text: 'vuex'
        },
        {
          path: '/dialogs',
          text: 'dialogs'
        },
        {
          path: '/layouts',
          text: 'layouts'
        },
      ]
    }
  },
  methods: {
    log(sth) {
      console.log(sth)
    },
    navTo(e) {
      this.$router.push(e.item.path)
    }
  }
}
</script>
