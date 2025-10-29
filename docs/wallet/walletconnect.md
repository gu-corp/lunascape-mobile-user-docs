---
title: WalletConnect
---

# WalletConnect

WalletConnect is an **open source protocol** that enables secure connection between crypto wallets and decentralized applications (dApps) via QR codes or deep links. It allows users to sign transactions and authenticate without sharing private keys directly with the dApp.

Read details here: [https://walletconnect.network/](https://walletconnect.network/)

Lunascape app fully supports WalletConnect both QR codes and Deep links

## Connect to DApp via QR code

In the DApp, users choose to connect to the wallet via WalletConnect. A connection QR code will be generated and displayed.

![Screenshot 2025-09-26 at 13.23.25.png](img/Screenshot_2025-09-26_at_13.23.25.png)

In Lunascape application, users click on the button with the QR code scan icon on

Home screen

![Screenshot 2025-09-26 at 13.28.15.png](img/Screenshot_2025-09-26_at_13.28.15.png)

Or Wallet/Dashboard

![Screenshot 2025-09-26 at 13.29.08.png](img/Screenshot_2025-09-26_at_13.29.08.png)

Then scan the QR code to connect. A connection confirmation popup will be displayed for the user to confirm.

![IMG_0823.png](img/IMG_0823.png)

## Connect to DApp via Deep link

On DApp, go to Lunascape wallet to connect.

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.42.00.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.00.png)

When clicking on the Lunascape wallet, a popup confirming opening the Lunascape app is displayed. The user clicks Open to open the Lunascape app and make the connection.

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.42.59.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.59.png)

When the Lunascape app is opened, a popup confirming the connection to the DApp is displayed. The user confirms the connection.

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.43.10.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.43.10.png)

## WalletConnect Sessions

When successfully connected to DApp via WalletConnect, a session will be created.
Users can check the list of connected sessions at Wallet->Settings->WalletConnect.

![Screenshot 2025-09-26 at 14.01.56.png](img/Screenshot_2025-09-26_at_14.01.56.png)

On the WalletConnect screen, users can delete the connection session. When the user deletes the session, the DApp will automatically disconnect from the wallet.

On the contrary, in DApp, when the user disconnects from the wallet, the connected session will also be automatically removed from the list in the WalletConnect screen of the Lunascape application.

## Sign the transaction

Lunascape supports the following signature types:

- Personal Sign

![Screenshot 2025-09-26 at 15.41.37.png](img/Screenshot_2025-09-26_at_15.41.37.png)

- Sign Typed Data

![Screenshot 2025-09-26 at 15.41.54.png](img/Screenshot_2025-09-26_at_15.41.54.png)

- Sign Typed Data V3

![Screenshot 2025-09-26 at 15.42.13.png](img/Screenshot_2025-09-26_at_15.42.13.png)

- Sign Typed Data V4

![Screenshot 2025-09-26 at 15.42.29.png](img/Screenshot_2025-09-26_at_15.42.29.png)

## Send transaction

When a user makes a transaction on the DApp, a confirmation popup will be displayed on the Lunascape app for confirmation.

![IMG_0869.png](img/IMG_0869.png)

Currently Lunascape only supports Legacy Transaction.

EIP1559 Transaction will be supported in future versions.

## Switch Network

When the DApp changes network, a network switch confirmation popup is displayed for the user to confirm.

![IMG_0870.png](img/IMG_0870.png)
