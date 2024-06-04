<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TileComponent extends AbstractHelper
{
  public function __invoke($title = null, $linkUrl = null, $imageUrl = null, $progress = null, $filterString = null) 
  {
    if (is_string($progress)) {

    $progColor = ($progress === "Ready for Review") ?  "green" : "red" ;
    }

$progressContent = "";

if (is_numeric($progress)) {
  $progressContent = <<<HTML
    <h4>$title</h4>
    <div class="progress-bar" 
      style="background-image: 
        linear-gradient(to right, 
          var(--progress-green) 0%, 
          var(--progress-green) $progress%, 
          var(--progress-bg) $progress%, 
          var(--progress-bg) 100%
        );">
      <span>$progress% Complete</span>
    </div>
  HTML;
} else {
  $progressContent = <<<HTML
    <div class="page progress-bar $progColor">
      <span>$progress</span>
    </div>
  HTML;
}

$html = <<<HTML
<a href="$linkUrl" class="tile" data-subjects="$filterString[0]"
  data-language="$filterString[1]" data-format="$filterString[2]"
  data-dates="$filterString[3]">
  <img src="$imageUrl" alt="$title" />
  $progressContent
</a>
HTML;

    return $html;
  }
}
