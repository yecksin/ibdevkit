export const IBDWordCounter = (words: string) => {
  let wordCount = 0;
  if (words) {
    let textReplaced = words.replace(/(<(\/?p)>)|(&nbsp;)/gi, ' ').replace(/(<([^>]+)>)/gi, '');
    let splitWords = textReplaced.split(' ');
    if (splitWords.length) {
      wordCount = 0;
      splitWords.map(item => {
        if (item === '' || item === '\n' || item === '\t') return;
        wordCount++;
      });
    } else {
      return 0;
    }
  } else {
    return 0;
  }
  return wordCount;
};
