<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import { isMobile } from "./resources/store/isMobile.js";

  console.log($isMobile)

</script>

<main>
  <Header />
    <div class="grid place-items-center bg-red-200 h-[80dvh] w-full">
      <div>Is your device a mobile phone? <span>{$isMobile}</span></div>
    </div>
  <Footer />
</main>

<style>

</style>
