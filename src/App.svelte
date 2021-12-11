<script lang="ts">
  import Song from "./components/Song.svelte";
  import {
    buildSpotifyRedirectUrl,
    changeTheme,
    getHashParams,
  } from "./lib/common";
  import { stateKey, TimeLimit } from "./lib/costants";
  import { getTopTracks, getUserInfo } from "./lib/httputils";
  import type { SSong } from "./models/Tracks";

  function btnLoginHandler() {
    (window as any).location = buildSpotifyRedirectUrl();
  }

  let params = getHashParams();
  let access_token = params.access_token;
  let state = params.state;
  let storedState = localStorage.getItem(stateKey);
  let user = null;

  if (access_token && (typeof state == "undefined" || state !== storedState)) {
    alert("There was an error during the authentication");
    access_token = null;
  } else {
    if (typeof access_token != "undefined") {
      getUserInfo(access_token).then((response) => (user = response));
    }
  }

  let timeLimit = 20;
  let offset = 0;
  let type = "tracks";
  let timeRange = "long_term";
  let tracks = Promise.resolve([] as SSong[]);

  if (access_token != null) {
    tracks = getTopTracks(
      access_token,
      type,
      timeRange,
      offset,
      timeLimit
    ).catch(() => [] as SSong[]);
  }
  $: tracks = getTopTracks(
    access_token,
    type,
    timeRange,
    offset,
    timeLimit
  ).catch(() => [] as SSong[]);

  function changeTimeLimit(type: string): any {
    timeRange = type;
  }
</script>

<main>
  {#if user}
    <h1 class="page__title">
      Hello <span on:click={changeTheme}>🖐</span> ️ {user.display_name}, here
      your top spotify songs
    </h1>
  {:else}
    <h1 class="page__title">
      Hey🤙, check out your spotify top songs, please login before continue
    </h1>
  {/if}
  {#if access_token == null}
    <button
      class="spoty-btn spoty-btn-sm spoty-btn-primary"
      on:click={btnLoginHandler}>Log in with Spotify</button
    >
  {:else}
    <div style="margin:auto">
      <button
        class="spoty-btn spoty-btn-sm spoty-btn-primary"
        on:click={() => changeTimeLimit(TimeLimit.Years)}>Several years</button
      >
      <button
        class="spoty-btn spoty-btn-sm spoty-btn-primary"
        on:click={() => changeTimeLimit(TimeLimit.Months)}>Last 6 months</button
      >
      <button
        class="spoty-btn spoty-btn-sm spoty-btn-primary"
        on:click={() => changeTimeLimit(TimeLimit.Weeks)}>Last 4 weeks</button
      >
    </div>
    {#await tracks}
      <div class="loadingio-spinner-rolling-xjk8h47j69">
        <div class="ldio-z6h7l1lpshs"><div /></div>
      </div>
    {:then data}
      {#if data.length > 0}
        {#each data as item, index}
          <Song
            cover={item.album.images[0].url}
            name={item.name}
            artists={item.artists}
            url={item.external_urls.spotify}
            {index}
          />
        {/each}
      {:else}
        <h1>No data found</h1>
      {/if}
    {:catch error}
      <p>{error}</p>
    {/await}
  {/if}
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
    --background-color: #ffffff;
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

  .spoty-btn {
    border: 0px;
    margin-bottom: 20px;
    text-decoration: none;
  }

  .spoty-btn-sm {
    font-size: 12px;
    line-height: 1;
    border-radius: 500px;
    padding: 11px 32px 9px;
  }

  .spoty-btn-primary {
    color: #fff;
    background-color: #1db954;
    min-width: 113px;
    margin-right: 25px;
    cursor: pointer;
  }

  @keyframes ldio-z6h7l1lpshs {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .ldio-z6h7l1lpshs div {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 108px;
    height: 108px;
    border: 20px solid #1db954;
    border-top-color: transparent;
    border-radius: 50%;
  }

  .ldio-z6h7l1lpshs div {
    animation: ldio-z6h7l1lpshs 1s linear infinite;
    top: 100px;
    left: 100px;
  }

  .loadingio-spinner-rolling-xjk8h47j69 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }

  .ldio-z6h7l1lpshs {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .ldio-z6h7l1lpshs div {
    box-sizing: content-box;
  }
</style>
