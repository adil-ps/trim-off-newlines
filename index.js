
const regex = /^(?:\r\n|\n|\r)+|(?:\r\n|\n|\r)+$/g;
const trimOffNewlines = lines => lines.replace(regex, '');
export default trimOffNewlines;
