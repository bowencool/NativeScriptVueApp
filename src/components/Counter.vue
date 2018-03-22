<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline" />
        <Label :text="message" alignSelf="baseline" class="h2" />
        <Button @tap="increment" text="+" class="btn btn-outline" />
      </FlexboxLayout>

      <Image v-if="surprise" src="~/images/NativeScript-Vue.png" />

      <ListView for="(item, index) in someList" @tap="onItemTap">

        <v-template>
          <Label :text="index.toString()" />
        </v-template>
      </ListView>
    </StackLayout>

  </Page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      someList: new Array(200)
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
    onItemTap(event) {
      console.log(event.index)
    }
  },
};
</script>
