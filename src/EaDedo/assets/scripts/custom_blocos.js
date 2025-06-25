document.head.insertAdjacentHTML(
  "afterend",
  `
    <style>
        .contentwithoutlink {
            padding-right: 0px !important;
        }

        #section-1 .pgr-img {
            display: none !important;
        }

        #section-1 .pgr-content {
            display: none !important;
        }

        #section-1 .card-block {
            border: none !important;
        }

        .label h1, .label h2, .label h3, .label h4 {
            border: none !important;
        }

        #module-1169997 .mod-indent-outer {
            display: contents;
        }

        [id^="tile-"] {
            display: none !important;
        }

        [id^="tileicon_"] {
            display: none !important;
        }

        [id^="section-"] .pagesechead {
            display: none !important;
        }

        #page-course-view-tiles .navigation-arrows {
            display: none !important;
        }
        
    </style>
    `
);