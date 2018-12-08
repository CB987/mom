
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
    <link rel="stylesheet" href="/stylesheets/index.css">
</head>
<body>
<header>
<span class="h1-container">
<h1>elizabeth barton</h1>
<h4>artist | teacher</h4>
</span>
<nav class="nav" id="myNav">
<a href="/home">home</a>
<a href="/about">about</a>
<div class="dropdown">
            <button class="dropbtn">art quilts</button>
            <div class="dropdown-content">
                <a href="/cityscapes">cityscapes</a>
                <a href="/landscapes">landscapes</a>
                <a href="/abstracts">abstracts</a>
            </div>
        </div>
<a href="/watercolor">watercolor</a>
<a href="/acrylic">acrylic</a>
<a href="/workshops">workshops</a>
<a href="/contact">contact</a>
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
</nav>
</header>
<section class="content">
${content}
</section>
<footer>
<p>copyright
<script type="text/javascript">
document.write(new Date().getFullYear());
</script> Elizabeth Barton. All rights reserved.</p>
</footer>
<script src="/index.js"></script>
</body>

</html>
    `;
}

module.exports = page;