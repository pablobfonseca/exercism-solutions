class Acronym
  def self.abbreviate(phrase)
    remove_delimiters(phrase)
      .split(' ')
      .map { |word| word[0].upcase }
      .join
  end

  def self.remove_delimiters(phrase)
    phrase.gsub!('-', ' ') if phrase.include?('-')
    phrase
  end
end
