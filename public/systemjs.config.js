/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    var packages = {
        app: {
            main: './boot.js'
        },
        '@angular2-material/core': {
            format: 'cjs',
            main: 'core.umd.js'
        },
        '.': {
            defaultExtension: 'js'
        }
    };

    // angular2-material
    const materialPkgs = [
        'all',
        'button',
        'card',
        'checkbox',
        'dialog',
        'grid-list',
        'icon',
        'input',
        'list',
        'menu',
        'progress-bar',
        'progress-circle',
        'radio',
        'sidenav',
        'slider',
        'slide-toggle',
        'button-toggle',
        'tabs',
        'toolbar',
        'tooltip',
    ];
    materialPkgs.forEach(name => {
        packages[`@angular2-material/${name}`] = {
            format: 'cjs',
            main: `${name}.umd.js`
        };
    });

    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'js/vendor/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'js/app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // Material Design components
            '@angular2-material': 'npm:@angular2-material',
            '@angular2-material/core': {
                format: 'cjs',
                main: 'core.umd.js'
            },

            // other libraries
            'rxjs': 'npm:rxjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: packages
    });
})(this);