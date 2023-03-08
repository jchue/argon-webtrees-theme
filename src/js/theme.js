// Need to import stylesheet so Webpack processes it
import '../scss/theme.scss';

const secondaryHeader = document.getElementById('secondary-header');
const secondaryHeaderHeight = secondaryHeader.offsetHeight;

const primaryHeader = document.getElementById('primary-header');
const primaryHeaderHeight = primaryHeader.offsetHeight;

const siteContent = document.getElementById('content');

function setHeader() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition > secondaryHeaderHeight) {
    primaryHeader.style.position = 'fixed';
    siteContent.style.marginTop = `${primaryHeaderHeight}px`;
  } else {
    primaryHeader.style.position = 'static';
    siteContent.style.marginTop = 0;
  }
}

window.addEventListener('load', setHeader);
window.addEventListener('scroll', setHeader);
