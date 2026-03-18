import{a as p,S as f,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="55083969-985dcd53ed8fb60fc84f8ef8d";async function y(r){return(await p.get(d,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(){c.innerHTML=""}function b(r){return r.map(({webformatURL:o,largeImageURL:i,tags:n,likes:e,views:t,comments:s,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${n}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${s}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("")}function L(r){const o=b(r);c.insertAdjacentHTML("beforeend",o),g.refresh()}const w=document.querySelector(".form"),l=document.querySelector(".loader");function S(){l.style.display="block"}function q(){l.style.display="none"}w.addEventListener("submit",async r=>{r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();if(i===""){a.warning({message:"Введіть текст для пошуку!",position:"topRight"});return}h(),S();try{const n=await y(i);if(n.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(n)}catch(n){a.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error(n)}finally{q()}});
//# sourceMappingURL=index.js.map
