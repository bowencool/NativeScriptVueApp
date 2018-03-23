<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.fullPath">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">

      <Label class="body" textWrap=true :text="$route.query.user"/>

      <Button class="btn btn-primary" @tap="surprise = !surprise" text="Tap me!"/>

      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>

    </StackLayout>

  </Page>
</template>

<script>
  export default {
    data () {
      return {
        surprise: false,
      };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

</style>
