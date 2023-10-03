function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.join(`-${startString}`).slice(startString.length + 1);
}

export default cleanSet;
