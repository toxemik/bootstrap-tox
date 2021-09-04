const data = {
    jumbotron: {
        style: `
            color: #F4F4F4;
            background-color: #333333;
        `
    }
}

const template = `
    <div class="jumbotron" style="${ data.jumbotron.style }">
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
`

export default template
