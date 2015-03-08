function util_addCSS(css_one, css_two, etc) {
  for (i = 0; i < arguments.length; i++) {
    style = document.createElement('style');

    if (style.styleSheet)
      style.styleSheet.cssText = arguments[i];
    else
      style.appendChild(document.createTextNode(arguments[i]));
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}