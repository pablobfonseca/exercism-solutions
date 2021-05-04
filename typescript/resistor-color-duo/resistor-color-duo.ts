export class ResistorColor {
  private colors: string[]
  private RESISTORS: string[]

  constructor(colors: string[]) {
    if (colors.length < 2)
      throw new Error('At least two colors need to be present')

    this.colors = colors
    this.RESISTORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white'
    ]
  }

  value = (): number => {
    const [firstColor, secondColor] = this.colors

    return parseInt(this.getResistorValues(firstColor, secondColor))
  }

  private getResistorValues = (firstColor: string, secondColor: string): string => this.RESISTORS.indexOf(firstColor).toString() + this.RESISTORS.indexOf(secondColor).toString()
}
