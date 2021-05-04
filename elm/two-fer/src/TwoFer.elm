module TwoFer exposing (twoFer)


twoFer : Maybe String -> String
twoFer name =
    case name of
        Just string ->
            "One for " ++ string ++ ", one for me."

        Nothing ->
            "One for you, one for me."
