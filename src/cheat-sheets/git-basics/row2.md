# Stashing

## Create a stash
If one wants to temporarly save local changes (for example to switch between branches), stashing is the way to go

```shell
git stash .
```

You can also add a comment to that stash

```shell
git stash . -m 'description of stashed changes'
```

## List all stashes
To get an overview of all the stashes run

```shell
git stash list
```

## Retrieve a stash
To get the changes out of a stash there are two commands that can be used

Get the changes from a specific stash but leave it in the stash list
```shell
git stash apply stash{0}
```

Get changes from a specifc stash and remove it from the stsh list
```shell
git stash pop stash{0}
```

# Rebasing

Rebasing can be important if your branch is not up-to-date anymore with the branch you want it to merge into

Given one is on a feature branch (e.g. feat/enable-cheatcodes) and wants to merge it into the main branch, following steps are needed

Checkout the target branch, in this case main
```shell
git checkout main
```

Update the target branch
```shell
git pull
```

Switch back to the feature branch
```shell
git checkout -
```

Run the rebase command (adapt 'main' with your target branch)
```shell
git rebase origin/main
```

Resolve merge conflicts if needed

## Interactive rebasing
Interactive rebasing can be quite handy if you want to squash commits are change their order

First figure our how many commits you want to influnce of a `git status`

Next run this command to start the interactive rebasing (the number is the number of commits that one wants to interact with)
```shell
git rebase -i HEAD~4
```

One will get an overview of the commits something similar to
```shell
pick 7a3fa3c feat(themes): new blueprint theme
pick ad4ba53 fix(theme/blueprint): increase text contrast to background
pick 4dcf184 feat(cheat-sheet): create shell basics paper
pick 24241aa docs(shell-basics): remove typos
```

The first word is the action that should be done with the commit, for more actions follow the instructions under the list of commits