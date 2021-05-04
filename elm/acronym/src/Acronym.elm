module Acronym exposing (abbreviate)

removeDelimiters : String -> String
removeDelimiters =
    String.replace "-" " "

abbreviate : String -> String
abbreviate phrase =
    String.join "" (List.map (\x -> String.toUpper(String.left 1 x)) (String.split " " (removeDelimiters phrase)))
