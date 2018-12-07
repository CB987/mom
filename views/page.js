
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
    <link rel="stylesheet" href="/stylesheets/index.css">
</head>
<body>
<header>
<span class="h1-container">
<h1>elizabeth barton</h1>
</span>
<nav class="nav-container">
<a href="/home">home</a>
<a href="/about">about</a>
<a href="/art-quilts">art quilts</a>
<a href="/watercolor">watercolor</a>
<a href="/acrylic">acrylic</a>
<a href="/workshops">workshops</a>
<a href="/contact">contact</a>
</nav>
</header>
<div class="content">
${content}
</div>
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