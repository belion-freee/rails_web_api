import { Api } from "./api";

const contentsElem = document.getElementById('contents');

if(!!contentsElem) {
  const api = new Api();
  const insertElm = (content_id: number, content_body: string) => {
    return `<div id="content${content_id}">id : ${content_id} body: ${content_body} <button type="button" class="remove-content" value="${content_id}">Delete</button></div>`;
  }

  // index
  api.index((body: any[]) => {
    if(body.length > 0) {
      body.forEach(content => {
        contentsElem.insertAdjacentHTML('beforeend', insertElm(content.id, content.body));
      });
    } else {
      contentsElem.insertAdjacentHTML('beforeend', "<h4>No Contents</h4>");
    }
  });

  // post event handler
  document.addEventListener("click", (e) => {
    const target: HTMLInputElement = <HTMLInputElement> e.target;

    if(target.className == "add-content") {
      e.preventDefault();

      // post
      const textElem: HTMLInputElement = <HTMLInputElement> document.getElementById("content-body");
      if(!!textElem) {
        api.post(textElem.value, (body: any) => {
          if(!!body) {
            contentsElem.insertAdjacentHTML('beforeend', insertElm(body.id, body.body));
          }
        });
      }
    } else if(target.className == "remove-content") {
      e.preventDefault();

      // delete
      if(!!target) {
        api.delete(target.value, (body: any) => {
          if(!!body) {
            const elm = document.getElementById("content" + body);
            if(!!elm) {
              elm.remove();
            }
          }
        });
      }
    }
  });
}
