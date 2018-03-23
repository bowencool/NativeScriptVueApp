<style lang="scss">
.my-layout {
  background-color: #3c495e;
  Label {
    background-color: #43b883;
  }
}
</style>


<template>
    <Page class="page">
        <ActionBar class="action-bar" :title="$route.fullPath">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout>

            <TabView>
                <TabViewItem title="Absolute">
                    <AbsoluteLayout class="my-layout">
                        <Label text="10,10" left="10" top="10" width="100" height="100" />
                        <Label text="120,10" left="120" top="10" width="100" height="100" />
                        <Label text="10,120" left="10" top="120" width="100" height="100" />
                        <Label text="130,100" left="130" top="100" width="100" height="100" />
                    </AbsoluteLayout>
                </TabViewItem>
                <TabViewItem title="Dock">
                    <DockLayout stretchLastChild="false" backgroundColor="#3c495e">
                        <Label text="left" dock="left" width="40" backgroundColor="#43b883" />
                        <Label text="top" dock="top" height="40" backgroundColor="#289062" />
                        <Label text="right" dock="right" width="40" backgroundColor="#43b883" />
                        <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062" />
                    </DockLayout>
                </TabViewItem>
                <TabViewItem title="Flexbox">
                    <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
                        <Label text="1st" height="70" backgroundColor="#43b883" />
                        <Label text="center" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48" />
                        <Label text="flex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062" />
                        <Label text="4th" height="70" backgroundColor="#289062" />
                    </FlexboxLayout>
                </TabViewItem>
                <TabViewItem title="Grid">
                    <GridLayout columns="60, *, auto" rows="60, *, auto" backgroundColor="#3c495e">
                        <Label text="0,0" row="0" col="0" backgroundColor="#43b883" />
                        <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48" />
                        <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062" />
                        <Label text="1,1" row="1" col="1" backgroundColor="#43b883" />
                        <Label text="1,2" row="1" col="2" backgroundColor="#289062" />
                        <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48" />
                        <Label text="2,2" row="2" col="2" backgroundColor="#43b883" />
                    </GridLayout>
                </TabViewItem>
                <TabViewItem title="Stack">
                    <StackLayout backgroundColor="#3c495e">
                        <Label text="left" horizontalAlignment="left" width="33%" height="70" backgroundColor="#43b883" />
                        <Label text="center" horizontalAlignment="center" width="33%" height="70" backgroundColor="#289062" />
                        <Label text="right" horizontalAlignment="right" width="33%" height="70" backgroundColor="#1c6b48" />
                        <Label text="stretch" horizontalAlignment="stretch" height="70" backgroundColor="#43b883" />
                    </StackLayout>
                </TabViewItem>
                <TabViewItem title="Wrap">
                    <WrapLayout backgroundColor="#3c495e" itemWidth="150" itemHeight="150">
                        <Label text="first" backgroundColor="#43b883" />
                        <Label text="second" backgroundColor="#1c6b48" height="20%" />
                        <Label text="third" height="40" backgroundColor="#289062" />
                        <Label text="fourth" width="25%" height="50%" backgroundColor="#289062" />
                    </WrapLayout>
                </TabViewItem>
            </TabView>
        </StackLayout>

    </Page>
</template>

<script>
export default {
}
</script>
