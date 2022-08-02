<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Avatar Uploader</strong>
    <br />
    A React component to upload and crop avatars.
</p>
<p align="center">
    <img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue" />
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

# Challenge

As a frontend developer, your task is to create a React component using Typescript to let users upload and crop avatars.

<br/>

<p align="center">
    <img src="https://user-images.githubusercontent.com/943036/132790508-1d0b64be-9fc8-4cfc-8e12-a3066d373008.png" alt="Croct" width="500"/>
</p>

## Requirements

The `<AvatarUpload />` component should allow users to upload images to make it easier for them to recognize key interface elements related to an organization.

- It should allow uploading an image by dragging it into the dashed area or clicking on it.
- Throughout the entire process, the user can click on the "X" icon to cancel and return to the initial state
- After uploading, the user can adjust the image to better fit the circular format. Using a slider, the user can zoom in and out on the image cut out by the circular mask to preview the final result.
- Clicking on save, the component should display the cropped logo and a button to restart the process. It must also provide some way for parent components to access the resulting image's raw data.

We are very focused on code quality, so we expect you to include tests to ensure all requirements are covered.

Feel free to extract out subcomponents, like the slider, as you find necessary. You can also use open-source components available in the community – why reinvent the wheel, right? 😜

## Design

You can find the component's design [here](https://www.figma.com/file/aiiSV722MgNFBy0WqgfeQL/Challenges?node-id=1%3A19).

## Deliverable

<p align="center">
  <a href="#rocket-tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribure">How to contribure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Tecnologies

This project was develop by using follow tecnologies:

* [![Node][Node.js]][Node-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript.org]][TypeScript-url]
* [![Vite][Vite.js]][Vite-url]

## 💻 Project

The `<AvatarUpload />` allow users to upload images to make it easier for them to recognize key interface elements related to an organization.

## 🔖 Layout

You can find the component's design [here](https://www.figma.com/file/aiiSV722MgNFBy0WqgfeQL/Challenges?node-id=1%3A19).

## 🤔 How to contribure

- Make a fork this repository;
- Create a branch with your feature: `git checkout -b <my feature>`;
- Make commit of your updates: `git commit -m 'feat: <my feature>'`;
- Faça push para a sua branch: `git push origin <my feature>`.

After you merge your code, you can delete your branch.

## :memo: License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/wellyssongodinho/avatar-upload.git
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
or
$ npm install

# Run the client
$ yarn dev
or
$ npm run dev
```

Now you can see the project on your browser by acessing http://localhost:3030/

You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, `run npx vite --help` in your project.

```
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```
It is important to note that `vite preview` is intended for previewing the build locally and not meant as a production server.

**Preview Project**

* [![CodeSandbox][CodeSandbox]][CodeSandbox-url]
## Commands

- `dev`: runs the main application at `localhost:3030`
- `build`: creates the production build version
- `preview`: runs the preview project at `localhost:8080`
- `test`: executes all tests

[CodeSandbox]: https://img.shields.io/badge/CodeSandbox-20232A?style=for-the-badge&logo=codesandbox&logoColor=#000000
[CodeSandbox-url]: https://codesandbox.io/s/loving-lucy-vg8on5

[Node.js]: https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo=nodedotjs&logoColor=#339933
[Node-url]: https://nodejs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=#61DAFB
[React-url]: https://reactjs.org/

[Vite.js]: https://img.shields.io/badge/Vite-bd34fe?style=for-the-badge&logo=vite&logoColor=yellow
[Vite-url]: https://vitejs.dev/

[TypeScript.org]: https://img.shields.io/badge/TypeScript-0000CD?style=for-the-badge&logo=typescript&logoColor=#3178C6
[TypeScript-url]: https://www.typescriptlang.org/
