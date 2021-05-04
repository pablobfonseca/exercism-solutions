class ResistorColorDuo
  RESISTORS = %w[
    black
    brown
    red
    orange
    yellow
    green
    blue
    violet
    grey
    white
  ]

  def self.value(colors)
    "#{RESISTORS.index(colors[0])}#{RESISTORS.index(colors[1])}".to_i
  end
end
