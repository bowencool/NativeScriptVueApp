<template>
    <Page>
        <ActionBar class="action-bar" :title="$route.fullPath">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <Label text="this is layout-page"></Label>
    </Page>
</template>

<script>
export default {

}
</script>
