<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb1e7bdbedd3b2c0a78aad8d7cc94f779
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitb1e7bdbedd3b2c0a78aad8d7cc94f779', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb1e7bdbedd3b2c0a78aad8d7cc94f779', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb1e7bdbedd3b2c0a78aad8d7cc94f779::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
