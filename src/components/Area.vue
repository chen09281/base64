<template>
  <div class="area" v-on:drop="handleAreaDrop" v-on:dragover="handleAreaDragover" v-on:paste="handelAreaPaste">
    <div>
      <h2>Convert image to base64</h2>
      <p>1.Click the button and select one picture</p>
      <p>2.Drag one picture into the area</p>
      <p>3.Copy one picture and paste here</p>
      <button v-on:click="handleButtonClick">Upload Image</button>
    </div>
  </div>
</template>

<script>
import util from '../util'
export default {
  name: 'App',
  data:function(){
    return {
      input:null,
      value:''
    }
  },
  methods:{
    handleButtonClick:function (){
      this.$emit('handel-button-click')
    },
    handleAreaDrop: async function (e){
      e.preventDefault();
      this.$emit('handle-area-drop', await util.getBase64(e.dataTransfer.files[0]))
    },
    handleAreaDragover:function (e){
      e.preventDefault()
    },
    handelAreaPaste: async function (e){
      this.$emit('handle-area-paste',await util.getBase64(e.clipboardData.files[0]))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
