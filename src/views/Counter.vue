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


      <Image v-if="surprise" src="~/images/NativeScript-Vue.png" />

      <ActivityIndicator :busy="!surprise" />

      <!-- <ListView for="(item, index) in someList" @tap="onItemTap"> -->

      <!-- <v-template if="true">
        <Label text="所发生的" />
        <Label text="所发生的" />
      </v-template> -->
      <!-- </ListView> -->
    </StackLayout>

  </Page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      someList: new Array(99)
    }
  },
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return (this.$store.state.counter.count >= 5);
    },
  },
  methods: {
    ...mapActions([
      'decrement',
      'increment',
    ]),
    log(event) {
      console.log(event.index)
    }
  },
};
</script>
