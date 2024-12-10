# Fomogram

Fomogram is small social media platform similar to threads with some unique features & the FOMO effects 😎

![thumbnail](https://github.com/Irtiza751/fomogram/assets/91867702/920164b0-df11-447b-923c-dd3fc8d2aa79)
## Prerequisites
1. The project is a monorepo & uses pnpm for package management.
2. PNPM installation [installation guide](https://pnpm.io/installation)
3. Nodejs version >= 20
## Setup
Clone the repository
```
git clone https://github.com/Irtiza751/fomogram.git
```
Then
```
cd fomogram
```
The project is divided into 2 main modules `packages` & `apps` and in the apps folder there are currently 2 apps Backend & client (Web app) in order to run any module separately you can use this command.
```
pnpm run dev --filter=<module_name>
```
Or if you want to run the whole project simply run
```
pnpm run dev
```
