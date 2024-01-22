<div align="center"><img src="./src/assets/Ethereum-Logo-PNG-HD-Image.png" width="150px"></div>
<br />
<div align="center">
  <h1 align="center">E-Commerce DApp</h1>

  <p align="center">
    <br />
    <a href="https://ecommerce-dapp-pink.vercel.app/"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href="./src/assets">Presentation IT</a>
  </p>
</div>

## Introduction

Your client, Gianni, owns an agency that offers training courses and workshops in the artistic field, with the aim of making people with motor disabilities discover the pleasure of creating real works of art.

Gianni is looking for a way to differentiate his courses and increase their perception of value among consumers. So, after years and years of tradition, he decides that it's time to bring some innovation to his agency, and taking a giant step he launches himself into the Web3 world, under the advice of one of his collaborators.

The customer is interested in selling their courses via an e-commerce dApp, where the only payment method is ERC-20 tokens (for simplicity, ETH).

This choice not only represents a technological innovation, but also an ecological choice. In fact, ERC-20 tokens represent a more sustainable and low environmental impact payment method, as they do not require the printing of physical money and do not generate harmful emissions into the environment.

## About the project

Your goal is to create a dApp that allows users (in this case Gianni and his clients) to exchange tokens on the Ethereum blockchain in a secure and easy-to-use way.

Customers will have to be able to send ETH tokens to Gianni's wallet, in exchange for his products (which in this case, will simply show a success page upon purchase).

It is essential that:

1. The application is developed using React and TypeScript
2. The application uses ethers.js (or wagmi) to make transactions on the Ethereum blockchain
3. Your balance is shown within the application
4. A gallery with the products sold by the company is shown
5. Users are able to connect to the dApp with a wallet connector (for example, MetaMask)
6. Users can send Gianni their ETH following a purchase on the platform
7. The application has an intuitive and easy to use user interface (don't make things too complicated!)
8. The application is distributed and hosted on Vercel.
9. The application must support a test network

## Importance of Wallet Provider
To ensure the smooth functioning of the E-Commerce DApp, it's crucial for users to have a compatible wallet provider installed. A wallet provider, such as MetaMask browser extension, plays a pivotal role in connecting users to the Ethereum blockchain and enabling secure transactions. Here's why having a wallet provider is essential:

1. Secure Transactions: Wallet providers, like MetaMask, act as a secure bridge between the user and the Ethereum blockchain. They manage private keys and provide a secure environment for signing transactions, ensuring the safety of users' funds.

2. User Authentication: Wallet providers serve as a means of user authentication. By connecting their Ethereum wallet to the dApp, users can securely access their accounts and perform transactions without the need for additional login credentials.

3. WalletConnect for Mobile Compatibility: The integration of WalletConnect extends compatibility to mobile devices. Users can connect their mobile wallets to the dApp, allowing for a broader user base and enhancing accessibility.

4. Transaction Confirmation: Wallet providers prompt users to confirm transactions, adding an additional layer of security. Users can review and approve transactions before they are broadcasted to the Ethereum network, preventing unauthorized actions.

5. Balance Display: The dApp displays the user's Ethereum balance within the application, providing transparency and allowing users to monitor their funds directly from the interface.

6. Intuitive User Experience: Wallet providers offer a familiar and intuitive user experience. Users who are already accustomed to using MetaMask or similar wallets will find it seamless to connect and interact with the E-Commerce DApp.

To fully experience the features of the dApp and participate in token transactions, users are encouraged to install a compatible wallet provider. MetaMask is a popular choice due to its widespread use and easy integration as a browser extension.

## About my choices

### Technology Stack

In developing this E-Commerce DApp, I made several key choices to ensure a secure, efficient, and user-friendly experience.

### React and TypeScript

I chose React and TypeScript for the frontend development to leverage the component-based architecture, which facilitates modular development and code reusability. TypeScript adds static typing, enhancing code quality and providing better developer tooling.

### Ethereum Transactions with Wagmi

For interacting with the Ethereum blockchain and handling transactions, I opted for Wagmi. Wagmi simplifies the process of sending and receiving ERC-20 tokens, ensuring a secure and reliable integration with the Ethereum network. It provides a user-friendly API for interacting with smart contracts, making it an excellent choice for decentralized applications.

### Wallet Connector (MetaMask & WalletConnect)

For user authentication and secure wallet transactions, I integrated wallet connectors, including MetaMask and WalletConnect. This choice ensures a seamless and familiar experience for users, allowing them to connect their Ethereum wallets to the dApp easily. MetaMask is widely used and provides a browser extension for easy integration, while WalletConnect enables mobile wallet compatibility for a broader user base.

### Vercel for Hosting

I selected Vercel for hosting the application due to its simplicity, scalability, and seamless integration with GitHub. Vercel provides automatic deployments, making it easy to showcase the live demo and deploy updates effortlessly.

### Test Network Support (Sepolia)

To enhance the development and testing process, the application supports a test network. This allows users to experiment with the dApp without using real Ethereum tokens, ensuring a risk-free environment for testing.

### User Interface Design

In designing the user interface, I focused on creating an intuitive and user-friendly experience. The goal was to provide a clean and visually appealing interface that guides users through the process of purchasing courses with minimal complexity.

### Environmental Considerations

The decision to exclusively use ERC-20 tokens, specifically ETH, as the payment method aligns with both technological innovation and environmental sustainability. By leveraging blockchain technology, we reduce the environmental impact associated with traditional payment methods.

These choices aim to create a seamless and sustainable solution for Gianni's agency, enhancing the overall user experience while embracing modern technologies and eco-friendly practices.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` (or relevant command).
4. Run the app with `npm run dev`.
5. Test the dApp!
    
## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Creator

- **Samuele Furnari**
  - Email: samuelefurnari9@gmail.com
  - GitHub: [samuelefrni](https://github.com/samuelefrni)
  - LinkedIn: [Samuele Furnari](https://www.linkedin.com/in/samuele-furnari-a37567220/)
 
 ## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
