export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.pathname = url.pathname.replace(/^\/mahjong-play/, '') || '/';
    return env.ASSETS.fetch(url);
  },
};
