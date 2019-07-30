<template>
    <div id="app">
      <home-page></home-page>
    </div>
</template>

<script>
    import HomePage from "./components/home-page";
    export default {
        name: 'app',
        components: {
          HomePage
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    div {
        margin: 0;
        padding: 0;
    }


    #app {
        font-family: PingFang-SC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        width: 100%;
        height: 100%;
    }
</style>
