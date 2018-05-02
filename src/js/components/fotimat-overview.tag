<fotimat-overview>

    <div class="image-wrapper">
        <a each="{ entry in opts.alldata }" href="#" class="image-item { is-topic: entry.topic }" onclick="{ openmodal }">
            <h3>{ entry.title }</h3>
            <div show={ entry.disclaimer }>{ entry.disclaimer }</div>
            <figure hide={ entry.topic }>
                <img class="image-overview" src="{ entry.image }" alt="">
                <figcaption><strong>{ entry.credit }</strong> { entry.legend }</figcaption>
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
            if(!e.item.entry.topic) opts.onpictureclick(e.item.entry)
        }

    </script>


</fotimat-overview>