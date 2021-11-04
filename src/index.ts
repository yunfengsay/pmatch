const tag = "#"
export const pmatch = (partenString: string, targetString) => {
  let startIndex = 0;
  let endIndex = 0;
  const partenStringIter = partenString[Symbol.iterator]();
  const targetStringIter = targetString[Symbol.iterator]();
  while(true) {
    const partenChar = partenStringIter.next();
    const targetChar = targetStringIter.next();
    if (partenChar.done) {
      return true;
    }
    if (targetChar.done) {
      return false;
    }
    if (partenChar.value === tag) {
      startIndex = endIndex;
    }
    if (partenChar.value === tag) {
      endIndex = targetChar.value.indexOf(partenChar.value);
    }
    if (partenChar.value !== tag && targetChar.value !== partenChar.value) {
      return false;
    }
  }
}

