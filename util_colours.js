function util_RGBtoHEX(r, g, b, hash) {
  return (hash ? "#" : "") + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function util_HEXtoRGBA(hex, alpha, returnAsString) {
  rgb = util_HEXtoRGB(hex, returnAsString);
  return returnAsString ? "rgba" + rgb.slice(3, -1) + ", " + alpha.toString() + ")" : {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
    a: alpha
  }
}

function util_HEXtoRGB(hex, returnAsString) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? (returnAsString ? "rgb(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ")" : {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }) : null;
}