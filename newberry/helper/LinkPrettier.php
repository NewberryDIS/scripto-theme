<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;


class LinkPrettier extends AbstractHelper
{
  public function __invoke (
    $titleDefault = null,
  ) {
    // Check if the string contains '['
    if (strpos($titleDefault, '[') !== false) {
      // Split the string on '['
      $splitString = explode('[', $titleDefault, 2); // Limiting to 2 to split only on the first occurrence
      if (isset($splitString[1])) {
        $splitString[1] = '[' . $splitString[1];
      }

      // Trim spaces from both parts of the split
      $splitString = array_map('trim', $splitString);

      $htmlString = "<span class='resource-name-start'>$splitString[0]</span><span class='resource-name-end'>$splitString[1]</span>";
      // Return the split parts
    } else {
      // If '[' is not present, return the original string as the first element and an empty string as the second element
      $htmlString = "<span class='resource-name'>$titleDefault</span>";
    }

    /* $linkContent = "<span class='resource-name resource-name-start'>{input[0]}</span><span class='resource-name-end'>input[1]</span>"; */
    return $htmlString;

    /* if (empty($attributes['class'])) { */
    /*     $attributes['class'] = 'resource-link'; */
    /* } else { */
    /*     $attributes['class'] .= ' resource-link'; */
    /* } */
    /* return $linkContent; */
    /* return $this->linkRaw($linkContent, $action, $attributes); */
  }

}
?>
