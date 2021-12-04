<script lang="ts">
  import { get } from "svelte/store";

  import Song from "./components/Song.svelte";
  import {
    buildSpotifyRedirectUrl,
    changeTheme,
    getHashParams,
  } from "./lib/common";
  import { stateKey, TimeLimit } from "./lib/costants";
  import { getTopTracks, getUserInfo } from "./lib/httputils";

  function btnLoginHandler() {
    (window as any).location = buildSpotifyRedirectUrl();
  }

  let params = getHashParams();
  let access_token = params.access_token;
  let state = params.state;
  let storedState = localStorage.getItem(stateKey);
  let user = null;

  if (access_token && (state == null || state !== storedState)) {
    alert("There was an error during the authentication");
  } else {
    localStorage.removeItem(stateKey);
    if (typeof access_token != "undefined") {
      getUserInfo(access_token).then((response) => (user = response));
    }
  }

  let timeLimit = 20;
  let offset = 0;
  let type = "tracks";
  let timeRange = "long_term";
  let tracks = getTopTracks(access_token, type, timeRange, offset, timeLimit);
  $: tracks = getTopTracks(access_token, type, timeRange, offset, timeLimit);

  function changeTimeLimit(type: string): any {
    timeRange = type;
  }
</script>

<main>
  {#if user}
    <h1 class="page__title">
      Hello🖐️ {user.display_name}, here your top spotify songs
    </h1>
    <img
      on:click={changeTheme}
      alt="theme-choose"
      src="https://img.icons8.com/fluency/48/000000/color-palette.png"
    />
  {:else}
    <h1 class="page__title">
      Hey🤙, check out your spotify top songs, please login before continue
    </h1>
  {/if}
  {#if typeof access_token == "undefined"}
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
    {#await tracks then data}
      {#each data as item, index}
        <Song
          cover={item.album.images[0].url}
          name={item.name}
          artists={item.artists}
          url={item.external_urls.spotify}
          {index}
        />
      {/each}
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
  }
</style>
