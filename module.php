<?php

/**
 * Example theme.  Here we are extending an existing theme.
 * Instead, you could extend AbstractModule and implement ModuleThemeInterface directly.
 */

declare(strict_types=1);

namespace MyCustomNamespace;

use Fisharebest\Webtrees\Module\MinimalTheme;
use Fisharebest\Webtrees\Module\ModuleCustomInterface;
use Fisharebest\Webtrees\Module\ModuleCustomTrait;
use Fisharebest\Webtrees\View;

return new class extends MinimalTheme implements ModuleCustomInterface {
    use ModuleCustomTrait;

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Argon';
    }

    /**
     * Bootstrap the module
     */
    public function boot(): void
    {
        // Register a namespace for our views.
        View::registerNamespace($this->name(), $this->resourcesFolder() . 'views/');

        // Replace an existing view with our own version.
        View::registerCustomView('::layouts/default', $this->name() . '::layouts/default');

        // Site Footer
        View::registerCustomView('::modules/powered-by-webtrees/footer', $this->name() . '::modules/powered-by-webtrees/footer'); // Remove text-center class
        View::registerCustomView('::modules/contact-links/footer', $this->name() . '::modules/contact-links/footer'); // Remove text-center and padding classes
        View::registerCustomView('::modules/hit-counter/footer', $this->name() . '::modules/hit-counter/footer'); // Remove text-center and padding classes
        View::registerCustomView('::modules/privacy-policy/footer', $this->name() . '::modules/privacy-policy/footer'); // Remove text-center and padding classes

        // Tree Page Blocks
        View::registerCustomView('::modules/block-template', $this->name() . '::modules/block-template'); // Remove card classes from block
        View::registerCustomView('::modules/todo/research-tasks', $this->name() . '::modules/todo/research-tasks'); // Make table normal
        View::registerCustomView('::modules/recent_changes/changes-list', $this->name() . '::modules/recent_changes/changes-list'); // Restructure changes list

        // Individual Page
        View::registerCustomView('::individual-page', $this->name() . '::individual-page'); // Add class to header section
        View::registerCustomView('::modules/relatives/family', $this->name() . '::modules/relatives/family'); // Remove border- and padding- zero classes, make table normal-sized
        View::registerCustomView('::modules/interactive-tree/chart', $this->name() . '::modules/interactive-tree/chart'); // Add button class
        View::registerCustomView('::modules/stories/tab', $this->name() . '::modules/stories/tab'); // Add container for story
        View::registerCustomView('::modules/places/tab', $this->name() . '::modules/places/tab'); // Remove padding in sidebar
        View::registerCustomView('::modules/descendancy/sidebar', $this->name() . '::modules/descendancy/sidebar'); // Add Bootstrap form classes

        // Charts
        View::registerCustomView('::chart-box', $this->name() . '::chart-box'); // Increase thumbnail margin, update pedigree icon
        View::registerCustomView('::modules/lifespans-chart/chart', $this->name() . '::modules/lifespans-chart/chart'); // Adjust vertical positioning and set background based on gender class
        View::registerCustomView('::modules/pedigree-map/chart', $this->name() . '::modules/pedigree-map/chart'); // Remove padding in sidebar
        View::registerCustomView('::modules/statistics-chart/page', $this->name() . '::modules/statistics-chart/page'); // Change tabs to nav pills

        // FAQ Page
        View::registerCustomView('::modules/faq/show', $this->name() . '::modules/faq/show'); // Adjust TOC and back-to-top anchor

        // Lists
        View::registerCustomView('::lists/surnames-table', $this->name() . '::lists/surnames-table'); // Remove small and bordered classes from table
        View::registerCustomView('::modules/place-hierarchy/map', $this->name() . '::modules/place-hierarchy/map'); // Remove padding in sidebar
        View::registerCustomView('::modules/place-hierarchy/sidebar', $this->name() . '::modules/place-hierarchy/sidebar'); // Remove padding in sidebar
        View::registerCustomView('::modules/place-hierarchy/popup', $this->name() . '::modules/place-hierarchy/popup'); // Make table small and add remove padding-zero class in map marker popup
        View::registerCustomView('::modules/place-hierarchy/events', $this->name() . '::modules/place-hierarchy/events'); // Change tabs to nav pills and add bottom margin
        View::registerCustomView('::modules/place-hierarchy/list', $this->name() . '::modules/place-hierarchy/list'); // Make list header a heading
    }

    /**
     * Where does this module store its resources
     *
     * @return string
     */
    public function resourcesFolder(): string
    {
        return __DIR__ . '/resources/';
    }

    /**
     * Add our own stylesheet to the existing stylesheets.
     *
     * @return array
     */
    public function stylesheets(): array
    {
        $stylesheets = parent::stylesheets();

        // NOTE - a future version of webtrees will allow the modules to be stored in a private folder.
        // Only files in the /public/ folder will be accessible via the webserver.
        // Since modules cannot copy their files to the /public/ folder, they need to provide them via a callback.
        $stylesheets[] = $this->assetUrl('css/theme.css');

        return $stylesheets;
    }

    /**
     * Add our own scripts.
     *
     * @return array
     */
    public function scripts(): array
    {
        $scripts[] = $this->assetUrl('js/script.js');

        return $scripts;
    }
};
