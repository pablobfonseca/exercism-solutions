package acronym

import (
	"strings"
)

func removeDelimiters(s string) string {
	delimiters := []string{"-", "_"}

	for _, delimiter := range delimiters {
		s = strings.Replace(s, delimiter, " ", -1)
	}

	return s
}

// Abbreviate should have a comment documenting it.
func Abbreviate(s string) (out string) {
	s = removeDelimiters(s)
	words := strings.Fields(s)

	for i := range words {
		out += string(words[i][0])
	}

	return strings.ToUpper(out)
}
