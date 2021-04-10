<?php
declare(strict_types=1);

namespace JChue\WebtreesThemes\Argon;

use Fisharebest\Webtrees\Module\MinimalTheme;
use Fisharebest\Webtrees\Module\ModuleCustomInterface;
use Fisharebest\Webtrees\Module\ModuleCustomTrait;
use Fisharebest\Webtrees\Module\ModuleGlobalInterface;
use Fisharebest\Webtrees\Module\ModuleGlobalTrait;
use Fisharebest\Webtrees\View;

return new class extends MinimalTheme implements ModuleCustomInterface, ModuleGlobalInterface {
    use ModuleCustomTrait;
    use ModuleGlobalTrait;

    /**
     * @return string
     */
    public function title(): string
    {
        return 'Argon';
    }

    /**
     * Misecellaneous dimensions, fonts, styles, etc.
     *
     * @param string $parameter_name
     *
     * @return string|int|float
     */
    public function parameter($parameter_name)
    {
        $parameters = [
            'chart-background-f'             => 'fff4f9',
            'chart-background-m'             => 'f4fdff',
            'chart-background-u'             => 'f4f5f7',
            'chart-box-x'                    => 260,
            'chart-box-y'                    => 85,
            'chart-font-color'               => '000000',
            'chart-spacing-x'                => 5,
            'chart-spacing-y'                => 10,
            'compact-chart-box-x'            => 240,
            'compact-chart-box-y'            => 50,
            'distribution-chart-high-values' => '84beff',
            'distribution-chart-low-values'  => 'c3dfff',
            'distribution-chart-no-values'   => 'ffffff',
        ];

        return $parameters[$parameter_name];
    }

    /**
     * Bootstrap the module
     */
    public function boot(): void
    {
        // Register a namespace for our views.
        View::registerNamespace($this->name(), $this->resourcesFolder() . 'views/');

        // Replace an existing views with our own versions.

        // Site Layout
        View::registerCustomView('::layouts/default', $this->name() . '::layouts/default');

        // Site Footer
        View::registerCustomView('::modules/contact-links/footer', $this->name() . '::modules/contact-links/footer'); // Remove padding class
        View::registerCustomView('::modules/hit-counter/footer', $this->name() . '::modules/hit-counter/footer'); // Remove padding class
        View::registerCustomView('::modules/privacy-policy/footer', $this->name() . '::modules/privacy-policy/footer'); // Remove padding class

        // Tree Page Blocks
        View::registerCustomView('::modules/block-template', $this->name() . '::modules/block-template'); // Remove card classes from block
        View::registerCustomView('::modules/todo/research-tasks', $this->name() . '::modules/todo/research-tasks'); // Remove border class from table
        View::registerCustomView('::modules/recent_changes/changes-list', $this->name() . '::modules/recent_changes/changes-list'); // Redesign recent changes list

        // Individual Page
        View::registerCustomView('::individual-page', $this->name() . '::individual-page'); // Center silhouettes, make "Add a media object" smaller, change tabs to pills
        View::registerCustomView('::modules/relatives/family', $this->name() . '::modules/relatives/family'); // Fix spacing in Families tab
        View::registerCustomView('::modules/interactive-tree/chart', $this->name() . '::modules/interactive-tree/chart'); // Make compact layout toggle a proper button
        View::registerCustomView('::modules/stories/tab', $this->name() . '::modules/stories/tab'); // Add container for story
        View::registerCustomView('::modules/lightbox/tab', $this->name() . '::modules/lightbox/tab'); // Convert to grid
        View::registerCustomView('::modules/places/tab', $this->name() . '::modules/places/tab'); // Adjust padding in event list
        View::registerCustomView('::modules/descendancy/sidebar', $this->name() . '::modules/descendancy/sidebar'); // Style form field

        // Charts
        View::registerCustomView('::chart-box', $this->name() . '::chart-box'); // Increase thumbnail margin, update pedigree icon, increase padding for individual's links
        View::registerCustomView('::modules/lifespans-chart/chart', $this->name() . '::modules/lifespans-chart/chart'); // Adjust vertical positioning of lifespan rows and set background based on global gender class
        View::registerCustomView('::modules/pedigree-map/chart', $this->name() . '::modules/pedigree-map/chart'); // Adjust padding in list
        View::registerCustomView('::modules/statistics-chart/page', $this->name() . '::modules/statistics-chart/page'); // Change tabs to pills

        // FAQ Page
        View::registerCustomView('::modules/faq/show', $this->name() . '::modules/faq/show'); // Convert TOC from table to list, style questions, and adjust back-to-top anchor

        // Lists
        View::registerCustomView('::lists/surnames-table', $this->name() . '::lists/surnames-table'); // Remove small and bordered classes from table
        View::registerCustomView('::modules/place-hierarchy/map', $this->name() . '::modules/place-hierarchy/map'); // Remove padding separating map from location list
        View::registerCustomView('::modules/place-hierarchy/sidebar', $this->name() . '::modules/place-hierarchy/sidebar'); // Adjust padding in list
        View::registerCustomView('::modules/place-hierarchy/popup', $this->name() . '::modules/place-hierarchy/popup'); // Adjust table in map marker popup
        View::registerCustomView('::modules/place-hierarchy/list', $this->name() . '::modules/place-hierarchy/list'); // Make list header a heading
        View::registerCustomView('::lists/repositories-table', $this->name() . '::lists/repositories-table'); // Remove small and bordered classes from table
        View::registerCustomView('::lists/notes-table', $this->name() . '::lists/notes-table'); // Remove small and bordered classes from table
        View::registerCustomView('::lists/sources-table', $this->name() . '::lists/sources-table'); // Remove small class from table

        // Calendar
        View::registerCustomView('::calendar-page', $this->name() . '::calendar-page'); // Adjust spacing of "view" options
        View::registerCustomView('::calendar-list', $this->name() . '::calendar-list'); // Adjust table in event detail
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
     * Replace Minimal spreadsheet with Argon spreadsheet
     *
     * @return array
     */
    public function stylesheets(): array
    {
        // NOTE - a future version of webtrees will allow the modules to be stored in a private folder.
        // Only files in the /public/ folder will be accessible via the webserver.
        // Since modules cannot copy their files to the /public/ folder, they need to provide them via a callback.
        $stylesheets[] = $this->assetUrl('css/theme.css');

        return $stylesheets;
    }

    /**
     * Raw content, to be added at the end of the <body> element.
     * Typically, this will be <script> elements.
     *
     * @return string
     */
    public function bodyContent(): string
    {
        $bodyContent = '<script src="' . $this->assetUrl('js/script.js') .'"></script>';

        return $bodyContent;
    }
};
