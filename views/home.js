function home() {
    return `
    <h3>Fiber Art and Watercolor</h3>
    <div class="img-block">
        <figure class="figure">
            <a href="/cityscapes"><img src="/images/frontpage1.jpeg" alt="art quilt The Arrogance of Calm"></a>
            <figcaption>Art Quilt: The Arrogance of Calm</figcaption>
        </figure>
        <figure>
            <a href="/watercolor"><img src="/images/frontpage2.jpeg" alt="watercolor painting Brenna's Pond 2"></a>
            <figcaption>Watercolor Painting: Brenna's Pond 2</figcaption>
        </figure>
        <figure>
            <a href="/watercolor"><img src="/images/frontpage3.jpeg" alt="watercolor painting Looking South Into The Light"></a>
            <figcaption>Watercolor Painting: Looking South Into The Light</figcaption>
        </figure>
    </div>
    `;
}

module.exports = home;