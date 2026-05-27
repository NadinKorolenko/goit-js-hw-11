import{a as u,S as d,i}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="56048783-6f228d4081fb198149de51908";async function m(s){return(await u.get(f,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
      <li class="gallery-item">
       <a href="${t.largeImageURL}">
        <img
         src="${t.webformatURL}"
         alt="${t.tags}"
        />
     </a>

        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}g(),b(),m(o).then(t=>{const n=t.data.hits;if(n.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n)}).catch(t=>{console.log(t)}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
