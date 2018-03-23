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
          path: '/hello?user=John+Appleseed',
          text: 'hello'
        },
        {
          path: '/counter',
          text: 'vuex'
        },
        {
          path: '/dialogs',
          text: 'dialogs'
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
