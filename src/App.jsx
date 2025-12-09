import { useState } from 'react'
import Body from './components/Body.jsX'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "18px",
            padding: "16px 24px",
            borderRadius: "12px",
            background: "#333",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
            style: { background: "#22c55e", color: "#fff" },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: { background: "#ef4444", color: "#fff" },
          },
        }}
      />
    </Provider>
  );
}

export default App;

