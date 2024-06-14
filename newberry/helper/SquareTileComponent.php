<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class SquareTileComponent extends AbstractHelper
{
   public function __invoke( $tileData ) 
  {
    ['tileType' => $tileType, 'title' => $title, 'linkUrl' => $linkUrl, 'imageUrl' => $imageUrl, 'progress' => $progress, 'detail' => $detail, 'desc' => $desc, 'dates' => $dates, "featured" => $featured ] = $tileData;

    if (is_string($progress)) {
      $progColor = ($progress === "Ready for Review") ?  "green" : "red" ;
    } else { 
      $progColor = "green";
    }

    $progressText = is_string($progress) ? $progress : "{$progress}% Complete";
    $progressPercent = is_string($progress) ? "100" : $progress;

    $html = <<<HTML
      <a href="$linkUrl" class="sqile $tileType $progColor"  style="background-image: url($imageUrl);">
          <h4 class="sqitle">$title</h4>
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
      </a>
    HTML;

    return $html;
  }

}

