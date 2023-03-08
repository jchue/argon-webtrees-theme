<?php
declare(strict_types=1);

namespace JChue\WebtreesThemes\Argon;

use Fisharebest\Webtrees\I18N;
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
        return I18N::translate('Argon');
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

        /**
         * Global
         */
        View::registerCustomView('::layouts/default', $this->name() . '::layouts/default'); // Site template
        View::registerCustomView('::modules/contact-links/footer', $this->name() . '::modules/contact-links/footer'); // Footer > contact line
        View::registerCustomView('::modules/hit-counter/footer', $this->name() . '::modules/hit-counter/footer'); // Footer > view count
        View::registerCustomView('::modules/powered-by-webtrees/footer', $this->name() . '::modules/powered-by-webtrees/footer'); // Footer > webtrees link
        View::registerCustomView('::modules/privacy-policy/footer', $this->name() . '::modules/privacy-policy/footer'); // Footer > privacy policy link

        /**
         * Tree Page Blocks
         */
        View::registerCustomView('::modules/gedcom_stats/statistics', $this->name() . '::modules/gedcom_stats/statistics'); // Blocks > Statistics
        View::registerCustomView('::modules/todo/research-tasks', $this->name() . '::modules/todo/research-tasks'); // Blocks > Research tasks
        View::registerCustomView('::modules/recent_changes/changes-list', $this->name() . '::modules/recent_changes/changes-list'); // Blocks > Recent changes (list layout)

        /**
         * Individual Page
         */
        View::registerCustomView('::individual-page-images', $this->name() . '::individual-page-images'); // Individual page thumbnails
        View::registerCustomView('::individual-page-tabs', $this->name() . '::individual-page-tabs'); // Individual page tabs
        View::registerCustomView('::modules/relatives/family', $this->name() . '::modules/relatives/family'); // Individual > Families tab
        View::registerCustomView('::modules/stories/tab', $this->name() . '::modules/stories/tab'); // Individual > Stories tab
        View::registerCustomView('::modules/lightbox/tab', $this->name() . '::modules/lightbox/tab'); // Individual > Album tab
        View::registerCustomView('::modules/places/tab', $this->name() . '::modules/places/tab'); // Individual > Places tab
        View::registerCustomView('::modules/descendancy/sidebar', $this->name() . '::modules/descendancy/sidebar'); // Individual > Descendants sidebar

        /**
         * Charts
         */
        View::registerCustomView('::modules/interactive-tree/chart', $this->name() . '::modules/interactive-tree/chart'); // Charts > Interactive tree AND Individual > Interactive tree tab
        View::registerCustomView('::chart-box', $this->name() . '::chart-box'); // Individuals' boxes in Charts > Ancestors, Compact Tree, Descendants, Family Book, Hourglass Chart, Pedigree, Relationships
        View::registerCustomView('::modules/lifespans-chart/chart', $this->name() . '::modules/lifespans-chart/chart'); // Charts > Lifespans
        View::registerCustomView('::modules/pedigree-map/chart', $this->name() . '::modules/pedigree-map/chart'); // Charts > Pedigree map
        View::registerCustomView('::modules/statistics-chart/page', $this->name() . '::modules/statistics-chart/page'); // Charts > Statistics

        /**
         * FAQ Page
         */
        View::registerCustomView('::modules/faq/show', $this->name() . '::modules/faq/show'); // Page template

        /**
         * Lists
         */
        View::registerCustomView('::lists/surnames-table', $this->name() . '::lists/surnames-table'); // Lists > Families AND Lists > Individuals
        View::registerCustomView('::modules/media-list/page', $this->name() . '::modules/media-list/page'); // Lists > Media objects
        View::registerCustomView('::modules/place-hierarchy/page', $this->name() . '::modules/place-hierarchy/page'); // Lists > Place hierarchy page
        View::registerCustomView('::place-hierarchy', $this->name() . '::place-hierarchy'); // Lists > Place hierarchy page > Place hierarchy (without map)
        View::registerCustomView('::modules/place-hierarchy/map', $this->name() . '::modules/place-hierarchy/map'); // Lists > Place hierarchy page > map
        View::registerCustomView('::modules/place-hierarchy/sidebar', $this->name() . '::modules/place-hierarchy/sidebar'); // Lists > Place hierarchy page > location entries
        View::registerCustomView('::modules/place-hierarchy/popup', $this->name() . '::modules/place-hierarchy/popup'); // Lists > Place hierarchy page >  map pin popup
        View::registerCustomView('::modules/place-hierarchy/list', $this->name() . '::modules/place-hierarchy/list'); // Lists > Place hierarchy page > Place list (under map)
        View::registerCustomView('::lists/repositories-table', $this->name() . '::lists/repositories-table'); // Lists > Repositories
        View::registerCustomView('::lists/notes-table', $this->name() . '::lists/notes-table'); // Lists > Shared notes
        View::registerCustomView('::lists/sources-table', $this->name() . '::lists/sources-table'); // Lists > Sources

        /**
         * Calendar
         */
        View::registerCustomView('::calendar-page', $this->name() . '::calendar-page'); // Calendar > Day/Month/Year > "View" row
        View::registerCustomView('::calendar-list', $this->name() . '::calendar-list'); // Calendar > Day > individuals/families table
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
        $stylesheets[] = $this->assetUrl('css/vendor.css');
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
        $bodyContent = '<script src="' . $this->assetUrl('js/theme.js') .'"></script>';

        return $bodyContent;
    }
};
