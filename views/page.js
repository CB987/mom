
function page(content) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Elizabeth Barton</title>
    <link href="https://fonts.googleapis.com/css?family=Hind+Guntur" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="/stylesheets/index.css">
</head>
<body>
<header>
<span class="h1-container">
<h1>elizabeth barton</h1>
<h4>artist | teacher</h4>
</span>
<nav class="fullNav-container" >
<a class"fullNav" href="/home">home</a>
<a class"fullNav" href="/about">about</a>
            <button class"fullNav" class="dropbtn">art quilts</button>
            <div class="dropdown-content">
                <a class"fullNav" href="/cityscapes">cityscapes</a>
                <a class"fullNav" href="/landscapes">landscapes</a>
                <a class"fullNav" href="/abstracts">abstracts</a>
        </div>
<a class"fullNav" href="/watercolor">watercolor</a>
<a class"fullNav" href="/acrylic">acrylic</a>
<a class"fullNav" href="/workshops">workshops</a>
<a class"fullNav" href="/contact">contact</a>
</nav>
<nav class="mobileNav-container">
    <a <i class="fas fa-ellipsis-v"></i></a>
    <a class="mobileNav-onclick" href="/home">home</a>
    <a class="mobileNav-onclick" href="/about">about</a>
    <button class="mobileNav-onclick" class="dropbtn">art quilts</button>
        <div class="dropdown-content">
            <a class="mobileNav-onclick" href="/cityscapes">cityscapes</a>
            <a class="mobileNav-onclick" href="/landscapes">landscapes</a>
            <a class="mobileNav-onclick" href="/abstracts">abstracts</a>
    </div>
    <a class="mobileNav-onclick" href="/watercolor">watercolor</a>
    <a class="mobileNav-onclick" href="/acrylic">acrylic</a>
    <a class="mobileNav-onclick" href="/workshops">workshops</a>
    <a class="mobileNav-onclick" href="/contact">contact</a>
</nav>
</header>
<section class="content">
${content}
</section>
<footer>
<p>copyright
${new Date().getFullYear()}
Elizabeth Barton. All rights reserved.</p>
</footer>
</body>

</html>
    `;
}

module.exports = page;