const nucleotidesMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = (nucleotides) => {
  const nucleotides_array = nucleotides.split('');
  return nucleotides_array
    .map(transformNucleotides)
    .join('');
};

function transformNucleotides(nucleotide) {
  return nucleotidesMap[nucleotide];
}
