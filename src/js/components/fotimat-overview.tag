<fotimat-overview>

    <div class="image-wrapper">
        <a each="{ entry in opts.alldata }" href="#" class="image-item { is-topic: entry.topic }" onclick="{ openmodal }">
            <h3>{ entry.title }</h3>
            <figure>
                <img class="image-overview" src="{ entry.image }" alt="">
                <figcaption>{ entry.credit }</figcaption>
            </figure>
        </a>

    </div>

    <div if="{ opts.alldata.length > opts.data.length }" class="button-wrapper">
        <a class="button" href="#" onclick="{ showmore }">
            Mehr Bilder laden
        </a>
    </div>

    <script type="text/babel">

        this.showmore = function (e) {
            opts.onmoreclick(e)
        }


        this.openmodal = function (e) {
            opts.onpictureclick(e.item.entry)
        }

    </script>


</fotimat-overview>