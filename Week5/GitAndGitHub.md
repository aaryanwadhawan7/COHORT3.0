# Git and GitHub

# Git
## What is a Git ?

- Free and open source version control system.

## What is Version Control System ?

- A system that keep track of our files or projects.

- It allows you to revert selected files to the previous state, compare changes over time, see who last modified something so that we can know that might be causing a problem, or what is the issue, who made it, or what is the issue, and when with the details.

## Two types of VCS :

- Centralized and Distributed

![Alt text](./images/Screenshot%20(432).png)


![Alt text](./images/Screenshot%20(434).png)


## GitHub

- Web-Based Hosting Service

working directory ---> [git add] ---> staging area ---> [git commit]---> repository

## Commits

1. Commits hold the current state of the repository. A commit is also named by SHA1 hash.
2. Commit object = a node of the linked list
3. Every commit object has the pointer to the parent commit object.
4. From a given commit, you can traverse back by looking at the parent pointer to view the history of the commit.
5. If a commit has multiple parent commits, then that particular commit has been created by merging two branches.

## Starting with Git Commands (Using GitBash)

- Move to the folder which u want to initialize.

- Create a empty git repository or reinitialize the existing ones.
`git init`

- Check the status.
`git status`

- Move to staging area.
`git add .`

- Commit the changes.
`git commit -m "Adding my DSA files for commit"`

### Note
- These files we committed are still present in local repositories and are not present in GitHub repos.

- Check for remote repos that need to be configired.
`git remote -v`

- Configure the remote repo.
`git remote add DSA-Problems-Solution https://github.com/aaryanwadhawan7/DSA-Problems-Solution`

- Check the branch.
`git branch`

- Push the repo to GitHub.
`git push DSA-Problems-Solution master`

## Git Clone 

- Clone a repository into new directory.
`git clone <url>`

- Once clone you can manipulate or make changes to the repo via touch or vi bash commands !

## Git Branch

![Alt text](./images/Screenshot%202025-05-09%20194459.png)

- `git branch` : Gives current branch name

- `git checkout -b <branch_name>` : To change the current branch to branch_name

- If we working on the different branch e.g. feature_branch and make changes in the repo and if another person working on different branch e.g. main and wanted to see the possibile changes in the repo then he/she can use the following command :
`git diff feature_branch`

![Alt text](./images/Screenshot%202025-05-10%20132253.png)

# Git Fetch, Pull and Push

| Command     | Gets Code   | Updates Local Branch | Updates GitHub |
| ----------- | ------------| -------------------- | -------------- |
| `git fetch` |    ✅      |         ❌           |       ❌       |
| `git pull`  |    ✅      |         ✅           |       ❌       |
| `git push`  |    ❌      |         ❌           |       ✅       |

----------------------------------

![Alt text](./images/Screenshot%202025-05-11%20143925.png)