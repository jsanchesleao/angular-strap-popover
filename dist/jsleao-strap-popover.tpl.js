/**
 * jsleao-strap-popover
 * @version v2.1.1 - 2014-10-17
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: popover.tpl.js
angular.module('jsleao.ngStrap.popover').run(['$templateCache', function($templateCache) {

  $templateCache.put('popover/popover.tpl.html', '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');

}]);

// Source: tooltip.tpl.js
angular.module('jsleao.ngStrap.tooltip').run(['$templateCache', function($templateCache) {

  $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');

}]);


})(window, document);
