import Navbar from '../components/Navbar.mjs'
import Jumbotron from '../components/Jumbotron.mjs'
import PageHeader from '../components/PageHeader.mjs'

const data = {
    siteWrapper: {
        style: `
            background-color: #F4F4F4;
        `
    },
    page: {
        style: `
            max-width: 75vw;
            margin-left: auto;
            margin-right: auto;
        `,
        p: {
            style: `
                max-width: 30em;
                margin-left: auto;
                margin-right: auto;
                line-height: 1.6;
                padding-top: 3em;
                padding-bottom: 3em;
            `
        }
    }
}

const template = `
    <div class="siteWrapper container-fluid" style="${ data.siteWrapper.style }">
        ${ Navbar }
        ${ Jumbotron }
        <div class="page" style="${ data.page.style }">
            ${ PageHeader }
            <p class="lead" style="${ data.page.p.style }">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt eros lectus, non vestibulum lectus hendrerit id. Donec a ex eget turpis venenatis placerat. Fusce convallis blandit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam at nunc vitae pellentesque. Nam lacinia diam sodales, dictum tortor in, imperdiet lacus. Nulla hendrerit placerat ligula, eget efficitur purus dignissim eu. Nulla interdum consectetur efficitur. Donec eu augue vitae risus pellentesque tincidunt. Nullam mollis vitae lacus eget molestie. Maecenas ut lectus vel augue faucibus malesuada. Nam ultricies velit sit amet tellus pellentesque mollis id vel nisl. Maecenas consectetur lorem arcu, eget pretium arcu efficitur at. Integer ultricies at turpis a vulputate. Etiam pellentesque at enim a semper. Integer dignissim tortor eu malesuada dictum.

                Fusce convallis porttitor quam eu viverra. Vivamus diam dui, hendrerit non ultricies vel, ultrices ullamcorper tellus. Sed aliquet maximus lacus, ac finibus quam. Maecenas congue sem in eros lobortis ornare. Mauris id cursus leo. Mauris turpis elit, pellentesque quis pharetra sit amet, tristique vel urna. Praesent lobortis finibus lacus quis gravida. Mauris mauris ipsum, molestie vel vehicula id, finibus sed massa. Pellentesque vestibulum ex et porttitor vehicula. Duis vel dolor fringilla, ullamcorper ex eu, efficitur lorem. Sed auctor risus turpis, et efficitur dolor faucibus et.
            
                In cursus nisl in tellus cursus tincidunt. Phasellus ultrices nibh at ligula hendrerit gravida. Proin quis placerat justo. Praesent quis nisi dolor. Fusce lacinia velit diam, eu dapibus odio finibus ut. Fusce fermentum fringilla pellentesque. Donec convallis sollicitudin libero nec convallis. Donec nec mollis eros. Ut dapibus mi sed imperdiet feugiat. Quisque condimentum elit nec dui euismod, vel tempus sem rhoncus. Curabitur maximus id enim in volutpat.
            
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet consectetur ligula, non varius leo. Nunc dignissim, felis sed molestie consectetur, nulla mi dignissim quam, ac rhoncus turpis ligula non odio. Sed sagittis ut lectus tincidunt vehicula. Quisque sodales, quam eget cursus tristique, turpis eros viverra diam, id commodo sem libero porttitor lectus. Maecenas ac feugiat dolor. Nulla vel accumsan urna, et commodo mauris. Praesent mollis dui eu elit condimentum feugiat. Pellentesque vel nulla aliquam, imperdiet metus sed, pulvinar enim. Nulla quis elit hendrerit tortor varius dapibus. Ut id interdum mauris. Curabitur sodales sapien non pharetra malesuada. Phasellus tellus sapien, posuere non felis id, maximus facilisis diam. Vivamus eget vulputate metus. Mauris dui velit, pulvinar quis metus sit amet, aliquam imperdiet nisl. Pellentesque vel cursus purus.
            
                Etiam fringilla, turpis sed posuere scelerisque, erat velit elementum lacus, eget tincidunt erat erat vitae urna. Donec cursus, augue a faucibus luctus, ex lacus consectetur arcu, ac maximus lacus dolor sed magna. Aliquam ultricies vel nibh sit amet ullamcorper. Etiam eros odio, malesuada ut elit ac, porta fringilla est. Quisque diam quam, vestibulum nec rhoncus vitae, congue ut leo. Mauris erat ante, lacinia in purus ac, vehicula euismod ipsum. Quisque nec ex elit. Curabitur scelerisque imperdiet augue a egestas. Pellentesque pretium massa eu fringilla egestas. Morbi volutpat vitae elit a dignissim. In hac habitasse platea dictumst. Cras vehicula scelerisque tincidunt. Ut maximus ligula quis arcu tempus, quis cursus ante lacinia.
            </p>
        </div>
    </div>
`
export default template
