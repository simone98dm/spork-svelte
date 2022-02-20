<script lang="ts">
  export let onCreatePlaylist;
  let playlistName = "";
  function onSubmitHandler(e: any) {
    e.preventDefault();
    onCreatePlaylist(playlistName);
  }
</script>

<section>
  <form on:submit={(e) => onSubmitHandler(e)}>
    <div
      class="flex items-center justify-center from-cyan-100 via-pink-200 to-yellow-200 "
    >
      <div class="flex items-center max-w-md mx-auto bg-white rounded-lg ">
        <div class="w-full">
          <input
            bind:value={playlistName}
            type="Playlist name"
            class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
            placeholder="Playlist name"
            x-model="Playlist name"
          />
        </div>
        <div>
          <button
            type="submit"
            class="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
          >
            <svg
              class="w-5 h-5"
              version="1.1"
              fill="#fff"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 490 490"
              style="enable-background:new 0 0 490 490;"
              xml:space="preserve"
            >
              <polygon
                points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 
	222.031,222.031 0,222.031 0,267.969 222.031,267.969 "
              />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </form>
</section>

<style>
</style>
