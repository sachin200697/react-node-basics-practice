/*
Link to do config to use micro-frontend
https://www.linkedin.com/pulse/sharing-react-components-between-applications-webpack-ritesh-kumar/

*/



Webpack is a popular module bundler that can be used to bundle React applications. Webpack 5 introduces a new feature called "module federation" which allows you to share modules between applications at runtime. This feature enables you to share React components between different applications without having to duplicate code.
Here are the steps to share React components using Webpack 5:
Set up a Webpack configuration file for each application that needs to share React components. In the configuration file, set the "output.library" property to a unique name for the application.
In the configuration file for the application that provides the shared components, set the "output.libraryTarget" property to "var". This tells Webpack to expose the components as a global variable.
In the configuration file for the application that consumes the shared components, use the "module federation" plugin to configure Webpack to load the components from the provider application. This involves setting the "remote" property to the URL of the provider application, and specifying which components to load.
Import the shared components in the consuming application just like any other module.

Here's an example of how to share a React component between two applications using Webpack 5.
In this example, we have two applications: a provider application and a consumer application. The provider application exports a simple React component, and the consumer application imports and renders that component.
Here are the steps to set this up:
Create a new directory for each application, and initialize them with npm:
mkdir provider-ap
cd provider-app
npm init -y


mkdir consumer-app
cd consumer-app
npm init -y 
2. Install the necessary dependencies for each application:
# Provider app
cd provider-app
npm install react react-dom webpack webpack-cli webpack-dev-server @module-federation/client @module-federation/server --save-dev


# Consumer app
cd ../consumer-app
npm install react react-dom webpack webpack-cli webpack-dev-server @module-federation/client --save-dev
3. Create a new file called "App.js" in the provider application directory:
import React from 'react'

function App() {
  return <h1>Hello from Provider App!</h1>;
}

export default App;;
4. Create a new file called "index.js" in the provider application directory:
 import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
};
5. Create a new file called "webpack.config.js" in the provider application directory:
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'provider_app',
      library: { type: 'var', name: 'provider_app' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './App',
      },
    }),
  ],
};;
This configuration file sets up the module federation plugin to expose the "App" component from the provider application, and specifies a unique name for the application.
6. Start the provider application:
cd provider-app
npm run start 
This should start the provider application on http://localhost:3001.
7. Create a new file called "index.js" in the consumer application directory:
import React from 'react'
import ReactDOM from 'react-dom';

const render = () => {
  const App = React.lazy(() => import('provider_app/App'));

  ReactDOM.render(
    <React.StrictMode>
      <React.Suspense fallback="Loading...">
        <App />
      </React.Suspense>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept();
};
This file imports the "App" component from the provider application using the module federation plugin, and renders it using React.lazy.
8. Create a new file called "webpack.config.js" in the consumer application directory:
The "webpack.config.js" file in the consumer application directory sets up the module federation plugin to consume the "App" component from the provider application.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './index.js',
  mode: 'development',
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'consumer_app',
      remotes: {
        provider_app: 'provider_app@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
}; 
Here's a breakdown of each configuration option:
"name": Specifies a unique name for the consumer application.
"remotes": Specifies a map of remote applications to consume. In this case, we specify "provider_app" as the remote application, and provide the URL to its remote entry file.
When the consumer application is built and run, the module federation plugin will load the "App" component from the provider application at runtime.
Finally, to start the consumer application, run the following command in the consumer-app directory
