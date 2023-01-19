<!DOCTYPE html>
<html>
<head>
    <title>My chat with chatGPT</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <style>
     /* Add the sidenav class to the body element */
     body {
       font-family: Arial, sans-serif;
       padding: 0;
       margin: 0;
       /* added */
       display: flex;
     }
     /* Add the sidenav class to the body element */
     .sidenav {
       height: 100%;
       width: 256px;
       position: fixed;
       z-index: 1;
       top: 0;
       left: 0;
       background-color: #7f8c8d;
       overflow-x: hidden;
       padding-top: 64px;
       /* added */
       transition: 0.5s;
     }
     .sidenav a {
       padding: 6px 8px 6px 16px;
       text-decoration: none;
       font-size: 18px;
       color: #f1f1f1;
       display: block;
     }
     .main {
       /* added */
       flex-grow: 1;
       margin-left: 256px;
       margin-top: 64px;
       padding: 0px 12px;
     }
     /* added */
     .sidenav.open {
       width: 256px;
     }
     .sidenav.closed {
       width: 0;
     }
     @media screen and (max-height: 450px) {
       .sidenav {
         padding-top: 15px;
       }
       .sidenav a {
         font-size: 18px;
       }
     }
    </style>
    <style>
     #page-frame {
       width: 100%;
       height: 100%;
       border: none;
       position: absolute;
       top: 64px;
       left: 0;
     }
    </style>

</head>
<body>
  <div class="sidenav">
    <?php
    $files = glob("*.html");
    foreach ($files as $file) {
        echo '<a href="#" onClick="displayPage(\'' .
            $file .
            '\'); return false;">' .
            $file .
            "</a>";
    }
    ?>
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  </div>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue-grey darken-2">
        <a href="#" class="brand-logo center white-text">Pages</a>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  </div>
  <div style="height: calc(100vh - 64px);">
    <iframe id="page-frame" class="responsive-iframe"></iframe>
  </div>
  <script>
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.sidenav');
          var instances = M.Sidenav.init(elems);
        });
        function displayPage(pageUrl) {
          document.querySelector('#page-frame').src = pageUrl;
          var elems = document.querySelectorAll('.sidenav');
          var instances = M.Sidenav.getInstance(elems[0]);
          instances.close();
        }
    </script>
    </body>
</html>
