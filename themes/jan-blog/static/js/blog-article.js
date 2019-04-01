function modalImgShow() {
    let articleImages = document.getElementsByClassName("blog-article")[0].getElementsByTagName("img");

    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // let img = document.getElementById('myImg');

    /* Walk through the entire set of items in a HTMLCollection
   by first converting it to an Array using Object.entries */
    Object.entries(articleImages).map((object) => {
        // Here, object = Array[index, object] (object is the
        // HTML element object). This means that the actual element
        // is stored in object[1], not object. Do whatever you need
        // with it here. In this case we attach a click event:

        object[1].addEventListener("click", function () {
            console.log("Hello " + this +
                " (" + this.innerHTML + ") from map method...");

            captionText.innerHTML = this.alt;
            if (this.parentElement.className === 'figure') {

                let figCaption = this.parentElement.getElementsByClassName('caption')[0];
                captionText.innerHTML = figCaption.innerHTML;
            }
            modal.style.display = "block";
            modalImg.src = this.src;

            modal.onclick = function () {
                modal.style.display = "none";
            };

        });
    });
}