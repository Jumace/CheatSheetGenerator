# Wording

## stdin

Stands for: `standard in`

The default for input if nothing further is specified.

Shorthand when used with redirections: `0`

## stdout

Stands for: `standard out`

The default for output if nothing further is specified.

Shorthand when used with redirections: `1`


## stderr

Stands for `standard error`

The default for ouput of error messages if nothing further is specified.

Shorthand when used with redirections: `2`

# Logical control operators

## &&

```shell
npm i && npm run start
```

The logical && (AND) operator is used to execute multiple commands after each other.
There is no redirection of output/input.

Commands are executed from the left. Next command is only executed if the command before was finished successfully.

## ||

```shell
npm i || ./sendError.sh
```

The logical || (OR) operator is used to execute a command if the one before failed.
There is no redirection of output/input.

For this example if `npm i` would fail the file `sendError.sh` would be executed.