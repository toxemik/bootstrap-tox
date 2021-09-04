const data = {
    pageHeader: {
        style: `
            padding-top: 3em;
            padding-bottom: 3em;
        `
    }
}

const template = `
    <div class="page-header" style="${ data.pageHeader.style }">
        <h1>Example page header <small>Subtext for header</small></h1>
    </div>
`

export default template