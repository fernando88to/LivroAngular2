# LivroAngular2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Comandos:

```bash
$ npm install -g typescript
$ npm install -g angular-cli
$ ng new LivroAngular2 //cria o projeto
$ ng server //roda o projeto
$ ng g c lista-pessoa   ou ng g component lista-pessoa

```


### Visual Code

Como o code não indica qual o branch ao fazer o pull tive que definir que o master é o padrão

```bash
git branch --set-upstream-to=origin/master master
```


### Data Binding

Interpolation

    Utiliza {{}}

Property binding

      []  

Event binding

    Tem o caminho contrário vem do template para a classe do componente.
    () (click)="acao"

Two-way data binding

    junção de property binding e event binding
    [()]      [(ngModel)]="variavel"

