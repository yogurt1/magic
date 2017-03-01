const append = what => to => [...to, what]

const mapEntriesToTwoFlatArrays = entries
    .reduce(
        (ac, pair) => pair
        .map((v, i) =>
            append(v)(ac[i])
        ),
        [ [], [] ]
    )
