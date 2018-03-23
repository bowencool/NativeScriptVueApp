<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.fullPath">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout>

      <Label :text="JSON.stringify($route.params)" />
      <Label :text="JSON.stringify($route.query)" />

      <Label text="<router-view /> doesn't work." class="text-danger"></Label>
      <router-view />

      <Label text="<child-component /> doesn't work." class="text-danger"></Label>
      <!-- <ChildComponent /> -->

    </StackLayout>

  </Page>
</template>

<script>
import ChildComponent from "../../components/ChildComp"
export default {
  components: {
    ChildComponent
  }
};
</script>
