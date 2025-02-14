

function setModalHandlers() {
    const Modal = document.querySelector(".img-modal")
    const ImgModalText = document.querySelector(".img-modal-text")
    const ImgModalImg = document.querySelector(".img-modal-img")
    const scrollElement = document.querySelector(".scroller")
    let imgDomInFocus = null;

    scrollElement.style.display = "none";

    Modal.addEventListener('click', (event) => {
        if (imgDomInFocus && !imgDomInFocus.contains(event.target)) {
            imgDomInFocus = null;
            Modal.style.display = "none";
        }
    })

    document.querySelectorAll(".img-content").forEach(img=>{
        img.addEventListener("click", (event)=>{
            event.preventDefault(); // Prevent any default behavior
            event.stopPropagation(); // Stop click event from bubbling up
            ImgModalText.innerHTML = "<span class=\"alt-info\">" + img.alt + "</span>"
            const im = document.createElement("img")
            im.src = img.src
            im.classList.add("img-modal-img-content")
            ImgModalImg.innerHTML = ""
            ImgModalImg.appendChild(im);
            Modal.style.display = "block";
            imgDomInFocus = im;
        })
    })
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          scrollElement.style.display = 'block';
        } else {
            scrollElement.style.display = "none";
        }
    });
}


setModalHandlers()
// window.addEventListener("load", setModalHandlers);