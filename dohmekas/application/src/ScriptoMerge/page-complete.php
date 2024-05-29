
<?
function getPageContent($itemID, $pageID) {
    $wikiUrl = "https://transcribe.newberry.org/mw/api.php";
    $pageTitle = '2:' . $itemID . ':' . $pageID;
    // Parameters for the API request
    $params = [
        "action" => "query",
        "format" => "json",
        "prop" => "revisions",
        "titles" => $pageTitle,
        "rvprop" => "content",
    ];

    // Initialize cURL session
    $ch = curl_init($wikiUrl . '?' . http_build_query($params));
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, "PHP script");
    
    // Execute cURL session
    $response = curl_exec($ch);

    // Check for errors
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
        return false;
    }

    // Close cURL session
    curl_close($ch);

    // Decode JSON response
    $data = json_decode($response, true);

    // Extract page content
    $pages = $data["query"]["pages"];
    foreach ($pages as $page) {
      if (isset($page["revisions"])) {
        $content = $page["revisions"][0]["*"];
        if ( strlen($content) > 0 ) {
            return 1;
        } else {
          return 0;
        }
    }

    // If page content not found
    return 0;
    }
    ?>
