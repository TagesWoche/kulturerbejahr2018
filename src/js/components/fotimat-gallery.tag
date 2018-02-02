<fotimat-gallery>

    <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- The Close Button -->
        <span class="close" onclick="{ closemodal }">&times;</span>
        <a class="download" download="{ opts.clickedimage.image }" href="{ opts.clickedimage.image }" title="{ opts.clickedimage.title }">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 433.5 433.5" style="enable-background:new 0 0 433.5 433.5;" xml:space="preserve"><g><g id="file-download"><path d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"/></g></g></svg></a>

        <a href="" target="_blank"><i class="fa fa-twitter social-modal"></i></a>

        <a href="" target="_blank"><i class="fa fa-facebook social-modal" style="left: 110px;"></i></a>

        <!-- Modal Content (The Image) -->
       <img riot-src={ opts.clickedimage.image } class="modal-content" id="{ opts.clickedimage.image }">

        <i style="font-size: 75px;" class="fa fa-chevron-left" aria-hidden="true" onclick="{ previouspicture }" show={ opts.previouspictureavailable }></i>

        <i style="font-size: 75px;" class="fa fa-chevron-right" aria-hidden="true" onclick="{ nextpicture }" show={ opts.nextpictureavailable }></i>

    </div>

    <script type="text/babel">

        this.on('update', function(){
        console.log(opts)

    })

        this.closemodal = function (e) {
            opts.oncloseclick()
        }

        this.nextpicture = function (e) {
            opts.onnextclick(opts.index)
            console.log(opts)
        }

        this.previouspicture = function (e) {
            opts.onpreviousclick(opts.index)
            console.log(opts)
        }

        document.onkeydown = function(evt) {
            evt = evt || window.event
            var isEscape = false
            var isLeft = false
            var isRight = false
            if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc")
            isLeft = (evt.key == "ArrowLeft")
            isRight = (evt.key == "ArrowRight")
            } else {
            isEscape = (evt.keyCode == 27)
            isLeft = (evt.keyCode == 37)
            isRight = (evt.keyCode == 39)
            }
            if (isEscape) {
            opts.oncloseclick()
            }
            if (isLeft) {
            opts.onpreviousclick(opts.index)
            }
            if (isRight) {
            opts.onnextclick(opts.index)
            }


        };

    </script>

</fotimat-gallery>

