# GenPwd as a service

An experiment using [Stdlib](https://stdlib.com/) to create a [GenPwd](https://genpwd.glitch.me/) function-as-
a-service, i.e expose through a REST API as a lambda function with no UI.

It is currently deployed at `https://alphajuliet.lib.id/genpwd/`.

## Usage

The function call has five parameters, all optional with defaults.

* `genId`: a number that selects the generator to use, currently between 0 and
3. Default is 3.
* `nwords`: the number of random words to return. Default is 10.
* `punctuation`: adds punctuation if 1, otherwise no. Default is 0.
* `capitals`: adds capital letters if 1, otherwise no. Default is 0.
* `numbers`: adds numbers if 1, otherwise no. Default is 0.

## Examples

* `https://alphajuliet.lib.id/genpwd/?nwords=20`
* `https://alphajuliet.lib.id/genpwd/?genId=2&punctuation=1&numbers=1&capitals=1`
