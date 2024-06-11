<?php
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TileComponent extends AbstractHelper
{
  public function __invoke($tileData)
  {
    ['tileType' => $tileType, 'title' => $title, 'linkUrl' => $linkUrl, 'imageUrl' => $imageUrl, 'progress' => $progress, 'filterString' => $filterString, 'detail' => $detail] = $tileData;
    if (is_string($progress)) {
      $progColor = ($progress === "Ready for Review") ? "green" : "red";
    } else {
      $progColor = "green";
    }

    $progressText = is_string($progress) ? $progress : "{$progress}% Complete";
    $progressPercent = is_string($progress) ? "100" : $progress;

    $html = <<<HTML
      <div class="tile-wrapper"  data-subjects="$filterString[0]"
          data-language="$filterString[1]" data-format="$filterString[2]"
          data-dates="$filterString[3]">
        <a href="$linkUrl" class="tile $tileType $progColor">
          <img src="$imageUrl" alt="$title" />
          <div class="text-block">
            <h4 class="title">$title</h4>
            <p class="detail">$detail</p>
            <div class="progress-bar" 
              style="background-image: 
                linear-gradient(to right, 
                  var(--progress-fg) 0%, 
                  var(--progress-fg) $progressPercent%, 
                  var(--progress-bg) $progressPercent%, 
                  var(--progress-bg) 100%
                );">
              <span>$progressText</span>
            </div>
          </div>
        </a>
      </div>
    HTML;

    return $html;
  }
}
