<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home" />

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello?user=John+Appleseed')">Hello World</Button>
      <Button class="btn" @tap="actionDialog">action Dialog</Button>
      <Button class="btn" @tap="alert">alert</Button>
      <Button class="btn" @tap="confirm">confirm</Button>
    </StackLayout>

  </Page>
</template>

<script>
export default {
  methods: {
    actionDialog() {
      this.$dialog.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
        .then(result => {
          console.log(result);
        })
    },
    alert() {
      alert('hello')
        .then(result => {
          console.log(result);
        })
    },
    alert() {
      alert('hello')
        .then(result => {
          console.log(result);
        })
    },
    confirm() {
      confirm('are u ok?')
        .then(result => {
          console.log(result);
        })
    }
  },
}
</script>
