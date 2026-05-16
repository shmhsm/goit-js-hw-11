/* empty css                      */import{a as m,S as p,i as l}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="55893053-f41b99238ee3ffa17075fed9a",y="https://pixabay.com/api/";function h(o){return m.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const f=document.querySelector(".gallery"),a=document.getElementById("loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <div class="info-item"><b>Likes</b><span>${t}</span></div>
          <div class="info-item"><b>Views</b><span>${s}</span></div>
          <div class="info-item"><b>Comments</b><span>${d}</span></div>
          <div class="info-item"><b>Downloads</b><span>${u}</span></div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){f.innerHTML=""}function S(){a&&a.classList.add("is-active")}function w(){a&&a.classList.remove("is-active")}const c=document.querySelector(".form");c&&c.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){l.warning({title:"Warning",message:"Search field cannot be empty. Please enter a keywords!",position:"topRight"});return}L(),S(),h(r).then(i=>{if(!i.hits||i.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(i.hits)}).catch(i=>{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{w(),c.reset()})}
//# sourceMappingURL=index.js.map
