<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TileComponent extends AbstractHelper
{
   public function __invoke( $tileData ) 
  {
    ['tileType' => $tileType, 'title' => $title, 'linkUrl' => $linkUrl, 'imageUrl' => $imageUrl, 'progress' => $progress, 'filterString' => $filterString, 'detail' => $detail, 'desc' => $desc, 'dates' => $dates, "featured" => $featured ] = $tileData;


    if (is_string($progress)) {
      $progColor = ($progress === "Ready for Review") ?  "green" : "red" ;
    } else { 
      $progColor = "green";
    }
    if ($featured) {
      $tileType = $tileType . " featured";
      $detail = trunc($desc);
    }
    $progressText = is_string($progress) ? $progress : "{$progress}% Complete";
    $progressPercent = is_string($progress) ? "100" : $progress;

    $html = <<<HTML
      <a href="$linkUrl" class="tile $tileType $progColor" data-subjects="$filterString[0]"
        data-language="$filterString[1]" data-format="$filterString[2]"
        data-dates="$filterString[3]" style="background-image: url($imageUrl);">
        <h5 class="feature-tag">Featured Creator</h5>
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
    HTML;

    return $html;
  }

}

    function trunc(string $text, int $length = 400): string {
      if (strlen($text) <= $length) {
          return $text;
      }
      $text = substr($text, 0, $length);
      $text = substr($text, 0, strrpos($text, " "));
      $text .= "...";
      return $text;
    }
