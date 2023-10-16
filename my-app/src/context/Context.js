import React from "react";

const Context = React.createContext('Guest');

const Provider = Context.Provider;
const Consumer = Context.Consumer;

export {Context as default, Provider, Consumer};