import type { Song, Tracks } from "src/models/Tracks";

export async function getTopTracks(): Promise<Song[]> {
  return await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer",
        "Content-Type": "application/json",
      },
    }
  )
    .then((x) => x.json() as unknown as Tracks)
    .then((x) => x.items);
}
