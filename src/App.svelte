<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Playlist from "./components/Playlist.svelte";
  import Song from "./components/Song.svelte";
  import {
    buildSpotifyRedirectUrl,
    changeTheme,
    getHashParams,
  } from "./lib/common";
  import { stateKey, TimeLimit } from "./lib/costants";
  import { createPlaylist, getTopTracks, getUserInfo } from "./lib/httputils";
  import type { IUser, SongInfo } from "./models/Tracks";

  let params = getHashParams();
  let access_token = params.access_token;
  let state = params.state;
  let storedState = localStorage.getItem(stateKey);
  let user: IUser = null;
  let timeLimit = 20;
  let offset = 0;
  let type = "tracks";
  let timeRange = "long_term";
  let tracks = Promise.resolve([] as SongInfo[]);

  if (access_token && (typeof state == "undefined" || state !== storedState)) {
    alert("There was an error during the authentication");
    location.href = location.pathname;
    access_token = null;
  } else {
    if (typeof access_token != "undefined") {
      getUserInfo(access_token).then((response) => (user = response));
    }
  }

  if (access_token != null) {
    tracks = getTopTracks(
      access_token,
      type,
      timeRange,
      offset,
      timeLimit
    ).catch(() => [] as SongInfo[]);
  }
  $: tracks = getTopTracks(
    access_token,
    type,
    timeRange,
    offset,
    timeLimit
  ).catch(() => [] as SongInfo[]);

  function changeTimeLimit(type: string): any {
    timeRange = type;
  }

  function btnLoginHandler() {
    (window as any).location = buildSpotifyRedirectUrl();
  }

  async function onCreatePlaylist(playlistName: string): Promise<void> {
    const serializedPlayListName = encodeURI(playlistName);
    await createPlaylist(
      serializedPlayListName,
      user.id,
      await tracks,
      access_token
    );
  }
</script>

<main class="bg-white dark:bg-gray-900 overflow-hidden">
  {#if user}
    <h1
      class="text-center text-5xl text-gray-700 dark:text-stone-200 font-bold text-center my-2"
    >
      Hello <span on:click={changeTheme}>🖐</span> ️{user.display_name}
    </h1>
    <h2 class="text-xl text-gray-500 text-center dark:text-gray-400">
      here your top spotify songs
    </h2>
  {:else}
    <h1
      class="text-center text-5xl text-gray-700 dark:text-stone-200 font-bold text-center my-2"
    >
      Hey🤙
    </h1>
    <h2 class="text-xl text-gray-500 text-center dark:text-gray-400">
      check out your spotify top songs, please login before continue
    </h2>
  {/if}
  {#if access_token == null}
    <button
      class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"
      on:click={btnLoginHandler}>Log in with Spotify</button
    >
  {:else}
    <Navbar {changeTimeLimit} {onCreatePlaylist} />
    {#await tracks}
      <div class="loadingio-spinner-rolling-xjk8h47j69">
        <div class="ldio-z6h7l1lpshs"><div /></div>
      </div>
    {:then data}
      {#if data.length > 0}
        {#each data as item}
          <Song
            cover={item.album.images[0].url}
            name={item.name}
            artists={item.artists}
            url={item.external_urls.spotify}
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

<style></style>
