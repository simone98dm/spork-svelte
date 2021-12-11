<script lang="ts">
  import type { Artist } from "src/models/Tracks";

  export let index: number | any;
  export let cover: string | any;
  export let name: string | any;
  export let artists: Artist[] | any;
  export let url: string | any;
</script>

<div class="card">
  <img src={cover} class="card__image" alt="brown couch" />
  <div class="card__content">
    {#if index}
      <p class="card__text">#{index + 1}</p>
    {/if}
    <span class="card__title">{name}</span>
    {#if artists}
      <div class="card__text">
        {#each artists as artist}
          <span>{artist.name}</span>
        {/each}
      </div>
    {/if}
    {#if url}
      <div class="card__text">
        <a
          class="spoty-btn spoty-btn-sm spoty-btn-primary"
          href={url}
          target="_black">Open</a
        >
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @mixin mediaBig {
    @media (min-width: 576px) {
      @content;
    }
  }

  @include mediaBig {
    :root {
      --font-size-title: 40px;
    }
  }

  .card {
    // max-width: 960px;
    border-radius: var(--border-radius-primary);
    box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 28px 20px;
    box-sizing: border-box;
    margin: 20px;
    display: flex;
    flex-direction: column;
    background-color: var(--card-background-color);

    @include mediaBig {
      flex-direction: row;
      align-items: center;
      margin: 40px;
      padding: 32px;
    }
  }

  .card__image {
    width: 100%;
    max-height: 300px;
    border-radius: var(--border-radius-primary);
    object-fit: cover;
    margin-bottom: 18px;

    @include mediaBig {
      width: 45%;
      max-height: none;
      min-height: 400px;
      margin-bottom: 0;
    }
  }

  .card__content {
    @include mediaBig {
      width: 55%;
      padding-left: 40px;
    }
  }

  .card__text {
    display: block;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    text-transform: uppercase;
    color: var(--color-text);
    margin-bottom: 6px;
    margin-top: 20px;

    @include mediaBig {
      margin-bottom: 8px;
    }
  }

  .card__title {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-title);
    line-height: var(--line-height-title);
    color: var(--color-text);
    box-decoration-break: clone;
    background-image: linear-gradient(
      90deg,
      var(--color-highlight-primary),
      var(--color-highlight-secondary)
    );
    background-size: 100% 42%;
    background-repeat: no-repeat;
    background-position: 0 85%;
    padding: 0 4px;
    margin-left: -4px;
  }

  .spoty-btn {
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
</style>
