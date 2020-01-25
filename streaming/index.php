<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/main.css">
    <script src="https://kit.fontawesome.com/f52e226df8.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Red+Hat+Display:400,700,900&display=swap" rel="stylesheet">


    <meta name="turbolinks-cache-control" content="no-preview">
    <link rel="canonical" href="">
    <title>Botol.best - Nonton Anime Streaming</title>
    <meta name="title" content="Botol.best - Streaming Anime">
    <meta name="description" content="Streaming Anime dari API Riie">

    <meta property="og:site_name" content="Botol.best Grup">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:title" content="Botol.best - Streaming Anime">
    <meta property="og:description"
        content="Streaming Anime dari API Riie">
    <meta property="og:image" content="../img/botol.png">

    <meta name="twitter:domain" content="www.botol.best">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="">
    <meta name="twitter:title" content="Botol.best - Streaming Anime">
    <meta name="twitter:description"
        content="Streaming Anime dari API Riie">
    <meta name="twitter:image" content="../img/botol.png">
</head>


</style>
<body class='jumbotron'>
<h1 class="text-center">Nonton Anime Streaming</h1>
<?php
include "api.php";
if(isset($_GET['id'])){

    $id = $_GET['id'];
    $link =  $dataApi[$id]['link'];
    // grabbing html getLink
    $ambilMovie = grabbing($link."?mirror=2");
    
    // // mengambil Embed dari link steaming
    $linkMovie = explode('<div id="lightsVideo">',$ambilMovie);
    $closelinkMovie = explode('<ul id="tabmenu" >',$linkMovie[1]);
    ?>
  <div class="container">
<?= $closelinkMovie[0]; ?>
  </div>
    <?php
}

?>
<div class="container">

<div class="row">
    
        <?php
    foreach($dataApi as $key => $value):?>
     <div class="col-lg-3 col-sm-12 col-md-6 my-2">
        <div class="card" style="width: 15rem;">
        <img src="<?=$dataApi[$key]["image"]  ?>" class="card-img-top" alt="<?= $dataApi[$key]["judul"] ?>">
            <div class="card-body">
                <h5 class="card-title"><?= $dataApi[$key]["judul"] ?></h5>                  
                <a class="btn btn-primary" href="?id=<?=$key ?>">Nonton</a>
</button>
            </div>
    </div> 
</div>
    <?php endforeach ?>
    
</div>
</div>
</body>
</html>