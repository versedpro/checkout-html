import ReactDOM from "react-dom/client";
import { CheckoutWidget } from "luna-nft-checkout";
import "luna-nft-checkout/lib/esm/styles/style.css";
import React from "react";

function App(props) {
  return (
    <div className="App">
      <CheckoutWidget collectionId={props.collectionId} libraryType="ethers" />
    </div>
  );
}

const domContainer = document.getElementById("test_checkout");
const collectionId = domContainer.getAttribute("collection-id");
const root = ReactDOM.createRoot(domContainer);
root.render(<App collectionId={collectionId} />);
