<script lang="ts">
  import Song from "./components/Song.svelte";
  import type { Tracks } from "./models/Tracks";
  const f = fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer ",
        "Content-Type": "application/json",
      },
    }
  )
    .then((x) => x.json() as unknown as Tracks)
    .then((x) => x.items);
</script>

<main>
  <h1 class="page__title">Top Tracks All Time</h1>
  {#await f then data}
    {#each data as item, i}
      <Song {item} />
    {/each}
  {/await}
</main>

<style type="scss">
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

    --color-text: #222022;
    --color-highlight-primary: #ffef7e;
    --color-highlight-secondary: #b7f9e9;
    --border-radius-primary: 32px;
  }

  main {
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
