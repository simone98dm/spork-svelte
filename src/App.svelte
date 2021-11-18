<script lang="ts">
  import Song from "./components/Song.svelte";
  import { getTopTracks } from "./utils/utils";
  function changeTheme() {
    window.document.body.classList.toggle("dark");
  }
</script>

<main>
  <h1 class="page__title">
    Your Top Tracks
    <img
      on:click={changeTheme}
      alt="theme-choose"
      src="https://img.icons8.com/fluency/48/000000/color-palette.png"
    />
  </h1>

  {#await getTopTracks() then data}
    {#each data as item, index}
      <Song {item} {index} />
    {/each}
  {/await}
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&Roboto&display=swap");
  :root {
    --font-family-primary: "Montserrat", serif;
    --font-family-secondary: "Roboto", sans-serif;

    --font-size-title: 24px;
    --line-height-title: 1.4;
    --font-size-text: 20px;
    --line-height-text: 1;
    --font-size-caption: 14px;
    --line-height-caption: 1.2;
  }

  :global(body) {
    --color-text: #222022;
    --color-highlight-primary: #ffef7e;
    --color-highlight-secondary: #b7f9e9;
    --border-radius-primary: 32px;
    --background-color: #e2e2e2;
    --card-background-color: #dbdbdb;
  }

  :global(body.dark) {
    --color-text: #e2e2e2;
    --color-highlight-primary: #3886a5;
    --color-highlight-secondary: #9954a7;
    --border-radius-primary: 32px;
    --background-color: #2b2b2b;
    --card-background-color: #333033;
  }

  .page__title {
    text-align: center;
    font-weight: bolder;
    color: var(--color-text);
    font-family: var(--font-family-primary);
    font-size: 48px;
  }

  main {
    background-color: var(--background-color);
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
