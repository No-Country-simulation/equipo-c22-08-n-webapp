
export function removeHtmlTags(str) {
  if ((str === null) || (str === '') || (str === undefined)) {
    return '';
  } else {
    str = str.toString();
  }
  return str.replace(/(<([^>]+)>)/gi, '');
}
