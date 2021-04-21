# Redirections

## Redirect `stdout`

```shell
ps aux > processes.txt
```

Redirect `stdout` of `ps aux` to file `processes.txt`. (file content will be replaces each time)


```shell
ps aux >> processes.txt
```

Redirect `stdout` of `ps aux` to file `processes.txt`. `stdout` will be appended to to conent of the file.


## Redirect `stdout` and `stderr`

```shell
    ps aux > processes.txt 2>&1
```

This is the old notation where you can see the shorthands for `stdout` and `stderr`: `2>&1`.


```shell
    ps aux &> processes.txt
```

This is the new syntax to make sure that also errors are redirected the same way as `stdout`.

## Pipe

Redirect the `stdout` of one command into the `stdin` of the next.

Example (list all running processes `ps aux` and filter `grep` for specific process):
```shell
ps aux | grep vscode
```

With the pipe you can chain multiple commands, each command will use the `stdout` of the last command as their `stdin`.

# Tips and Tricks

## Reversed Search

When you have a terminal open you can do a reverse-search of all the commands you already used.

For a blank search use the shortcut `cmd/ctrl + r`. To continue the search you need to use the shortcut again.

You can also use a search term and then press the shortcut.

## Ninja Sudo

Forgot the run the last command with sudo rights?

Don't want to write the whole command again?

There is no need to!

```shell
sudo !!
```

This will run the last command again but with sudo prepended.