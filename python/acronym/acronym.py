def abbreviate(words: str) -> str:
    filtered = list(filter(None, remove_delimiters(words).split(' ')))
    return ''.join([x[0].upper() for x in filtered])


def remove_delimiters(words: str) -> str:
    words = words.replace("-", " ")
    words = words.replace("_", " ")
    return words
