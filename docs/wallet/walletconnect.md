---
navigation:
  title: "WalletConnect"
  order: 600
---

# WalletConnect

WalletConnect is an open protocol that lets a wallet exchange connection, signature, and transaction requests with a DApp through a QR code or deep link. The DApp does not receive your private key, but you must still inspect every request.

For protocol details, see the [WalletConnect website](https://walletconnect.network/).

Lunascape supports WalletConnect connections by QR code and deep link.

> **Important:** A WalletConnect code can contain a request from an untrusted site. Verify the DApp domain, requested account, and network before connecting. Never enter a recovery phrase or private key to complete a WalletConnect connection.

## Connect by QR code

1. On the DApp, choose **WalletConnect**. The DApp displays a QR code.

<img src="img/Screenshot_2025-09-26_at_13.23.25.png" alt="WalletConnect screen 1" width="560" />

2. In Lunascape, tap the QR scanner on the Home screen:

<img src="img/Screenshot_2025-09-26_at_13.28.15.png" alt="WalletConnect screen 2" width="560" />

   Or on the Wallet Dashboard:

<img src="img/Screenshot_2025-09-26_at_13.29.08.png" alt="WalletConnect screen 3" width="560" />

3. Scan the QR code.
4. Verify the DApp name and domain, account, network, and requested permissions.
5. Confirm the connection.

<img src="img/IMG_0823.png" alt="WalletConnect screen 4" width="360" />

## Connect by deep link

1. In the DApp's wallet list, select **Lunascape**.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.00.png" alt="WalletConnect screen 5" width="360" />

2. When prompted to open Lunascape, tap **Open**.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.59.png" alt="WalletConnect screen 6" width="360" />

3. In Lunascape, verify the request and confirm the connection.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.43.10.png" alt="WalletConnect screen 7" width="360" />

## WalletConnect Sessions

A successful connection creates a session. Open **Wallet** > **Settings** > **WalletConnect** to review active sessions.

<img src="img/Screenshot_2025-09-26_at_14.01.56.png" alt="WalletConnect screen 8" width="560" />

Delete a session to disconnect the DApp. Disconnecting from the DApp also removes its session from Lunascape.

> **Tip:** Remove sessions you no longer use or do not recognize.

## Sign a message

Lunascape can display requests using these signature methods:

- Personal Sign

<img src="img/Screenshot_2025-09-26_at_15.41.37.png" alt="WalletConnect screen 9" width="560" />

- Sign Typed Data

<img src="img/Screenshot_2025-09-26_at_15.41.54.png" alt="WalletConnect screen 10" width="560" />

- Sign Typed Data V3

<img src="img/Screenshot_2025-09-26_at_15.42.13.png" alt="WalletConnect screen 11" width="560" />

- Sign Typed Data V4

<img src="img/Screenshot_2025-09-26_at_15.42.29.png" alt="WalletConnect screen 12" width="560" />

> **Warning:** A signature can authorize account access or token actions. Reject an unexpected request or a message you cannot understand.

## Confirm a transaction

When a connected DApp requests a transaction, Lunascape displays a confirmation. Verify the network, destination or contract, amount, token permissions, and fee before approving it.

<img src="img/IMG_0869.png" alt="WalletConnect screen 13" width="360" />

> **Important:** A confirmed blockchain transaction usually cannot be canceled or reversed.

## Switch Network

When a DApp requests a different network, Lunascape shows the requested network for confirmation. Reject the request if it does not match the task you intended to perform.

<img src="img/IMG_0870.png" alt="WalletConnect screen 14" width="360" />
