console.log("test");

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('[data-tag]').forEach((element) => {
        element.addEventListener('click', (e) => {
          const currentTag = e.target.dataset.tag;
          filterByTagName(currentTag);
        });
      });
  });

  

  function filterByTagName(tagName) {
    const elements = document.querySelectorAll('.warp-post');
    elements.forEach((elem) => {
      elem.classList.remove('hidden');

      if (!elem.hasAttribute(`data-${tagName.toLowerCase()}`)) {
        elem.classList.add('hidden');
      }
    });
  
    document.querySelectorAll('.tag-item').forEach((tag) => {
      tag.classList.remove('selected');
    });
  
    var selectedTag = document.querySelectorAll(`.tag-item[data-tag="${tagName}"]`);
    selectedTag.forEach((stag)=>{
        if (stag) {
            stag.classList.add('selected');
          }
    })
    
  }
  