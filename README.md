# React Testing

![image](https://miro.medium.com/v2/resize:fit:1200/1*w-0qjiIVa4jsl8DH1z2nPA.png)

You can learn how to test our project with React + Vite here. You will be able to see and learn about the required methods and packages. Through this, you will have the opportunity to independently test your project.

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clonehttps://github.com/Rofiyev/reactjs-testing.git
   cd reactjs-testing
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Run the jest testing:

   ```bash
   npm run test
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>
<hr/>

# Configuring the programming environment

### Step 1: Creating the react app with Vite

Open the terminal in your text editor (For the project, we will be making use of the **VSCode**) and proceed to create the react app using the command below:

`npm create vite@latest`

Follow the wizard and select the desired options

![create project image](https://res.cloudinary.com/practicaldev/image/fetch/s--NKUoVxwU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dcfsgfq1uvij1qs84cj2.png)

From the above, you'd see we have selected **React** and **Typescript**, and we called the project **"mini-app-testing"** so we will be building with **Typescript**.

- Now run the following commands to get started and install the needed packages, step by step.

`cd mini-app-testing` - to navigate to the project directory.

`npm install` - to install the packages. (You can also use yarn but we started with npm so we stick with it).

`npm run dev` - to start the project.

If you have done the above correctly, you should have something like this
On your **VSCode** ( Maybe other code editors! )

![Vscode](https://res.cloudinary.com/practicaldev/image/fetch/s--38IHgkgf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a2iphntmhh591a405f6l.png)

On your browser

![The project open on your browser](https://res.cloudinary.com/practicaldev/image/fetch/s--H8HEiYvQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/deenz41tcp1uyrsr45cq.png)

## Step 2: Setting up Jest

Before we dive into the process, note that **Vite** has certain limitations with **Jest** which makes setting up **Jest** in a **Vite** application to seem a bit complicated.
Follow the process below to get started

- `npm install jest --save-dev`

- `npm install @testing-library/react --save-dev`

- `npm install ts-jest @types/jest --save-dev`

- In the package.json, add `"test": "jest"` to the script

```javascript
// package.json

{
  "name": "mini-app-testing",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "test": "jest"
  },

```

- run `npm run test` and you receive a message saying no test found as seen below.

![run test](https://res.cloudinary.com/practicaldev/image/fetch/s--c6LGeNUE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bq21nasnjzckfbkuccg4.png)

- So to fix the above, In the src folder, we create a folder called **\_\_tests\_\_** and add the test file: `src/__ tests __/App.spec.tsx.`

![add test folder](https://res.cloudinary.com/practicaldev/image/fetch/s--H2fDsaDc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1r3e6cbmrxglcp4qmxw1.png)

- So to fix the above, In the src folder, we create a folder called **\_\_tests\_\_** and add the test file: `src/__ tests __/App.spec.tsx.`

- Add a simple test in the test file: **App.test.tsx**

```javascript
// src/__ tests __/App.test.tsx

test("demo", () => {
  expect(true).toBe(true);
});
```

- Run the `npm run test` again. Voila!!! our first test passed

![run test code](https://res.cloudinary.com/practicaldev/image/fetch/s--Qkc7GMIy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lvikr084oa8chvg080se.png)

## Step 3: Testing the components

- To test the components, we import the **App.tsx** into the **App.test.tsx** and run a simple truthy test on the App component.

```javascript
// src/__ tests __/App.test.tsx

import { render } from "@testing-library/react";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
```

- Let test again, run `npm run test`. But it will fail due to missing dependencies and configurations as seen below. So it has to be configured to be able to import and read imported components.

![error testing](https://res.cloudinary.com/practicaldev/image/fetch/s--VWFioxe2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wo21l6dpb9teqxxkbdsw.png)

- Run `npm install ts-node @testing-library/jest-dom --save-dev`
- Run `npm install jest-environment-jsdom`
- Run `npm install identity-obj-proxy --save-dev`
- In your root directory, create a **jest.config.ts** file and add the following to it

```javascript
// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
  },
};
```

- In the src folder, create a test folder, then create a **\_\_mocks\_\_\_** folder in the test folder and add a **fileMock.js** file: `src/test/__mocks__/fileMock.js` and add the following content:

```javascript
// src/test/__ mocks __/fileMock.js

module.exports = {
  __esModule: true,
  default: "test-file-stub",
};
```

- In the **App.test.tsx**, `import @testing-library/jest-dom`

```javascript
// src/__ tests __/App.test.tsx

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
```

- Then run the `npm run test` to check if all issues have been resolved.

![npm run test](https://res.cloudinary.com/practicaldev/image/fetch/s--9TJX-D28--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rgza9w0ep9imklqriuqz.png)

You can go ahead with your testing process. Happy testing!!!😀

# Conclusion

In summary, incorporating **Jest** and installing the essential **Jest** packages in a **React Vite** application is a simple and uncomplicated process. By following a series of straightforward steps, developers can seamlessly integrate **Jest** into their projects and harness its robust testing features. With **Jest** successfully implemented, they can confidently create tests to guarantee the quality and accuracy of their **React Vite** applications.
