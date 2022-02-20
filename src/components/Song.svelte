<script lang="ts">
  import type { Artist } from "src/models/Tracks";

  export let cover: string | any;
  export let name: string | any;
  export let artists: Artist[] | any;
  export let url: string | any;
</script>

<div
  class="w-screen bg-white dark:bg-gray-900 flex flex-row flex-wrap p-3 overflow-hidden"
>
  <div class="mx-auto md:w-2/3">
    <div
      class="rounded-lg shadow-lg bg-neutral-600 dark:bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"
      style="background-image: url('{cover}');background-repeat: no-repat;background-size: cover;background-blend-mode: multiply;"
    >
      <div class="md:w-1/3 w-full">
        <img
          class="rounded-lg shadow-lg antialiased"
          src={cover}
          alt="track cover"
        />
      </div>
      <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div
          class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"
        >
          <div class="text-2xl text-white leading-tight">{name}</div>
          {#if artists}
            <div
              class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"
            >
              {#each artists as artist}
                <span class="border-b border-dashed border-gray-500 pb-1"
                  >{artist.name}</span
                >
              {/each}
            </div>
          {/if}
          {#if url}
            <div
              class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"
            >
              <a href={url} target="_black">Open</a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style></style>
