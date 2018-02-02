<fotimat-app>

    <fotimat-overview data="{ subset }" alldata="{ opts.contentData }" onmoreclick="{ this.showMore }" onpictureclick="{ this.openModal }"></fotimat-overview>

    <fotimat-gallery show="{ showModal }" clickedimage="{ pictureSrc }" index="{ indexImage }" oncloseclick="{ this.closeModal }" onnextclick="{this.nextPicture}" nextpictureavailable="{ showNext }" onpreviousclick="{this.previousPicture}" previouspictureavailable="{ showPrevious }"></fotimat-gallery>


    <script type="text/babel">

        console.log(opts.contentData)

        this.arrayEnd = 9
        this.nextEnd = this.arrayEnd + 9

        this.subset = opts.contentData.slice(0, this.arrayEnd)

        console.log("subset: ", this.subset)

        const preloadData = (start, end) => {
            let nextSubset = opts.contentData.slice(start, end)
            for (var i = 0; i < nextSubset.length; ++i) {
                var img = new Image();
                img.src = nextSubset[i];
            }
        }

        this.preloadSubset = preloadData(this.arrayEnd, this.nextEnd)

        this.showMore = () => {
            this.update({
                arrayEnd: this.arrayEnd + 9,
                nextEnd: this.nextEnd + 9,
                subset: opts.contentData.slice(0, this.arrayEnd + 9),
                preloadSubset: preloadData(this.arrayEnd + 9, this.nextEnd + 9)
            })
        }

        this.pictureSrc = ''
        this.indexImage = ''
        this.showModal = false
        this.showNext = false
        this.showPrevious = false

        this.nextPicture = (pictureIndex) => {
        let nextIndex = ((opts.contentData.length - 1) == pictureIndex) ? opts.contentData.length - 1 : pictureIndex + 1
            this.update({
                pictureSrc: opts.contentData[nextIndex],
                indexImage: nextIndex,
                showNext: (opts.contentData.length - 2 == this.indexImage || opts.contentData.length - 1 == this.indexImage) ? false : true,
                showPrevious: (this.indexImage < 0) ? false : true
            })
        }

        this.previousPicture = (pictureIndex) => {
        let previousIndex = (pictureIndex > 0) ? pictureIndex - 1 : 0
            this.update({
                pictureSrc: opts.contentData[previousIndex],
                indexImage: previousIndex,
                showNext: ((opts.contentData.length) == pictureIndex) ? false : true,
                showPrevious: (this.indexImage == 1 || this.indexImage == 0) ? false : true
            })
        }

        this.openModal = (url) => {
            this.update({
                indexImage: opts.contentData.indexOf(url),
                pictureSrc: url,
                showModal: true,
                showNext: (opts.contentData.length - 1 == opts.contentData.indexOf(url)) ? false : true,
                showPrevious: (opts.contentData.indexOf(url) == 0) ? false : true
            })
            console.log("Array", opts.contentData.length)
            console.log("Picture Index", this.indexImage)
        }

        this.closeModal = () => {
            this.update({
                showModal: false
            })
        }


    </script>

</fotimat-app>