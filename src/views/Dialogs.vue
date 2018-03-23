<template>
    <Page>
        <StackLayout class="btns">
            <Button class="btn" @tap="actionDialog">action Dialog</Button>
            <Button class="btn" @tap="alert">alert</Button>
            <Button class="btn" @tap="confirm">confirm</Button>
            <Button class="btn" @tap="prompt">prompt</Button>
            <Button class="btn" @tap="login">login</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    methods: {
        actionDialog() {
            this.$dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
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
        prompt() {
            prompt('How are you?', 'Amazing!')
                .then(result => {
                    console.log(`Dialog result: ${result.result}, text: ${result.text}`)
                })
        },
        confirm() {
            confirm('are u ok?')
                .then(result => {
                    console.log(result);
                })
        },
        login() {
            this.$dialogs.login('Please log in', 'Username', 'Password')
                .then(result => {
                    console.log(result)
                })
        }
    },
}
</script>
