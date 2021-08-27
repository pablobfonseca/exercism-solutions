package strand

import (
	"strings"
)

type RNA_MAP map[string]string

var rnaMap = RNA_MAP{
	"C": "G",
	"G": "C",
	"T": "A",
	"A": "U",
}

type RNA struct {
	dna []string
}

func (r RNA) Convert() string {
	var result string
	for _, dna := range r.dna {
		result += rnaMap[dna]
	}
	return result
}

func ToRNA(dna string) string {
	rna := RNA{strings.Split(dna, "")}

	return rna.Convert()
}
