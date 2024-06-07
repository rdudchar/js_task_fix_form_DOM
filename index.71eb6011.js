Array.from(document.querySelectorAll(".field")).forEach(function(e){var t=e.querySelector("input"),r=document.createElement("label"),l=t.id,n=t.name;r.textContent=t.name,r.setAttribute("for",l),t.setAttribute("placeholder",n),r.classList.add("field-label"),t.insertAdjacentElement("beforebegin",r)});
//# sourceMappingURL=index.71eb6011.js.map
