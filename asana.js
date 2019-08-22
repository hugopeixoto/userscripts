// ==UserScript==
// @name         Asana
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Asana!
// @author       Wiki Peixoto
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

function GM_addStyle(css) {
    const style = document.getElementById("tampermonkey_css") || (function() {
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = "tampermonkey_css";
        document.body.appendChild(style);
        return style;
    })();

    style.innerHTML += css;
}

(function() {
    'use strict';

    GM_addStyle(`
.BoardCardCoverImage { display: none; }
.TopbarContingentUpgradeLink { display: none; }
.TopbarHelpMenuButton { display: none; }
.TabNavigationBar { margin-left: 14px; }
.TopbarPageHeaderStructure-titleAndNav { flex-direction: row; }
.TopbarPageHeaderStructure { height: auto; }
.TopbarSearchTypeahead { height: auto; }
`);

    GM_addStyle(`
.BoardColumnScrollableContainer { display: block; }
`);

    GM_addStyle(`
.BoardCardWithCustomProperties { border-top: 1px solid #ccc; border-bottom: 1px solid transparent; box-shadow: none; border-radius: 0px; }
.BoardColumnWithSortableTasks-sortableItemWrapper { padding-bottom: 0px; }
.BoardCardCustomPropertyPreviewCell-cell { max-width: none; }
.BoardCardWithCustomProperties-contents { padding: 10px; }
.BoardCardWithCustomProperties-name { font-size: 12px; }
.BoardCardPotPills-potPill { width: 12px; }
.BoardCardWithCustomProperties-assignee, .BoardCardWithCustomProperties-dueDate { opacity: 1; }

.BoardCardWithCustomProperties, .BoardColumnScrollableContainer-cardsList { width: 100%; }
.BoardBody-column { max-width: 300px; width: 300px; }

.BoardCardWithCustomProperties-leftMetadata { display: flex; flex-direction: row; align-items: center; }
.BoardCardWithCustomProperties-customProperties { margin-top: 0px; margin-left: 10px; }

    `);
})();
