(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const i=(r,c)=>{if(!(r.branch&&r.resource)){console.error("ERROR: default branch and/or resource unset");return}const t=decodeURI(c);let e="";if((e=new RegExp(/^(?:https:\/\/)?github\.com\/(?<owner>[a-zA-Z0-9_-]*)\/(?<repo>[a-zA-Z0-9_-]*)(?:\/(?:((?<blob>blob)|(?<tree>tree))\/)?(?:(?<dir_or_branch>[^/]*)\/)?(?<resource>.*))?/).exec(t))!==null){let o=`${r.branch}/${r.resource}`;return e.groups.tree&&e.groups.dir_or_branch?o=`${e.groups.dir_or_branch}/${e.groups.resource}/${r.resource}`:e.groups.blob&&e.groups.dir_or_branch?o=`${e.groups.dir_or_branch}/${e.groups.resource?e.groups.resource:r.resource}`:e.groups.dir_or_branch?o=`${r.branch}/${e.groups.dir_or_branch}/${e.groups.resource?e.groups.resource:r.resource}`:o=`${r.branch}/${e.groups.resource?e.groups.resource:r.resource}`,`https://raw.githubusercontent.com/${e.groups.owner}/${e.groups.repo}/${o}`}return t},u=r=>{if(!(r.branch&&r.resource&&r.markdownElementId)){console.error("ERROR: default branch, resource  and/or markdownElementId are not set");return}const c=new URLSearchParams(new URL(document.URL).search).get("slides");let t=c||`github.com/jceb/slidesdown/blob/${r.branch}/${r.resource}`;if(t=i(r,t),!t){console.error("ERROR: couldn't compute slides URL");return}const e=document.getElementById(r.markdownElementId);if(!e){console.error(`ERROR: couldn't find markdown element with id: ${r.markdownElementId}`);return}e.setAttribute("data-markdown",t),Reveal.initialize({hash:!0,plugins:[RevealHighlight,RevealMarkdown,RevealMath,RevealNotes,RevealSearch,RevealZoom]})};u({branch:"main",resource:"SLIDES.md",markdownElementId:"markdown"});