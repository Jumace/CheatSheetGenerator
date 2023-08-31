# Cloning

To clone a repository one needs the repository url, e.g. `https://github.com/Jumace/CheatSheetGenerator.git`

Once that is obtained open your terminal/console and type:

```shell
git clone https://github.com/Jumace/CheatSheetGenerator.git
```

# Checking status

To check the status of the current respository use

```shell
git status
```

# Creating commits

After a few changes on the code base are done one can create a commit

First the changes need to be staged

```shell
git add .
```

Next a commit with the staged changed can be created

```shell
git commit -m 'this is my first commit'
```

## Ammending to a already created commit

```shell
git commit --amend
```

## Ammend without changing the commit message

```shell
git commit --amend --no-edit
```

# Pushing & Pulling

## Pushing

If there is locally a commit that is not on the remote yet use the following command to push it to the remote

```shell
git push
```

There are cases where one needs to convince the remote to take the local commit, a so called force push:

```shell
git push --force-with-lease
```

## Pulling

To pull changes from the remote to your local environemnt call

```shell
git pull
```