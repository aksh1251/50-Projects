const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();const m=document.getElementById("progress"),i=document.getElementById("prev"),c=document.getElementById("next"),o=document.querySelectorAll(".square");let r=1;c.addEventListener("click",()=>{r++,r>o.length&&(r=o.length),a()});i.addEventListener("click",()=>{r--,r<1&&(r=1),a()});function a(){o.forEach((n,s)=>{s<r?n.classList.add("active"):n.classList.remove("active")});const d=document.querySelectorAll(".active");m.style.width=(d.length-1)/(o.length-1)*100+"%",r===1?i.disabled=!0:r===o.length?c.disabled=!0:(i.disabled=!1,c.disabled=!1)}