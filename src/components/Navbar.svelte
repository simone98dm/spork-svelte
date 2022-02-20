<script lang="ts">
  import { TimeLimit } from "../lib/costants";
  import Playlist from "./Playlist.svelte";
  export let changeTimeLimit;
  export let onCreatePlaylist;
</script>

<div class="flex flex-col md:flex-row items-center justify-center w-full m-5">
  <button
    class="font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"
    on:click={() => changeTimeLimit(TimeLimit.Years)}
    >Several years
  </button>
  <button
    class="font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"
    on:click={() => changeTimeLimit(TimeLimit.Months)}
    >Last 6 months
  </button>
  <button
    class="font-semibold leading-none text-white py-4 px-10 bg-green-600 rounded hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none m-3"
    on:click={() => changeTimeLimit(TimeLimit.Weeks)}
  >
    Last 4 weeks
  </button>
</div>
<!-- <div>
  <Playlist onCreatePlaylist={onCreatePlaylist} />
</div> -->
