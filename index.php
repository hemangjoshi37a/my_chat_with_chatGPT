<!DOCTYPE html>
<html>
<head>
  <title>Chat Data</title>
  <!-- Add the Material Design CSS library -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
</head>
<body>
  <!-- Add a tab bar to the page -->
  <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="mdl-tabs__tab-bar">
      <?php
        // Get a list of JSON files in the current directory
        $files = glob('*.json');

        // Add a tab for each JSON file
        foreach ($files as $file) {
          // Read the JSON file
          $json = file_get_contents($file);
          $data = json_decode($json);

          // Create the tab element
          echo '<a class="mdl-tabs__tab">' . $file . '</a>';
        }
      ?>
    </div>
    <div class="mdl-tabs__panels">
      <?php
        // Get a list of JSON files in the current directory
        $files = glob('*.json');

        // Add a tab panel for each JSON file
        foreach ($files as $file) {
          // Read the JSON file
          $json = file_get_contents($file);
          $data = json_decode($json);

          // Create the tab panel element
          echo '<div class="mdl-tabs__panel">';
          echo '<pre>' . htmlspecialchars(json_encode($data, JSON_PRETTY_PRINT)) . '</pre>';
          echo '</div>';
        }
      ?>
    </div>
  </div>
</body>
</html>
