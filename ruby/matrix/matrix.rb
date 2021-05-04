class Matrix
  def initialize(string)
    @string = string
  end

  def rows
    @string.split("\n").each_with_object([]) do |el, obj|
      obj << el.split(' ').map(&:to_i)
    end
  end

  def columns
    rows.transpose
  end
end
