<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.fullPath">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout>

      <Label :text="JSON.stringify($route.params)" />
      <Label :text="JSON.stringify($route.query)" />

      <!-- todo 嵌套路由 -->
      <router-view />

    </StackLayout>

  </Page>
</template>

<script>
export default {};
</script>
