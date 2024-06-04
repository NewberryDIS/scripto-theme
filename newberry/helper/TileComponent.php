<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TileComponent extends AbstractHelper
{
    public function __invoke($progress = null) 
    {
        return "rgba({$progress}.08)";
    }
}
