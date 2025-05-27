```js

import anime from 'animejs/lib/anime.es.js';

function createSvg(width: string = "1000", height: string = "1000") {
    let div = document.querySelector('#app')
    // make a simple rectangle
    var svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgDom.setAttribute('width', width);
    svgDom.setAttribute('height', height);
    div?.appendChild(svgDom);
    return new svg(svgDom)
}

class svg{
    body: SVGSVGElement
    constructor(svgDom: SVGSVGElement) {
        this.body = svgDom
        let defs = document.createElementNS('http://www.w3.org/2000/svg', "defs");
        svgDom.appendChild(defs)
    }

    draw(name: string, options: any, svg: svg = this) {

        let graph: any;
        switch (name) {
            case "circle":
                graph = new circle(options, svg)
                break;
        }
        this.body.appendChild(graph?.body)
        return graph
    }
}


class circle{
    body: SVGCircleElement
    svg: svg
    constructor(options: any, svg: svg) {
        this.svg = svg
        this.body = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        for (var key in options) {
            this.body.setAttribute(key,options[key])
        }
    }

    moveTo(point: string[]) {
        anime({
            targets: this.body,
            cx: point[0],
            cy: point[1]
        })
    }

    pathTo(to: string[], fill: string, stroke: string) {
        let path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        
        let cx = this.body.getAttribute("cx")
        let cy = this.body.getAttribute("cy")
        
        path.setAttribute("fill", fill)
        path.setAttribute("stroke", stroke)
        path.setAttribute("d", `M ${cx},${cy}`)
        this.svg.body.appendChild(path)
        
        anime({
            targets: path,
            d: `M ${cx},${cy} L ${to[0]},${to[1]}`
        })
    }


    fillImg(imgSrc: string) {
        
        let pattern = document.createElementNS('http://www.w3.org/2000/svg', "pattern");
        pattern.setAttribute("id","avatar")
        pattern.setAttribute("width", "1")
        pattern.setAttribute("height", "1")
        pattern.setAttribute("patternContentUnits", "objectBoundingBox")
        let image = document.createElementNS('http://www.w3.org/2000/svg', "image");
        image.setAttribute("width", "1")
        image.setAttribute("height", "1")
        image.setAttribute("href",imgSrc)

        pattern.appendChild(image)
        
        let defs = this.svg.body.querySelector("defs")
        defs?.appendChild(pattern)
        this.svg.body.appendChild(defs)
        this.body.setAttribute("fill","url(#avatar)")

    }
}
export {createSvg, circle}
```