$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#article-scroll-up").click(function () {
        goUp()
    });

    $('#article-link').click(function () {
        // console.log('vt');
        cp_link($('#article-link'))
    });

    modalImgShow()


});

// scroll up button in article
function goUp() {
    const upElement = document.querySelector('head');
    const topPos = upElement.getBoundingClientRect().top;

    window.scroll({
        top: topPos,
        behavior: 'smooth'
    });
}

function cp_link(lnk) {
    const copyToClipboard = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =
            document.getSelection().rangeCount > 0        // Check if there is any content selected previously
                ? document.getSelection().getRangeAt(0)     // Store selection if found
                : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
            document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
            document.getSelection().addRange(selected);   // Restore the original selection
        }
    };
    copyToClipboard(window.location.href);
    $(lnk).attr('data-original-title', 'Copied.').tooltip('show');

    setTimeout(function () {
        $(lnk).attr('data-original-title', 'Copy article url to clipboard.').tooltip('hide')
    }, 1000)
}

function modalImgShow() {
    let articleImages;
    try {
        articleImages = document.getElementsByClassName("blog-article")[0].getElementsByTagName("img");
    }
    catch (error) {
        // no images found
        return
    }


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

// <!-- The Modal -->
// <div id="myModal" class="modal">
//   <span class="close">&times;</span>
//   <img class="modal-content" id="img01">
//   <div id="caption"></div>
// </div>


// function setTooltip(btn, message) {
//   btn.tooltip('hide')
//     .attr('data-original-title', message)
//     .tooltip('show');
// }
//
// function hideTooltip(btn) {
//   setTimeout(function() {
//     btn.tooltip('hide');
//   }, 1000);
// }

// Clipboard

// var clipboard = new Clipboard('.test');
//
// clipboard.on('success', function(e) {
// 	var btn = $(e.trigger);
//   setTooltip(btn, 'Copied');
//   hideTooltip(btn);
// });
//
// $('.test').click({
//     setTooltip(this.trigger, 'woo');
//     hideTooltip(this.trigger)
// });