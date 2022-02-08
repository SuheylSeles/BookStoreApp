<template>
  <div class="home">
    <br />
    <HelloWorld msg="Welcome to Our Book App" />
    <br />
    <!--<img src="../assets/book-image.jpeg" width="500" height="500" alt="Book-Photo"/>-->
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="card text-white bg-success mb-3" style="max-width: 300rem">
      <div class="card-header">&#128204; Sentence Of The Day</div>
      <div class="card-body">
        <!--<p class="card-text">A better world is possible.</p>-->
         {{cumle.Sentence}}
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Sentences from "../views/Sentences.json";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      myJson: Sentences,
      cumle: null
    };
  },
  mounted(){
    this.cumle= this.myJson.Sentences[Math.floor(Math.random()*this.myJson.Sentences.length)];
  }
};
</script>
