---
title: Wallet Operations
---

# Wallet Operations with DApp

## Connect Wallet

In DApp, click on the Connect button to display the connection wallet options. Select Lunascape, a connection confirmation popup will be displayed, the user confirms the connection.

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.29.24.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.29.24.png)

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.29.30.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.29.30.png)

On some DApps like Pancakeswap, the Lunascape wallet may not be shown in the list of connected wallets. Please enable ethereum.isMetaMask, and connect under the name of the Metamask wallet.

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.32.35.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.32.35.png)

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.33.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.33.47.png)

## Add Token

There are 2 methods to add new tokens to the wallet.

### Method 1: add token manually

On the Asset List screen, click the Add button. The Add Assets screen will be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.49.21.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.49.21.png)

For Token Type is **Base Currency**, users just need to select **Network** to add the corresponding native token.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.52.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.52.47.png)

For Token Type is **ERC-20**, users fill in the **Contract Address** in the Address field. The QR code scanning feature is also supported.
After filling in the Contract Address, the token information will be automatically displayed, including: Token Name, Symbol, Decimals.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.56.57.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.56.57.png)

**Note**: an ERC-20 Token can have **one or more contract addresses**, each address will correspond to a network that this token is supported.
For example: USC is supported on many networks such as: Ethereum, BNB Smart Chain, Solana, Polygon, ... And the corresponding contract addresses are:

- Contract address on Ethereum: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
- Contract address on BNB Smart Chain: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
- Contract address on Solana: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v

So if the user fills in the contract address incorrectly with the selected network, the correct token information will not be obtained.

Finally, the user clicks the **Add Assets** button to complete the process of adding a new token.

### Method 2: add tokens from DApp

Users can add new tokens from the DApp they are using.

For example, users can search and add a lot of tokens from CoinMarketCap - this is a famous, legitimate and safe website. Here, users can search for the desired token, then go to the **Contracts** field.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.15.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.15.03.png)

Next, navigate to the contract address that corresponds to the network selected in your wallet. If the Ethereum network is selected in your wallet, navigate to the Ethereum network contract address. Then, click on the MetaMask icon.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.16.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.16.03.png)

Next, a popup asking for permission to connect to CoinMarketCap will be displayed. If you have connected before, the popup asking for permission to connect will not be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.21.09.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.21.09.png)

After the user confirms the connection, a token add popup will be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.21.16.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.21.16.png)

Finally, the user clicks the **Add tokens** button to complete the token adding process.

## Add Network

There are 2 ways to add network

### Method 1: add network manually

Check the instructions at Setting/Network/Add Network

### Method 2: add network from DApp

In DApp, when a user performs a network conversion or adds a network and that network does not exist in the wallet, a popup confirming the addition of the network will be displayed, the user will confirm the addition of the network.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.15.12.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.15.12.png)

**Note**: when a new network is added, the native token (base currency) of that network will also be automatically added to the wallet.

## Switch Network

When a user switches networks on the DApp, a network switch confirmation popup will be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.15.25.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.15.25.png)

Conversely, when a user switches networks on the wallet, the DApp will automatically switch to the corresponding network (no confirmation popup is displayed in this case)

In the following case: network A has been added to the wallet, but the native token (base currency) of network A has been removed from the wallet. When the user performs a network switching operation on the DApp, the popup confirming the addition of the network's native token will be displayed first, after the user confirms, the popup confirming the network switching will be displayed next.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.31.33.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.31.33.png)

## Sign the transaction

Many DApps support login via wallet, which means users can create active accounts on the DApp using their wallet information.

After connecting the DApp to the wallet, the user will sign a transaction to confirm account creation or use of the DApp.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.43.40.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.43.40.png)

When the user clicks the Sign button on the DApp, a signing request popup will be displayed for the user to confirm.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.45.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.45.03.png)

The user needs the wallet password to be able to sign.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.45.15.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.45.15.png)

Lunascape supports 4 signing methods: Personal Sign, Sign Typed Data, Sign Typed Data V3, Sign Typed Data V4

## Send transaction

When a user makes a send transaction on the DApp, a transaction confirmation popup will be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.30.30.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.30.30.png)

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.30.46.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.30.46.png)

Or when the user performs a Swap operation, a transaction confirmation popup will also be displayed.

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.33.55.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.33.55.png)

In the transaction confirmation popup, users can set the desired transaction fee.

Lunascape has calculated 3 values: Slow, Average, Fast based on the selected network. By default, the Average value is selected.

Users can also adjust the transaction fee manually by clicking the Advanced Settings button in the Transaction Fee Setting popup.

![Screenshot 2025-09-29 at 15.39.10.png](img/Screenshot_2025-09-29_at_15.39.10.png)

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.36.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.36.47.png)
