<template>
  <Page class="page">
    <ActionBar :title="$route.fullPath">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout>

      <Label :text="JSON.stringify($route.params)" />
      <Label :text="JSON.stringify($route.query)" />

    </StackLayout>

  </Page>
</template>

<script>
export default {};
</script>
