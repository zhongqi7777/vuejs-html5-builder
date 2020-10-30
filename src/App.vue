<template>
  <div class="html5builder">
    <div id="gjs" style="height:0px; overflow:hidden;"></div>
  </div>
</template>

<script>
import html5builder from "./components/html5builder/src/index";

export default {
  name: "App",
  components: {},
  mounted() {
    var editor = html5builder.init({
      // showOffsets: 1,
      // noticeOnUnload: 0,
      container: "#gjs",
      height: "100%",
      // fromElement: true,
      // storageManager: { autoload: 0 },
    });

    editor.BlockManager.add("testBlock", {
      label: "块级元素",
      attributes: { class: "gjs-fonts gjs-f-b1" },
      content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center;background-color:red;margin:45px">这是一个块级元素</div>`,
    });
  },
};
</script>

<style lang="scss">
@import "./components/html5builder/src/styles/scss/main.scss";
.html5builder {
  height: 100%;
  margin: 0;
}
</style>
