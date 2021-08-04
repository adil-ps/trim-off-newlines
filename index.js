
const regex = /^(?:\r\n|\n|\r)+|(?:\r\n|\n|\r)+$/g;
export const trimOffNewlines = lines => lines.replace(regex, '');
