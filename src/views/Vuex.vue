<template>
  <Page class="page">
    <ActionBar title="My App" visibility="hidden">
      <ActionItem @tap="onTapShare" ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" />
      <ActionItem @tap="onTapDelete" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" />
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline" />
        <Label :text="message" alignSelf="baseline" class="h2" />
        <Button @tap="increment" text="+" class="btn btn-outline" />
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    }
  },
  methods: mapActions([
    'decrement',
    'increment',
  ])
};
</script>
