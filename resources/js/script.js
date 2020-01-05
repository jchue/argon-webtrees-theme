"use strict";

var secondaryHeader = document.getElementById('secondary-header');
var secondaryHeaderHeight = secondaryHeader.offsetHeight;
var primaryHeader = document.getElementById('primary-header');
var primaryHeaderHeight = primaryHeader.offsetHeight;
var siteContent = document.getElementById('content');

function setHeader() {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition > secondaryHeaderHeight) {
    primaryHeader.style.position = 'fixed';
    siteContent.style.marginTop = primaryHeaderHeight + 'px';
  } else {
    primaryHeader.style.position = 'static';
    siteContent.style.marginTop = 0;
  }
}

window.addEventListener('load', setHeader);
window.addEventListener('scroll', setHeader);