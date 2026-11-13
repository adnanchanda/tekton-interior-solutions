// Tells Bing (and other IndexNow engines) which URLs changed.
// Run after a deploy:  node scripts/indexnow.mjs
const host = "www.tektoninteriorsolutions.in";
const key = "4992bdafc5fbeb404fe9df1c21ea3cc6";
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`Submitted ${urlList.length} URLs: HTTP ${res.status}`);
