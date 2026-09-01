---
navigation:
  order: 500
---

# Wallet Settings

Open Wallet Settings to manage accounts, saved addresses, networks, display currency, connections, and security options.

> **Important:** Back up the recovery phrase and any separately imported private keys before deleting accounts, replacing the wallet, or changing the master password.

## Account

The account list shows existing accounts and the currently selected account.

<img src="img/Screenshot_2025-09-24_at_17.41.46.png" alt="Wallet Settings screen 1" width="560" />

You can add accounts in two ways:

- **Create Account**: derives another account from the recovery phrase already in use.
- **Import Secret Key**: adds an account from a separate private key.

<img src="img/Screenshot_2025-09-24_at_17.45.17.png" alt="Wallet Settings screen 2" width="560" />

### Account details

The details screen shows the account name, address, and private key. Only the account name can be edited. The address and private key can be copied, and the account can be deleted.

<img src="img/Screenshot_2025-09-24_at_17.50.27.png" alt="Wallet Settings screen 3" width="360" />

> **Warning:** A private key gives full control of that account. Do not copy it unless necessary, and never paste it into a website, message, or support request. Deleting an imported account without backing up its private key can permanently remove your access.

## Address Book

The Address Book stores names and notes for frequently used addresses.

<img src="img/Screenshot_2025-09-24_at_18.05.31.png" alt="Wallet Settings screen 4" width="560" />

**Add Contact**

Enter:

- Name
- Address
- Description: add detailed description for contact

<img src="img/Screenshot_2025-09-24_at_18.06.12.png" alt="Wallet Settings screen 5" width="560" />

> **Caution:** A saved name does not prove that an address is still correct or belongs to the intended person. Verify the full address and network before every transfer.

## Network

The network list shows configured networks and the currently selected network.

<img src="img/Screenshot_2025-09-25_at_14.20.08.png" alt="Wallet Settings screen 6" width="560" />

You can select, add, or edit a network.

### Add a network

Obtain the following values from the network's official documentation:

- Network name (required)
- RPC URL (required)
- Chain ID (required; it may be detected from the RPC URL)
- Native-token symbol (required)
- Native-token name (required)
- Block Explorer URL (optional)

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-25_at_14.53.30.png" alt="Wallet Settings screen 7" width="360" />

For an existing network, only the Block Explorer URL can be edited.

> **Warning:** A malicious RPC endpoint can provide false blockchain data or track activity. Verify the RPC URL and chain ID with the network's official documentation.

## Currency Conversion

Select the fiat currency used for estimated balance values.

Available currencies:

- USD
- JPY
- EUR
- GBP
- AUD
- CAD
- HKD
- KRW
- SGD

<img src="img/Screenshot_2025-09-25_at_15.53.37.png" alt="Wallet Settings screen 8" width="360" />

Fiat values are estimates and may be delayed or unavailable.

## WalletConnect

This list shows active WalletConnect sessions. Tap **New Connection** to scan a DApp's QR code. You can also start the scanner from the Home screen or Wallet Dashboard.

Delete a session to disconnect that DApp. Remove sessions you no longer recognize or use.

<img src="img/Screenshot_2025-09-25_at_16.52.44.png" alt="Wallet Settings screen 9" width="560" />

## Permitted websites

This list shows websites allowed to connect to each wallet account.

<img src="img/Screenshot_2025-09-25_at_16.03.10.png" alt="Wallet Settings screen 10" width="560" />

After you approve a DApp connection, its URL is added here. On later visits, the listed site can reconnect to the approved account without another connection prompt. Remove sites you no longer use or trust. You can also add a site manually with **Add to List**.

> **Important:** Permission to connect does not by itself authorize every signature or transaction, but it exposes the account address and lets the site send requests. Verify the full domain, including spelling, before allowing it.

## Export Seed Phrase

Shows the wallet recovery phrase for backup.

<img src="img/Screenshot_2025-09-25_at_16.44.42.png" alt="Wallet Settings screen 11" width="560" />

> **Danger:** Anyone who sees the recovery phrase can take the wallet's assets. View it only in private, record it offline in the correct order, and never share it with Lunascape support or enter it on a website.

## Change Master Password

<img src="img/Screenshot_2025-09-25_at_17.04.04.png" alt="Wallet Settings screen 12" width="560" />

Changing the master password recreates the wallet from a recovery phrase. It can be used to set a new password for the current wallet or to replace it with a different wallet.

### Reset the password for the current wallet

If biometric unlock still works, first export and securely back up the current recovery phrase and any separately imported private keys. Enter that recovery phrase and create a new password.

- The current account list, displayed tokens, custom networks, and local transaction history are deleted and rebuilt.
- Accounts created with **Create Account** can be derived again from the same recovery phrase.
- Accounts added with **Import Secret Key** are not part of that recovery phrase. Back up each private key separately.

### Replace the wallet

Entering a different recovery phrase replaces the current wallet and sets a new password. Back up the current recovery phrase, imported private keys, addresses, and custom network details before continuing.

> **Danger:** This operation removes current local wallet data. Do not proceed until you have tested that every required backup is complete and readable.

## Unlock with Face ID / Touch ID (iOS only)

Allows the wallet to be unlocked with Face ID or Touch ID. Keep a valid wallet password and recovery backup even when biometrics are enabled.

## Send transaction with Face ID / Touch ID (iOS only)

Allows transaction confirmation with Face ID or Touch ID instead of entering the wallet password each time. Always review the transaction details before authenticating.

## Enable ethereum.isMetaMask

**Default:** Off

This compatibility option makes Lunascape identify itself through the provider flag commonly checked for MetaMask-compatible wallets.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_11.08.19.png" alt="Wallet Settings screen 13" width="360" />

Some DApps do not list Lunascape directly and only show a MetaMask option.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_11.14.31.png" alt="Wallet Settings screen 14" width="360" />

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_11.15.34.png" alt="Wallet Settings screen 15" width="360" />

In that case, enable this setting and select MetaMask in the DApp. The connection and approval screens still belong to the Lunascape wallet.

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_11.18.21.png" alt="Wallet Settings screen 16" width="360" />

> **Note:** This setting changes compatibility detection only. It does not install MetaMask, move your wallet, or make an untrusted DApp safe.
