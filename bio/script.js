  async function fetchNowPlaying() {
    const res = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=eloiluizh&api_key=d1a94f6f3e23e3daeace5bcb40bb5e47&format=json&limit=1");
    const data = await res.json();
    const track = data.recenttracks.track[0];
    const isPlaying = track["@attr"]?.nowplaying === "true";

    const name = track.name;
    const artist = track.artist["#text"];
    const album = track.album["#text"];
    const img = track.image?.[1]["#text"]; // médio

    document.getElementById("now-playing").innerHTML = `
      ${isPlaying ? "Tocando agora" : "Última ouvida"}:<br>
      <strong>${name}</strong> — ${artist}<br>
      <img src="${img}" alt="Capa do álbum" width="50">
    `;
  }

  fetchNowPlaying();
  setInterval(fetchNowPlaying, 15000); // atualiza a cada 15s