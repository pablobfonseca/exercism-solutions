from typing import List


class Matrix:
    def __init__(self, matrix_string: str):
        self.matrix = [[int(i) for i in e.split()] for e in matrix_string.split("\n")]

    def row(self, index: int) -> List[int]:
        return self.matrix[index - 1]

    def column(self, index: int) -> List[int]:
        return [r[index - 1] for r in self.matrix]
