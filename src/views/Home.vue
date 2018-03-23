<style lang="scss">
Label.link {
  padding: 10 0;
}
</style>


<template>
  <Page class="page">

    <ActionBar class="action-bar" title="Home">
      <ActionItem ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" />
      <ActionItem ios.systemIcon="16" ios.position="right" text="action1" android.position="popup" />
      <ActionItem ios.systemIcon="16" ios.position="right" text="action2" android.position="popup" />
    </ActionBar>

    <StackLayout>
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
