<template>
  <div class="container">
    <div class="content">
      <input ref="input" type="file" class="hidden" v-on:change="handleInputChange"/>
      <Area
          v-on:handel-button-click="handleButtonClick"
          v-on:handle-area-drop="handleAreaDrop"
          v-on:handle-area-paste="handelAreaPaste"
      />
      <textarea name="name" rows="15" cols="80" v-model="value"></textarea>
    </div>
  </div>
  <br/>
  <img id="baseImg" :src=" 'data:image/png;base64,' + imgurl ">
</template>

<script>
import util from './util'
import Area from "./components/Area";
import axios from "axios"

export default {
  name: 'App',
  data: function () {
    return {
      input: null,
      value: '',
      imgurl:''
    }
  },
/*  created() {
    axios
        .get("http://localhost:8080/maven_test_war/img/localBase")
        .then(res => {
          console.log(res.data)
          this.imgurl = res.data
        })
  }
  ,*/
  methods: {
    handleButtonClick: function () {
      this.$refs.input.click();
    },
    handleInputChange: async function (e) {
      this.imgName = (e.target.files[0].name)
      this.value = await util.getBase64(e.target.files[0])
      // let formData = new FormData()
      // let file = e.target.files[0];
      // formData.append('file',file);
      // var params = new URLSearchParams()
      // params.append("userName",'test')
      // var f = new FormData()
      // f.append('userName',"test")
/*      var img = {
        imgName:this.imgName,
        imgData:this.value
      }*/
      // console.log(this.value)
/*      axios
          .post("http://localhost:8080/maven_test_war/img/testUpload",{userName},{'Content-Type':'multipart/form-data'})
          .then(res => {
            console.log(res.data)
          },error => {
            console.log(error)

          })*/
      axios({
        methods: 'post',
        url:'http://localhost:8080/maven_test_war/img/testUpload',
        data:{
          userName:"test"
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
/*      axios
          .get("http://18.183.19.91:8232/wuhuqifei/img/selectAll")
          .then(res => {
            this.imgurl=res.data[2].imgData
          })*/
/*      axios
          .get("http://localhost:8080/spring_web_war/img/selectAll")
          .then(res => {
            this.imgrul = res.data[1].imgData
            console.log(this.imgrul)
          },error => {
            console.log(error)
          })*/
    },
    handleAreaDrop: async function (value) {
      this.value = value
    },
    handelAreaPaste: async function (value) {
      this.value = value
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Area
  }
}
</script>

<style>
.hidden {
  display: none;
}
#baseImg{
  position: absolute;
  top: 10px;
  width: 20%;
  height: auto;
}
.area {
  width: 100%;
  height: 300px;
  border: 1px dashed #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
}

.content {
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .2);
  padding: 20px;
  border-radius: 4px;
}

textarea {
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 20px;
}

button {
  background-color: #00d1b2;
  color: #fff;
  border-color: transparent;
  border-radius: 4px;
  padding-bottom: calc(.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(.5em - 1px);
  cursor: pointer;
  outline: none;
}
</style>
