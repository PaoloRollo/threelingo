import { Course } from "../interfaces";

export const availableCourses: Course[] = [
  {
    id: "1",
    name: "Introduction",
    description:
      "Dive into the revolutionary world of decentralized technology with our comprehensive course that demystifies the intricate workings of blockchain and Web3. This curriculum is meticulously crafted to guide you through the core principles of blockchain technology, including the architecture of various wallets, the mechanics of transactions, and the transformative potential of smart contracts. You'll gain a robust understanding of how these elements come together to create a secure and transparent ecosystem that's reshaping the digital landscape. The course also delves into the philosophy underpinning Web3, exploring the pivotal concepts of privacy, security, trust, and transparency. We'll discuss the profound social impact of decentralized systems, examining how they empower individuals and foster a new paradigm of internet usage that prioritizes user control and equitable access. Whether you're a budding entrepreneur, a tech enthusiast, or simply curious about the future of the internet, this course will equip you with the knowledge to navigate and contribute to the burgeoning world of blockchain and Web3.",
    image: "/metamask.png",
    nftImage: "/course-1-nft.png",
    sections: [
      {
        name: "Blockchain and Wallets",
        units: [
          {
            name: "Blockchain Introduction - Core Principles",
            description:
              "Blockchain Basics\n" +
              'Blockchain is a revolutionary technology that has gained widespread attention in recent years. At its core, it is a decentralized and distributed ledger that records transactions in a tamper-resistant and transparent manner. Each transaction is grouped into a "block" and linked together in a chronological "chain," hence the name "blockchain."\n' +
              "\n" +
              "Blockchain & Decentralization\n" +
              "Decentralization is one of the fundamental principles of blockchain. Instead of relying on a central authority, like a bank or government, blockchain operates on a network of computers, each with a copy of the ledger. This decentralization ensures that no single entity has full control, making the system more resistant to censorship and corruption.\n" +
              "\n" +
              "What is a consensus mechanism?\n" +
              "Consensus mechanisms are the protocols that enable multiple participants on the blockchain network to agree on the state of the ledger. They ensure that all nodes in the network validate and agree on the same set of transactions. Popular mechanisms include Proof of Work (PoW) and Proof of Stake (PoS), each with its own way of achieving consensus.\n" +
              "\n" +
              "Security in Blockchain\n" +
              "Blockchain offers a high level of security through cryptographic techniques. Transactions are recorded in a way that is extremely difficult to alter or erase, providing transparency and trust. However, it's not immune to all threats, and security practices are essential to safeguard against attacks and vulnerabilities.\n" +
              "\n" +
              "Blockchain Use Cases\n" +
              "Blockchain's uses go beyond cryptocurrencies. It finds applications in various industries and sectors. For example, in supply chain management, blockchain can provide a transparent and immutable record of the movement of goods, reducing fraud and errors. In voting systems, it can enhance security and transparency, ensuring the integrity of elections. Healthcare records can benefit from blockchain by securely and efficiently managing patient data, facilitating access for authorized parties.\n" +
              "\n" +
              "Public vs. Private Blockchains\n" +
              "There are two main types of blockchains: public and private. Public blockchains, like Bitcoin and Ethereum, are open to anyone, and all transactions are visible to all participants. Private blockchains, on the other hand, are restricted to specific participants and often used by businesses for internal purposes, offering more control over the network.\n",
            steps: [
              {
                name: "Blockchain Basics",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary purpose of a blockchain?",
                    answers: [
                      "To store large files",
                      "To record transactions in a decentralized and secure manner",
                      "To create a centralized database",
                      "To facilitate peer-to-peer communication",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which term is often associated with the immutability of a blockchain?",
                    answers: [
                      "Transaction speed",
                      "Consensus mechanism",
                      "Centralized control",
                      "Forking",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What makes a blockchain different from traditional databases?",
                    answers: [
                      "Blockchain requires a central authority for validation",
                      "Traditional databases are decentralized",
                      "Blockchain offers tamper-proof, transparent records",
                      "Traditional databases are slower and less secure",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the process called where new transactions are added to the blockchain?",
                    answers: [
                      "Mining",
                      "Forking",
                      "Centralization",
                      "Timestamping",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question: "How does blockchain achieve decentralization?",
                    answers: [
                      "By relying on a single, powerful node",
                      "Through a distributed network of nodes",
                      "By encrypting all data",
                      "By using a centralized ledger",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Blockchain & Decentralization",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain relies on a distributed network of nodes to achieve decentralization.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role do nodes play in a blockchain network?",
                    answers: [
                      "They only store data relevant to their own transactions.",
                      "They validate and relay transactions and maintain a copy of the entire ledger.",
                      "They issue new cryptocurrencies.",
                      "They act as central regulators for transaction approval.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: In a decentralized blockchain, a single entity has the authority to alter the ledger unilaterally.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does consensus contribute to blockchain decentralization?",
                    answers: [
                      "It allows any node to make changes to the blockchain without agreement.",
                      "It requires a majority of nodes to agree on the validity of transactions.",
                      "It centralizes decision-making to a group of selected nodes.",
                      "It is a formality and does not impact the blockchain's operation.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Decentralization in blockchain technology eliminates the need for any intermediaries or middlemen in transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a potential benefit of blockchain decentralization?",
                    answers: [
                      "Increased dependency on a central authority.",
                      "Reduced risk of systemic failure due to the distributed nature of the network.",
                      "Faster transaction processing by centralizing data.",
                      "Simplified governance and decision-making processes.",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "What is a consensus mechanism?",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A consensus mechanism is a set of rules that all network participants must follow to validate and agree on new transactions. It ensures that all nodes on the network are in sync and helps maintain the BLANK of the blockchain.",
                    answers: [
                      "consistency and security",
                      "consistency",
                      "security",
                    ],
                    correctAnswer: "consistency and security",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is NOT a consensus mechanism commonly used in blockchain?",
                    answers: [
                      "Proof of Work (PoW)",
                      "Proof of Stake (PoS)",
                      "Proof of Authority (PoA)",
                      "Proof of Transaction (PoT)",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Proof of Work (PoW) consensus, miners compete to solve complex mathematical puzzles, and the first one to find a valid solution gets the right to propose a new block and add it to the blockchain. This process is known as 'mining' and helps secure the network through BLANK of computational work.",
                    answers: ["proof", "reward", "mining"],
                    correctAnswer: "proof",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In Proof of Stake (PoS) consensus, what determines who gets to create new blocks and validate transactions?",
                    answers: [
                      "The number of transactions they've processed",
                      "The amount of cryptocurrency they hold and are willing to 'stake'",
                      "The age of their node on the network",
                      "Random selection by the blockchain itself",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Delegated Proof of Stake (DPoS), a small number of trusted entities, known as 'delegates,' are chosen to produce blocks and validate transactions. This mechanism aims to improve transaction BLANK and scalability.",
                    answers: ["throughput", "speed", "fees"],
                    correctAnswer: "throughput",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of Proof of Authority (PoA) consensus?",
                    answers: [
                      "Maximum decentralization",
                      "High energy efficiency",
                      "Low security",
                      "Open participation for anyone",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Security in Blockchain",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following best describes the security features of blockchain?",
                    answers: [
                      "Centralized control",
                      "Immutable transaction history",
                      "Frequent data modifications",
                      "Lack of transparency",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Once data is recorded on the blockchain, it can be easily modified or deleted.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does encryption enhance the security of a blockchain?",
                    answers: [
                      "It speeds up transaction processing.",
                      "It encrypts user identities, making them anonymous.",
                      "It protects the confidentiality of transaction data.",
                      "It allows for reversible transactions.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain networks typically use standard internet security protocols like HTTPS for added security.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is a potential vulnerability in blockchain security?",
                    answers: [
                      "51% attacks, where a user or group gains control of the majority of the network's mining power.",
                      "SQL injection attacks on the blockchain ledger.",
                      "Cross-site scripting (XSS) attacks on blockchain transactions.",
                      "Phishing attacks targeting blockchain nodes.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts on the blockchain are immune to bugs and cannot be exploited.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which consensus mechanism is known for its environmental friendliness and security features?",
                    answers: [
                      "Proof of Work (PoW)",
                      "Proof of Stake (PoS)",
                      "Proof of Burn (PoB)",
                      "Proof of Authority (PoA)",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: All blockchains are public, and therefore, no blockchain can offer privacy for its transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does decentralization contribute to blockchain security?",
                    answers: [
                      "It centralizes data storage, making it easier to protect.",
                      "It distributes the ledger across many nodes, making it harder to compromise the entire network.",
                      "It relies on a single entity to manage and secure all data.",
                      "It makes the network slower, thus less attractive to attackers.",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Blockchain Use Cases",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Beyond cryptocurrencies, what are some common blockchain use cases?",
                    answers: [
                      "Centralized email services",
                      "Secure file storage",
                      "Voting systems",
                      "Manual record-keeping",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain technology is only relevant for financial applications, and it cannot be used for other industries.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which industry is exploring blockchain for tracking the supply chain from production to delivery?",
                    answers: [
                      "Entertainment",
                      "Education",
                      "Manufacturing",
                      "Hospitality",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain can be used to create immutable and transparent records for real estate transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How is blockchain technology impacting the healthcare industry?",
                    answers: [
                      "By providing a new platform for online consultations",
                      "By enabling secure sharing of medical records between institutions",
                      "By replacing traditional methods of diagnosis",
                      "By automating the delivery of medications",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts on the blockchain have potential use cases in legal processes for automating contract execution.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Blockchain's ability to ensure the authenticity of goods is particularly useful in which of the following sectors?",
                    answers: [
                      "Fast food",
                      "Luxury goods",
                      "Public transportation",
                      "Online gaming",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain technology has no application in the field of intellectual property and copyright management.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role does blockchain play in the energy sector?",
                    answers: [
                      "It is used to increase oil production.",
                      "It enables peer-to-peer energy trading platforms.",
                      "It reduces the physical infrastructure needed for energy distribution.",
                      "It is primarily used for advertising renewable energy sources.",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Public vs. Private Blockchains",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary characteristic that distinguishes public blockchains from private blockchains?",
                    answers: [
                      "Access is restricted to a select group of users",
                      "Public blockchains are always smaller in size",
                      "Private blockchains have a higher degree of transparency",
                      "Anyone can participate and validate transactions in public blockchains",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: In a public blockchain, all nodes are equal, and there are no special privileges or restrictions placed on participants.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In a private blockchain, who typically has the authority to grant or deny access to the network?",
                    answers: [
                      "A centralized governing body",
                      "No one, access is automatic",
                      "A random selection of users",
                      "The majority of participating nodes",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Private blockchains are often used when organizations need to collaborate and share data with external parties in a trustless manner.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which type of blockchain is more likely to require participants to reveal their real-world identities?",
                    answers: [
                      "Public blockchains",
                      "Private blockchains",
                      "Both public and private blockchains",
                      "Neither public nor private blockchains",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Public blockchains are typically faster and more efficient than private blockchains due to their open nature.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In a public blockchain, what is the incentive for participants (nodes) to validate transactions and maintain the network?",
                    answers: [
                      "Direct financial rewards through the creation of new tokens",
                      "Membership fees collected from participants",
                      "Centralized decision-making power",
                      "Philanthropic motivations",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
          {
            name: "Wallets",
            description:
              "Types of Wallets\n" +
              "Wallets are essential tools for managing cryptocurrencies. There are various types of wallets, each with its own features. Hardware wallets, such as Ledger or Trezor, provide maximum security as they store your private keys offline. Software wallets, like mobile or desktop wallets, offer convenience for everyday use. Web wallets, accessible through a web browser, are user-friendly but may be less secure. Paper wallets involve printing your keys for offline storage. The choice depends on your priorities - security, accessibility, or a balance of both.\n" +
              "\n" +
              "Download Metamask Wallet\n" +
              "MetaMask is a popular software wallet for managing Ethereum-based tokens. To download it, visit the official website or the app store on your device. Install the extension or app and follow the setup instructions. Once installed, you'll have a secure and user-friendly interface for managing your Ethereum assets, including sending, receiving, and interacting with decentralized applications (dApps).\n" +
              "\n" +
              "Connect Wallet through WalletConnect\n" +
              "WalletConnect is a protocol that enables you to connect your wallet to various dApps and services securely. To use WalletConnect, open your wallet and select the WalletConnect option. Then, scan the QR code provided by the dApp you wish to use. This establishes a secure connection, allowing you to interact with the dApp using your wallet. WalletConnect enhances the interoperability of wallets and dApps, providing a seamless user experience.\n" +
              "\n" +
              "Backup and Recovery\n" +
              "Backup and recovery are critical aspects of wallet management. Before you start using a wallet, it's crucial to set up a secure backup mechanism. This typically involves storing a backup phrase or private key in a safe and offline location. In case your wallet is lost or compromised, you can use this backup to recover your assets. Never share your backup information with anyone, and ensure it's securely stored to prevent unauthorized access to your funds.\n",
            steps: [
              {
                name: "Types of Wallets",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: There are different types of wallets for managing cryptocurrencies.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which type of cryptocurrency wallet is considered the most secure?",
                    answers: [
                      "Hot wallet",
                      "Cold wallet",
                      "Desktop wallet",
                      "Mobile wallet",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A BLANK wallet is a type of cryptocurrency wallet that is always connected to the internet and allows for more convenient transactions.",
                    answers: ["cold", "hot", "fresh"],
                    correctAnswer: "cold",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a hardware wallet in the context of cryptocurrency?",
                    answers: [
                      "A physical device that stores the user's private keys offline",
                      "A digital wallet that is installed on a computer's hardware",
                      "A wallet provided by hardware manufacturers for their users",
                      "A term used for wallets that can only store hardware tokens",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Paper wallets, which contain a cryptocurrency address and a private key, are a form of cold storage.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of using a mobile wallet for cryptocurrencies?",
                    answers: [
                      "Higher security than any other types of wallets",
                      "Ability to conduct transactions quickly and on the go",
                      "They can store unlimited types of cryptocurrencies",
                      "Mobile wallets are less susceptible to hacking",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "When using a desktop wallet, it's important to ensure your computer has adequate BLANK to prevent unauthorized access and potential malware threats.",
                    answers: ["security", "storage", "space"],
                    correctAnswer: "security",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: A multi-signature wallet requires more than one private key to authorize a transaction, increasing security.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which feature is most important when considering a wallet for DeFi (Decentralized Finance) activities?",
                    answers: [
                      "Social media integration",
                      "Compatibility with various DeFi platforms",
                      "Built-in gaming features",
                      "The ability to store physical cash",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Download Metamask Wallet",
                questions: [
                  {
                    type: "interactive",
                    question: "Download your Metamask Wallet",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Connect Wallet through WalletConnect",
                questions: [
                  {
                    type: "interactive",
                    question: "Connect your wallet through WalletConnect",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Backup and Recovery",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the most recommended way to back up your cryptocurrency wallet?",
                    answers: [
                      "Write down the seed phrase and store it in a secure location",
                      "Take a screenshot and save it on your phone",
                      "Memorize the seed phrase and do not write it down",
                      "Email the seed phrase to yourself for safekeeping",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: It's safe to store your backup seed phrase on a cloud storage service as long as it's encrypted.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Why is it important to perform regular backups of your cryptocurrency wallet?",
                    answers: [
                      "Wallet software updates can corrupt old backups",
                      "Cryptocurrencies can expire if not backed up",
                      "The value of cryptocurrencies increases with each backup",
                      "In case of hardware failure, theft, or loss, you can restore your funds",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: A single backup of your wallet is enough, regardless of how many transactions you've made since then.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "When backing up your wallet, it's crucial to keep multiple copies of your BLANK in different physical locations to prevent loss due to environmental damage or theft.",
                    answers: ["backup seed phrase", "backup", "phrase"],
                    correctAnswer: "backup seed phrase",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What should you do if you suspect your wallet backup has been compromised?",
                    answers: [
                      "Ignore the situation; it's probably a false alarm",
                      "Transfer your funds to a new wallet with a new seed phrase immediately",
                      "Wait to see if any funds are stolen before taking action",
                      "Share the seed phrase with a friend for advice",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: You should test your wallet backup periodically to ensure it will work when needed.",
                    correctAnswer: true,
                  },
                ],
              },
            ],
          },
          {
            name: "Transactions, P2P and Smart Contract interactions",
            description:
              "Blockchain Transactions\n" +
              "Blockchain transactions involve the transfer of digital assets between participants. These transactions are recorded on the blockchain, ensuring transparency and security. Transactions typically include sender and recipient addresses, amount, and transaction fees.\n" +
              "\n" +
              "Peer-to-Peer (P2P) Transactions\n" +
              "Peer-to-peer (P2P) transactions refer to direct exchanges of digital assets between individuals, bypassing intermediaries like banks. P2P transactions can occur on blockchain networks, enabling secure and private value transfers.\n" +
              "\n" +
              "Smart Contracts Overview\n" +
              "Smart contracts are self-executing agreements with predefined rules. They automatically execute when specific conditions are met. These contracts run on blockchain platforms and enable trustless interactions between parties, eliminating the need for intermediaries.\n" +
              "\n" +
              "Interacting with Smart Contracts\n" +
              "To interact with smart contracts, users send transactions to the contract's address. These transactions trigger the execution of the contract's code. Interaction can involve reading data or invoking functions to update the contract's state.\n" +
              "\n" +
              "Writing to Smart Contracts\n" +
              "Writing to smart contracts involves sending transactions that change the state of the contract. These transactions are executed by the contract's code, which can update variables, distribute tokens, or perform various tasks as defined in the contract.\n" +
              "\n" +
              "Transaction Exploration\n" +
              "Transaction exploration allows users to view transaction details on the blockchain. It provides information about transaction status, sender and recipient addresses, timestamp, and transaction ID. Users can track the progress of their transactions through exploration tools.\n" +
              "\n" +
              "Gas Fees\n" +
              "Gas fees are transaction fees required to execute operations on a blockchain. They cover the cost of computation and storage on the network. Users pay gas fees to miners for processing their transactions. The fee amount depends on the complexity of the operation.\n" +
              "\n" +
              "Gas Optimization\n" +
              "Gas optimization is the practice of minimizing transaction costs on a blockchain. It involves optimizing the use of computational resources in smart contracts to reduce gas fees. Techniques include code efficiency and reducing unnecessary operations to save on transaction costs.\n",
            steps: [
              {
                name: "Blockchain Transactions",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is a blockchain transaction primarily used for?",
                    answers: [
                      "Creating new cryptocurrencies",
                      "Updating blockchain software",
                      "Recording and verifying data or value transfers",
                      "Securing wallet access",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: A blockchain transaction once recorded can be easily altered or deleted by the network participants.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What does the term 'gas' refer to in the context of blockchain transactions?",
                    answers: [
                      "The physical energy required to maintain the network",
                      "The fee required to conduct a transaction on a blockchain network",
                      "A type of cryptocurrency",
                      "The storage space a transaction occupies on the blockchain",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Peer-to-peer (P2P) blockchain transactions eliminate the need for a central authority to validate transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In a blockchain transaction, the BLANK ensures that the transaction is secure and authentic.",
                    answers: ["digital signature", "transaction", "wallet"],
                    correctAnswer: "digital signature",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following best describes a 'smart contract'?",
                    answers: [
                      "A legal agreement between two parties in digital form",
                      "A computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract",
                      "A contract that is signed using a smart pen",
                      "An AI-generated contract that does not require human input",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts can operate independently of the blockchain.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is required to execute a function on a smart contract in a blockchain?",
                    answers: [
                      "A verbal agreement between the parties involved",
                      "A certain amount of cryptocurrency must be mined",
                      "A transaction that calls the contract's function",
                      "Approval from a majority of network nodes",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "Peer-to-Peer (P2P) Transactions",
                questions: [
                  {
                    type: "interactive",
                    question:
                      "Make a transfer of 1 USDC. Send it back to our wallet",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Smart Contracts Overview",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces, executes, or manages BLANK between parties.",
                    answers: [
                      "contracts or agreements",
                      "transaction",
                      "wallet",
                    ],
                    correctAnswer: "contracts or agreements",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What enables smart contracts to execute transactions without human intervention?",
                    answers: [
                      "Manual approval by blockchain developers",
                      "Predefined conditions coded within the contract",
                      "A consensus vote by all network participants",
                      "Periodic maintenance checks by network administrators",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts are legally binding in the same way traditional contracts are.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which blockchain platform is most renowned for its smart contract capabilities?",
                    answers: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contracts can be used to create decentralized applications, also known as BLANK, which operate on a blockchain network.",
                    correctAnswer: "DApps",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Once deployed, the code of a smart contract on the blockchain can be altered by the original creator at any time.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a potential benefit of using smart contracts over traditional contracts?",
                    answers: [
                      "They require more intermediaries",
                      "They are slower to execute",
                      "They reduce the likelihood of fraud and errors",
                      "They are more expensive to implement",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To interact with a smart contract, users typically need to send a transaction with the necessary BLANK to trigger the contract's functions.",
                    correctAnswer: "gas or fees",
                  },
                ],
              },
              {
                name: "Interacting with Smart Contracts",
                questions: [
                  {
                    type: "interactive",
                    question:
                      "Demonstrate how to interact with a simple smart contract, such as reading data from it.",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Writing to Smart Contracts",
                questions: [
                  {
                    type: "interactive",
                    question:
                      "Guide students on how to write data to a smart contract, such as submitting a transaction to change a contract's state.",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Transaction Exploration",
                questions: [
                  {
                    type: "interactive",
                    question:
                      "Teach students how to explore and analyze blockchain transactions using a blockchain explorer tool. Explain the information that can be gathered from a transaction.",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
              {
                name: "Gas Fees",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What are gas fees in blockchain transactions?",
                    answers: [
                      "Fees paid for generating new coins",
                      "Fees for executing smart contracts",
                      "Fees charged by wallet providers",
                      "Fees to access blockchain data",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Gas fees in blockchain transactions are calculated based on the computational work required to process and validate a transaction, which is often measured in units of BLANK.",
                    correctAnswer: "gas",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Gas fees are typically fixed and do not fluctuate based on network demand.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "When network congestion is high, what is likely to happen to gas fees?",
                    answers: [
                      "They decrease",
                      "They remain the same",
                      "They increase",
                      "They are removed entirely",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Gas fees play a crucial role in preventing BLANK on the blockchain.",
                    correctAnswer: "spam and resource abuse",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Users can set their own gas fees when initiating a transaction, regardless of network conditions.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What can users do to potentially reduce their gas fees when sending transactions?",
                    answers: [
                      "Wait for times when network congestion is high",
                      "Use a different blockchain with lower fees",
                      "Increase the gas limit for their transactions",
                      "Lower the gas price or choose off-peak times",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Gas Optimization",
                questions: [
                  {
                    type: "interactive",
                    question:
                      "Provide tips and strategies for optimizing gas usage in transactions and smart contract interactions. Explain how to set appropriate gas fees.",
                    correctAnswer: "https://metamask.io/",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Web3 Principles and Values",
        units: [
          {
            name: "The Philosophy of Web3",
            description:
              "Decentralization and Trustlessness\n" +
              "Web3's philosophy revolves around decentralization and trustlessness. It seeks to reduce reliance on central authorities and intermediaries, fostering a distributed network of nodes. Trustlessness implies that users can interact directly with the system without needing to trust a third party. This decentralization and trustlessness are core principles of Web3.\n" +
              "\n" +
              "Ownership and Control\n" +
              "Web3 places a strong emphasis on ownership and control. Users have more ownership of their digital assets, data, and identities. Through cryptographic keys and blockchain technology, individuals can assert control over their online presence, ensuring that they have a say in how their data is used and shared.\n" +
              "\n" +
              "Open Source and Collaboration\n" +
              "Open source and collaboration are fundamental to Web3's philosophy. Many Web3 projects are open source, allowing anyone to view and contribute to the code. Collaboration fosters innovation, transparency, and community-driven development, empowering users and developers to shape the future of the web.\n" +
              "\n" +
              "The Importance of Privacy\n" +
              "Privacy is a cornerstone of Web3. Users have greater control over their personal data and can choose what information to share. Privacy-focused technologies like zero-knowledge proofs and encryption are utilized to protect user data. Web3 aims to counter the invasive data practices of the traditional web and provide users with a more private online experience.\n",
            steps: [
              {
                name: "Using Safe Modules",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which is the correct method to add a Module interacting with the Module Manager?",
                    answers: [
                      "enableModule",
                      "addModule",
                      "insertModule",
                      "removeModule",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "How to execute a transaction from a module? BLANKTransactionFromModule",
                    correctAnswer: "exec",
                  },
                  {
                    type: "multiple-choice",
                    question: "Choose the correct one",
                    answers: [
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Module",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Module",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Ownership and Control",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "Web3 empowers individuals to have full ownership and control over their digital assets and data.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does Web3 technology ensure users maintain control over their digital identities?",
                    answers: [
                      " Through centralized databases.",
                      " By using non-fungible tokens (NFTs).",
                      " Through self-sovereign identity systems",
                      " By requiring government-issued IDs for verification.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "In Web3, users can transfer ownership of digital assets without the need for intermediaries.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The concept of self-sovereignty in Web3 refers to the user's ability to control access to their digital assets and personal data.",
                    correctAnswer: "self-sovereignty",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the significance of private keys in the context of ownership in Web3?",
                    answers: [
                      " They are shared publicly to prove ownership.",
                      " They are used by central authorities to manage user accounts.",
                      " They are cryptographic keys that users must keep private to secure their assets.",
                      " They are irrelevant to the concept of ownership.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart contracts on Web3 platforms can be used to automate ownership transfer without intermediaries.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Open Source and Collaboration",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Collaboration and innovation in Web3 are fueled by the use of open-source development and sharing of knowledge.",
                    correctAnswer: "open-source",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the advantage of open-source software in Web3?",
                    answers: [
                      " It allows for proprietary control over the software.",
                      " It encourages community involvement and collective problem-solving",
                      " It restricts access to the code to a select few developers.",
                      " It ensures that only paid users can access the technology.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "Collaboration in Web3 often leads to the development of standards and protocols that benefit the entire ecosystem.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Open-source development in Web3 is crucial because it allows for peer review and improvement by a diverse group of contributors.",
                    correctAnswer: "peer review",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does open-source contribute to the security of Web3 projects?",
                    answers: [
                      " By keeping the code secret and secure.",
                      " By allowing a broad community to audit and improve the code.",
                      " By restricting access to the code to increase security.",
                      " By requiring payment for access to the source code.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "The collaborative nature of Web3 development hinders innovation due to too many conflicting ideas.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "The Importance of Privacy",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is one of the core principles of Web3 regarding user privacy?",
                    answers: [
                      " Data monetization",
                      " Complete transparency",
                      " User control over personal data",
                      " Centralized data storage",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role does privacy play in the value proposition of Web3?",
                    answers: [
                      " It is incidental and not a primary concern.",
                      " It is central, as Web3 seeks to give users control over their data.",
                      " It is discouraged to maintain transparency.",
                      " It is only considered important for certain applications, not all.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "Privacy in Web3 is achieved through public ledgers that make all transaction details visible to everyone.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Privacy-enhancing technologies like zero-knowledge proofs are integral to Web3, allowing users to engage in transactions without revealing sensitive information.",
                    correctAnswer: "zero-knowledge proofs",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is a privacy-focused feature commonly found in Web3 applications?",
                    answers: [
                      " Mandatory data sharing with third parties.",
                      " Public display of all user activities.",
                      " Use of zero-knowledge proofs to facilitate private transactions.",
                      " Centralized control over user data.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Anonymity and privacy are the same in the context of Web3.",
                    correctAnswer: false,
                  },
                ],
              },
            ],
          },
          {
            name: "Privacy and Security",
            description:
              "Privacy in Web3\n" +
              "Privacy is a central concern in Web3. It aims to provide users with enhanced control over their personal data and online activities. With cryptographic techniques and decentralized systems, Web3 offers greater privacy, reducing the exposure of sensitive information to third parties.\n" +
              "\n" +
              "Security and Auditing\n" +
              "Security is paramount in Web3. The technology's design is intended to be highly secure, but vulnerabilities can still emerge. To mitigate risks, auditing is a common practice. Independent experts review smart contracts and blockchain code to identify and rectify potential security issues, ensuring the safety of decentralized systems.\n" +
              "\n" +
              "Cybersecurity and Hacking\n" +
              "Cybersecurity is an ongoing battle in the Web3 ecosystem. While Web3 offers increased security, it also presents new challenges for hackers. Secure practices, robust encryption, and vigilant monitoring are essential to safeguard against hacking attempts, protecting users and their assets in the decentralized landscape.\n",
            steps: [
              {
                name: "Privacy in Web3",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Web3 technologies enhance user privacy through advanced cryptographic techniques.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which feature of blockchain technology is most crucial for privacy in Web3?",
                    answers: [
                      " Public transaction ledgers.",
                      " The ability to create anonymous transactions.",
                      " Centralized user databases.",
                      " Transparent smart contracts.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "Zero-knowledge proofs are a method that can be used in Web3 to enhance privacy.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Privacy in Web3 is often enhanced by BLANK, which allows users to prove the validity of information without revealing the information itself.",
                    correctAnswer: "zero-knowledge proofs",
                  },
                  {
                    type: "multiple-choice",
                    question: "What is the role of encryption in Web3 privacy?",
                    answers: [
                      " It makes transactions slower and more expensive.",
                      " It provides a way to secure data and communications.",
                      " It is used to publicly display sensitive information.",
                      " It is not relevant to privacy in Web3.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "In Web3, privacy is optional and can be waived by users if they prefer transparency.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Security and Auditing",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Why is smart contract auditing essential in Web3 development?",
                    answers: [
                      " To increase transaction speed",
                      " To reduce gas fees",
                      " To ensure the safety and security of smart contracts",
                      " To centralize control over contracts",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the purpose of a smart contract audit in Web3?",
                    answers: [
                      " To ensure compliance with centralized regulations.",
                      " To identify and fix security vulnerabilities.",
                      " To assess the contract's performance and efficiency.",
                      " To determine the profitability of the smart contract.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "Regular security audits are unnecessary for smart contracts once they are deployed on the blockchain.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contract audits are a critical part of Web3 security, aiming to detect BLANK before they are exploited.",
                    correctAnswer: "Vulnerabilities",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Who typically performs smart contract audits in the Web3 space?",
                    answers: [
                      " Government regulators.",
                      " Independent security researchers and audit firms.",
                      " The developers who wrote the smart contracts.",
                      " All network participants collectively.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "The immutability of smart contracts means that once they are deployed, their code cannot be altered, making audits prior to deployment crucial.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Cybersecurity and Hacking",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is a common method used by hackers to compromise Web3 applications?",
                    answers: [
                      " Social engineering",
                      " Physical security breaches",
                      " Hardware malfunctions",
                      " Outdated encryption standards",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart contracts are inherently secure and cannot be hacked.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To safeguard Web3 applications, developers must stay updated on the latest security practices and BLANK.",
                    correctAnswer: "vulnerabilities",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is an essential practice for Web3 security?",
                    answers: [
                      " Using the same password for all accounts for consistency",
                      " Regularly updating and auditing smart contract code",
                      " Keeping all software versions outdated to confuse hackers",
                      " Sharing private keys with trusted third parties for safekeeping",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "Decentralization in Web3 makes it impossible for any cyber attacks to occur.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In the context of Web3, BLANK are crucial for developers to understand and mitigate to prevent exploitation and loss of funds.",
                    correctAnswer: "vulnerabilities",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role do bug bounties play in the security of Web3 platforms?",
                    answers: [
                      " They provide financial rewards for the best marketing strategies.",
                      " They offer incentives for finding and reporting security vulnerabilities.",
                      " They are used to pay hackers for successful breaches.",
                      " They fund the development of new hacking tools.",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
            ],
          },
          {
            name: "Trust and Transparency",
            description:
              "Trust in Code\n" +
              "Web3 places a significant emphasis on trust in code. Trust is established through the cryptographic and transparent nature of blockchain technology. Users can trust that the code governing decentralized systems will execute as intended, reducing the reliance on traditional trust in centralized institutions.\n" +
              "\n" +
              "Transparency and Immutable Records\n" +
              "Transparency is a fundamental principle of Web3. All transactions and data stored on the blockchain are visible to anyone, fostering a high degree of transparency. The immutability of records ensures that once data is added to the blockchain, it cannot be altered or erased, further enhancing transparency and trust in the system.\n" +
              "\n" +
              "Governance and Decision-Making\n" +
              "Web3 introduces new forms of governance and decision-making. Decentralized autonomous organizations (DAOs) enable community-driven decision-making, where token holders have a say in the network's direction. This fosters transparency in governance and reduces the concentration of power, reinforcing trust among participants in the Web3 ecosystem.\n" +
              "\n",
            steps: [
              {
                name: "Trust in Code",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "In Web3, what is the primary source of trust for users?",
                    answers: [
                      " Central authorities",
                      " Code and algorithms",
                      " User testimonials",
                      " Legal contracts",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In Web3, trust in code and algorithms is emphasized. Which of the following best reflects this emphasis?",
                    answers: [
                      " Code is written by centralized authorities.",
                      " Code and algorithms are audited by legal experts.",
                      " Trust is primarily based on user testimonials.",
                      " Trust is anchored in the reliability of code and algorithms",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "In Web3, user testimonials are often used as the primary source of trust in a decentralized network.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Web3, the BLANK of smart contracts and code execution ensures trust among network participants.",
                    correctAnswer: "transparency",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What distinguishes Web3 trust from traditional centralized trust models?",
                    answers: [
                      " Web3 trusts legal contracts for enforcement.",
                      " Centralized authorities dictate trust in Web3.",
                      " Trust in Web3 is rooted in code and decentralized consensus.",
                      " User testimonials determine trust in Web3.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Trust in code and algorithms implies that users do not need to verify the behavior of smart contracts.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "Transparency and Immutable Records",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain's immutability ensures transparent, tamper-proof records.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Web3 platforms are built on transparent and immutable ledgers, allowing for records that cannot be tampered with.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Blockchain's immutability ensures that once data is recorded, it becomes BLANK to any alterations or deletions.",
                    correctAnswer: "resistant",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of immutable records in the context of Web3 and blockchain?",
                    answers: [
                      " It allows for frequent data modifications.",
                      " It makes data transparency unnecessary.",
                      " It ensures that data is tamper-proof and cannot be altered.",
                      " It requires centralized authorities to manage data integrity.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Transparency in blockchain refers to the public accessibility of all transaction details.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Web3, the immutability of records leads to a BLANK system where historical data is preserved.",
                    correctAnswer: "historical",
                  },
                ],
              },
              {
                name: "Governance and Decision-Making",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Decentralized autonomous organizations (DAOs) and on-chain governance mechanisms promote democratic BLANK in Web3.",
                    correctAnswer: "governance",
                  },
                  {
                    type: "multiple-choice",
                    question: "DAOs in Web3 are known for enabling:",
                    answers: [
                      " Centralized decision-making.",
                      " Hierarchical management structures.",
                      " Community-driven consensus.",
                      " Exclusive control by a select few.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: On-chain governance allows for real-time voting without the need for intermediaries.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The governance process in many Web3 projects is transparent and BLANK, allowing stakeholders to participate directly in decision-making.",
                    correctAnswer: "inclusive",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the role of tokenomics in DAO governance?",
                    answers: [
                      " To provide a means for financial speculation only.",
                      " To incentivize participation and align interests within the ecosystem.",
                      " To restrict voting rights to a small group of developers.",
                      " To complicate the governance process and discourage participation.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: In Web3, governance decisions are typically made by a centralized group of developers.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contracts enable automated execution of decisions made through DAOs, ensuring that outcomes are BLANK with the collective will of the participants.",
                    correctAnswer: "aligned",
                  },
                ],
              },
            ],
          },
          {
            name: "Web3 and Social Impact",
            description:
              "Financial Inclusion\n" +
              "Web3 holds the promise of greater financial inclusion. By removing barriers and intermediaries, it offers individuals in underserved regions access to financial services. With a smartphone and an internet connection, people can participate in global financial systems, potentially reducing the wealth gap and fostering economic empowerment.\n" +
              "\n" +
              "Human Rights and Censorship Resistance\n" +
              "Web3 is a champion of human rights and censorship resistance. It enables individuals to exercise their freedom of expression without fear of censorship. In oppressive regimes, Web3 technologies can provide a lifeline for activists and dissidents to communicate securely and maintain their rights to privacy and free speech.\n" +
              "\n" +
              "Environmental Sustainability\n" +
              "Web3 also addresses concerns about environmental sustainability. Some blockchain networks are designed to be more energy-efficient, offering greener alternatives to traditional systems. By promoting sustainable practices, Web3 aligns with the growing global interest in mitigating the environmental impact of technology and energy consumption.\n",
            steps: [
              {
                name: "Financial Inclusion",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "How does Web3 contribute to financial inclusion?",
                    answers: [
                      " By restricting access to financial services",
                      " By promoting exclusivity",
                      " By providing access to global financial services, especially in underserved communities.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What feature of Web3 platforms can help reduce the costs of remittances for migrant workers?",
                    answers: [
                      " High transaction fees",
                      " Decentralized finance (DeFi) solutions",
                      " Traditional banking systems",
                      " Currency exchange restrictions",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Web3 initiatives can bypass traditional banking systems, providing financial services to the unbanked population.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Microloans facilitated through Web3 platforms can empower small entrepreneurs in BLANK economies.",
                    correctAnswer: "emerging",
                  },
                ],
              },
              {
                name: "Human Rights and Censorship Resistance",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Web3 technologies can play a role in protecting human rights and resisting censorship.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How can Web3 technology support freedom of speech?",
                    answers: [
                      " By allowing governments to control content",
                      " Through censorship-resistant platforms",
                      " By centralizing content management",
                      " Through exclusive access to information",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Decentralized identity solutions in Web3 can enhance privacy and protect against identity theft.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In oppressive regimes, Web3 can be a tool for BLANK, enabling citizens to communicate and organize without fear of censorship.",
                    correctAnswer: "dissent",
                  },
                ],
              },
              {
                name: "Environmental Sustainability",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Addressing BLANK is a concern in the blockchain and Web3 industry, with ongoing efforts to achieve sustainability.",
                    correctAnswer: "environmental impact",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is a sustainable practice being explored in the Web3 space?",
                    answers: [
                      " Proof of Work consensus mechanisms",
                      " Energy-intensive mining operations",
                      " Proof of Stake and other energy-efficient consensus algorithms",
                      " Use of non-renewable energy sources",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: NFTs and digital collectibles have no environmental impact.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The transition to BLANK is a step towards reducing the carbon footprint of blockchain networks.",
                    correctAnswer: "green energy sources",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "EOAs & Smart Accounts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna dignissim, pulvinar quam quis, cursus orci. Pellentesque blandit tellus a neque tincidunt placerat. Sed lacinia eleifend neque vitae interdum. Nullam at leo justo. Pellentesque sollicitudin tortor velit, vitae imperdiet lectus malesuada sit amet. Ut ligula ligula, volutpat et tortor ut, aliquet efficitur eros. Sed condimentum fermentum vulputate. Donec eu eros maximus, scelerisque tellus sit amet, vulputate turpis. Fusce mattis odio id blandit maximus. Morbi quis ultricies lacus. Nam ullamcorper nunc erat, in rhoncus lectus scelerisque quis.",
    image: "/safe.svg",
    nftImage: "/course-2-nft.png",
    sections: [
      {
        name: "Cryptography in Blockchain: Understanding Public and Private Keys",
        units: [
          {
            name: "Fundamentals of Cryptography",
            description:
              "What is Cryptography\n" +
              "Cryptography is a crucial component of modern digital security. It involves the use of mathematical techniques to protect information from unauthorized access or alteration. Cryptography relies on encryption to transform data into a secure format, making it unreadable without the correct decryption key. This technology ensures the confidentiality, integrity, and authenticity of information.\n" +
              "\n" +
              "Cryptography in Blockchain\n" +
              "Cryptography plays a central role in the security of blockchain technology. In blockchain, cryptographic techniques are used to secure transactions, control access, and maintain the integrity of the distributed ledger. Public and private keys are generated to enable secure ownership and transfer of digital assets. Hash functions ensure data integrity, while digital signatures verify the authenticity of transactions and participants on the network. Cryptography is the foundation of trust and security in blockchain, making it resistant to fraud and tampering.\n",
            steps: [
              {
                name: "What is Cryptography",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Cryptography is the study of",
                    answers: [
                      "Patterns and sequences",
                      "Secure communication techniques",
                      "Mathematical theories",
                      "Language translation",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is one of the primary goals of cryptography?",
                    answers: [
                      "Generating random numbers",
                      "Achieving absolute security",
                      "Confidentiality, Integrity, and Authentication",
                      "Rapid data transmission",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In cryptography, what does confidentiality refer to?",
                    answers: [
                      "The ability to access data quickly",
                      "Keeping data secret from unauthorized access",
                      "Data integrity verification",
                      "Public key distribution",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the main purpose of ensuring data integrity in cryptography?",
                    answers: [
                      "To keep data confidential",
                      "To verify the identity of users",
                      "To prevent unauthorized data alteration",
                      "To increase data transmission speed",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Authentication in cryptography is primarily concerned with:",
                    answers: [
                      "Ensuring data confidentiality",
                      "Confirming the identity of communicating parties",
                      "Generating secure encryption keys ",
                      "Increasing the speed of data transmission",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the main function of encryption in cryptography?",
                    answers: [
                      "Data compression",
                      "Data destruction",
                      "Data transformation to make it unreadable",
                      "Data optimization for storage",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role does a Public Key Infrastructure (PKI) play in cryptography?",
                    answers: [
                      "It ensures high-speed data transmission.",
                      "It provides a secure place for storing encryption keys.",
                      "It establishes trust and verifies the ownership of public keys",
                      "It encrypts and decrypts data messages.",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Cryptography in Blockchain",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Cryptography in blockchain is only used for creating digital signatures.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Cryptographic hash functions in blockchain can be reversed to reveal the original input data.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which aspect of blockchain security is NOT directly related to cryptography?",
                    answers: [
                      "Transaction integrity",
                      "Consensus mechanisms.",
                      "Peer-to-peer network propagation.",
                      "Wallet security.",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Cryptography ensures complete anonymity for users on the blockchain..",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does cryptography help in establishing trust in a blockchain network?",
                    answers: [
                      "By providing a legal framework for transactions.",
                      "By enabling a trustless environment where transactions don't require a third-party intermediary.",
                      "By ensuring all users are known and verified.",
                      "By allowing unrestricted access to data.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Cryptography in blockchain ensures that once data is written, it cannot be altered without detection.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Cryptography is essential for which aspect of consensus protocols in blockchain?",
                    answers: [
                      "Determining the physical location of nodes.",
                      "Ensuring all nodes have equal computational power.",
                      "Verifying the validity of new blocks added to the chain.",
                      "Increasing the speed of block creation.",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "What is a consensus mechanism?",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A consensus mechanism is a set of rules that all network participants must follow to validate and agree on new transactions. It ensures that all nodes on the network are in sync and helps maintain the BLANK of the blockchain.",
                    correctAnswer: "consistency and security",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is NOT a consensus mechanism commonly used in blockchain?",
                    answers: [
                      "Proof of Work (PoW)",
                      "Proof of Stake (PoS)",
                      "Proof of Authority (PoA)",
                      "Proof of Transaction (PoT)",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Proof of Work (PoW) consensus, miners compete to solve complex mathematical puzzles, and the first one to find a valid solution gets the right to propose a new block and add it to the blockchain. This process is known as 'mining' and helps secure the network through BLANK of computational work.",
                    correctAnswer: "proof",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In Proof of Stake (PoS) consensus, what determines who gets to create new blocks and validate transactions?",
                    answers: [
                      "The number of transactions they've processed",
                      "The amount of cryptocurrency they hold and are willing to 'stake'",
                      "The age of their node on the network",
                      "Random selection by the blockchain itself",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In Delegated Proof of Stake (DPoS), a small number of trusted entities, known as 'delegates,' are chosen to produce blocks and validate transactions. This mechanism aims to improve transaction BLANK and scalability.",
                    correctAnswer: "throughput",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of Proof of Authority (PoA) consensus?",
                    answers: [
                      "Maximum decentralization",
                      "High energy efficiency",
                      "Low security",
                      "Open participation for anyone",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Security in Blockchain",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following best describes the security features of blockchain?",
                    answers: [
                      "Centralized control",
                      "Immutable transaction history",
                      "Frequent data modifications",
                      "Lack of transparency",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Once data is recorded on the blockchain, it can be easily modified or deleted.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does encryption enhance the security of a blockchain?",
                    answers: [
                      "It speeds up transaction processing.",
                      "It encrypts user identities, making them anonymous.",
                      "It protects the confidentiality of transaction data.",
                      "It allows for reversible transactions.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain networks typically use standard internet security protocols like HTTPS for added security.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is a potential vulnerability in blockchain security?",
                    answers: [
                      "51% attacks, where a user or group gains control of the majority of the network's mining power.",
                      "SQL injection attacks on the blockchain ledger.",
                      "Cross-site scripting (XSS) attacks on blockchain transactions.",
                      "Phishing attacks targeting blockchain nodes.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts on the blockchain are immune to bugs and cannot be exploited.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which consensus mechanism is known for its environmental friendliness and security features?",
                    answers: [
                      "Proof of Work (PoW)",
                      "Proof of Stake (PoS)",
                      "Proof of Burn (PoB)",
                      "DPOW",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: All blockchains are public, and therefore, no blockchain can offer privacy for its transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does decentralization contribute to blockchain security?",
                    answers: [
                      "It centralizes data storage, making it easier to protect.",
                      "It distributes the ledger across many nodes, making it harder to compromise the entire network.",
                      "It relies on a single entity to manage and secure all data.",
                      "It makes the network slower, thus less attractive to attackers.",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Blockchain Use Cases",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain technology is only relevant for financial applications, and it cannot be used for other industries.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which industry is exploring blockchain for tracking the supply chain from production to delivery?",
                    answers: [
                      "Entertainment",
                      "Education",
                      "Manufacturing",
                      "Hospitality",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain can be used to create immutable and transparent records for real estate transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How is blockchain technology impacting the healthcare industry?",
                    answers: [
                      "By providing a new platform for online consultations",
                      "By enabling secure sharing of medical records between institutions",
                      "By replacing traditional methods of diagnosis",
                      "By automating the delivery of medications",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts on the blockchain have potential use cases in legal processes for automating contract execution.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Blockchain's ability to ensure the authenticity of goods is particularly useful in which of the following sectors?",
                    answers: [
                      "Fast food",
                      "Luxury goods",
                      "Public transportation",
                      "Online gaming",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Blockchain technology has no application in the field of intellectual property and copyright management.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "Public vs. Private Blockchains",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary characteristic that distinguishes public blockchains from private blockchains?",
                    answers: [
                      "Access is restricted to a select group of users",
                      "Public blockchains are always smaller in size",
                      "Private blockchains have a higher degree of transparency",
                      "Anyone can participate and validate transactions in public blockchains",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: In a public blockchain, all nodes are equal, and there are no special privileges or restrictions placed on participants.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In a private blockchain, who typically has the authority to grant or deny access to the network?",
                    answers: [
                      "A centralized governing body",
                      "No one, access is automatic",
                      "A random selection of users",
                      "The majority of participating nodes",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Private blockchains are often used when organizations need to collaborate and share data with external parties in a trustless manner.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which type of blockchain is more likely to require participants to reveal their real-world identities?",
                    answers: [
                      "Public blockchains",
                      "Private blockchains",
                      "Both public and private blockchains",
                      "Neither public nor private blockchains",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Public blockchains are typically faster and more efficient than private blockchains due to their open nature.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In a public blockchain, what is the incentive for participants (nodes) to validate transactions and maintain the network?",
                    answers: [
                      "Direct financial rewards through the creation of new tokens",
                      "Membership fees collected from participants",
                      "Centralized decision-making power",
                      "Philanthropic motivations",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
          {
            name: "Public and Private Key Cryptography",
            description:
              "The Role of Keys in Blockchain\n" +
              "Keys play a fundamental role in blockchain technology. They are at the heart of security and authentication. Public and private keys enable the secure ownership and transfer of digital assets. Keys are used to create digital signatures, encrypt and decrypt data, and generate unique addresses for participants on the network.\n" +
              "\n" +
              "Generating Keys\n" +
              "Keys are generated using cryptographic algorithms. Public keys are created from private keys, and they work together as a pair. Private keys must be kept secret, as they grant control over associated digital assets, while public keys are shared openly for others to verify transactions and communicate securely.\n" +
              "\n" +
              "Public Key Infrastructure (PKI)\n" +
              "Public Key Infrastructure (PKI) is a framework for managing public keys, digital certificates, and encryption. In blockchain, PKI ensures the trustworthiness of public keys and enables secure communication. It is a vital component of blockchain security.\n" +
              "\n" +
              "Digital Signatures\n" +
              "Digital signatures are created using a private key to sign a message or transaction. These signatures verify the authenticity and integrity of the sender and the data. Public keys are used to verify these signatures, confirming that they were indeed signed by the private key holder.\n" +
              "\n" +
              "Address Generation\n" +
              "Unique addresses for blockchain participants are generated from public keys. These addresses serve as a pseudonymous identifier for users and are used in transactions. They provide a layer of privacy by not revealing the user's public key directly.\n" +
              "\n" +
              "Encryption and Decryption\n" +
              "Public and private keys also facilitate encryption and decryption. Data can be encrypted with a recipient's public key, ensuring only they can decrypt and access the information using their corresponding private key. This process adds an extra layer of security in blockchain communications and data storage.\n",
            steps: [
              {
                name: "The Role of Keys in Blockchain",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Fill the gaps: In blockchain, a BLANK key is used to decrypt it.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which type of cryptocurrency wallet is considered the most secure?",
                    answers: [
                      "Hot wallet",
                      "Cold wallet",
                      "Desktop wallet",
                      "Mobile wallet",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A BLANK wallet is a type of cryptocurrency wallet that is always connected to the internet and allows for more convenient transactions.",
                    correctAnswer: "hot",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a hardware wallet in the context of cryptocurrency?",
                    answers: [
                      "A physical device that stores the user's private keys offline",
                      "A digital wallet that is installed on a computer's hardware",
                      "A wallet provided by hardware manufacturers for their users",
                      "A term used for wallets that can only store hardware tokens",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Paper wallets, which contain a cryptocurrency address and a private key, are a form of cold storage.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of using a mobile wallet for cryptocurrencies?",
                    answers: [
                      "Higher security than any other types of wallets",
                      "Ability to conduct transactions quickly and on the go",
                      "They can store unlimited types of cryptocurrencies",
                      "Mobile wallets are less susceptible to hacking",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "When using a desktop wallet, it's important to ensure your computer has adequate BLANK to prevent unauthorized access and potential malware threats.",
                    correctAnswer: "security",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: A multi-signature wallet requires more than one private key to authorize a transaction, increasing security.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which feature is most important when considering a wallet for DeFi (Decentralized Finance) activities?",
                    answers: [
                      "Social media integration",
                      "Compatibility with various DeFi platforms",
                      "Built-in gaming features",
                      "The ability to store physical cash",
                    ],
                    correctAnswer: 1,
                  },
                ],
              },
              {
                name: "Backup and Recovery",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the most recommended way to back up your cryptocurrency wallet?",
                    answers: [
                      "Write down the seed phrase and store it in a secure location",
                      "Take a screenshot and save it on your phone",
                      "Memorize the seed phrase and do not write it down",
                      "Email the seed phrase to yourself for safekeeping",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: It's safe to store your backup seed phrase on a cloud storage service as long as it's encrypted.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Why is it important to perform regular backups of your cryptocurrency wallet?",
                    answers: [
                      "Wallet software updates can corrupt old backups",
                      "Cryptocurrencies can expire if not backed up",
                      "The value of cryptocurrencies increases with each backup",
                      "In case of hardware failure, theft, or loss, you can restore your funds",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: A single backup of your wallet is enough, regardless of how many transactions you've made since then.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "When backing up your wallet, it's crucial to keep multiple copies of your BLANK in different physical locations to prevent loss due to environmental damage or theft.",
                    correctAnswer: "backup seed phrase",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What should you do if you suspect your wallet backup has been compromised?",
                    answers: [
                      "Ignore the situation; it's probably a false alarm",
                      "Transfer your funds to a new wallet with a new seed phrase immediately",
                      "Wait to see if any funds are stolen before taking action",
                      "Share the seed phrase with a friend for advice",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: You should test your wallet backup periodically to ensure it will work when needed.",
                    correctAnswer: true,
                  },
                ],
              },
            ],
          },
          {
            name: "Security and Vulnerabilities",
            description:
              "Key Security Best Practices\n" +
              "Key security is paramount in blockchain. Best practices include safeguarding private keys by storing them offline in hardware wallets or secure storage, implementing strong access controls, and using secure password management. Regular backups of keys and keeping software and firmware updated are essential to maintain key security.\n" +
              "\n" +
              "Potential Vulnerabilities\n" +
              "Blockchain systems are not immune to vulnerabilities. Common risks include phishing attacks, where malicious actors trick users into revealing private keys or credentials. Smart contract vulnerabilities can lead to exploitation, and insecure key management can result in asset loss. Understanding and mitigating these potential vulnerabilities is crucial for maintaining a secure blockchain environment.\n" +
              "\n" +
              "The Future of Key Management\n" +
              "The future of key management in blockchain holds promise. Advancements in cryptographic techniques and key management solutions aim to enhance security. Techniques like multi-signature wallets and hardware security modules are becoming more widespread. As blockchain technology evolves, key management solutions will continue to adapt and provide more robust security measures to protect users and their digital assets.\n",
            steps: [
              {
                name: "Key Security Best Practices",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Writing down your private key on paper and storing it in a secure location is a bad security practice.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is considered a best practice for securely storing private keys?",
                    answers: [
                      "Storing private keys in a publicly accessible online document.",
                      "Sharing private keys with trusted friends for safekeeping.",
                      "Using a hardware wallet or secure offline storage.",
                      "Memorizing private keys to avoid writing them down.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Best practices for key security recommend avoiding the storage of private keys in easily accessible locations or using BLANK methods..",
                    correctAnswer: "Insecure",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Sharing private keys with others is a secure way to prevent key loss and facilitate transactions in a blockchain network.",
                    correctAnswer: "false",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is not a secure storage option for private keys?",
                    answers: [
                      "Hardware wallet.",
                      "Paper wallet",
                      "Online document.",
                      "Secure vault",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Encrypting your private key with a strong passphrase enhances its security and is considered a best practice.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Best practices for private key security also include regularly BLANK private keys and checking for any signs of unauthorized access or compromise.",
                    correctAnswer: "Monitoring",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary purpose of hardware wallets in ensuring private key security?",
                    answers: [
                      "To make private keys more easily accessible.",
                      "To encrypt private keys for added protection.",
                      "To keep private keys offline and secure from online threats.",
                      "To generate new private keys automatically.",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "Potential Vulnerabilities",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces, executes, or manages BLANK between parties.",
                    correctAnswer: "contracts or agreements",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What enables smart contracts to execute transactions without human intervention?",
                    answers: [
                      "Manual approval by blockchain developers",
                      "Predefined conditions coded within the contract by a third party",
                      "A consensus vote by all network participants",
                      "Periodic maintenance checks by network administrators",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts are legally binding in the same way traditional contracts are.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which blockchain platform is most renowned for its smart contract capabilities?",
                    answers: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contracts can be used to create decentralized applications, also known as BLANK, which operate on a blockchain network.",
                    correctAnswer: "DApps",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Once deployed, the code of a smart contract on the blockchain can be altered by the original creator at any time.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a potential benefit of using smart contracts over traditional contracts?",
                    answers: [
                      "They require more intermediaries",
                      "They are slower to execute",
                      "They reduce the likelihood of fraud and errors",
                      "They are more expensive to implement",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To interact with a smart contract, users typically need to send a transaction with the necessary BLANK to trigger the contract's functions.",
                    correctAnswer: "gas or fees",
                  },
                ],
              },
              {
                name: "Potential Vulnerabilities",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces, executes, or manages BLANK between parties.",
                    correctAnswer: "contracts or agreements",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What enables smart contracts to execute transactions without human intervention?",
                    answers: [
                      "Manual approval by blockchain developers",
                      "Predefined conditions coded within the contract",
                      "A consensus vote by all network participants",
                      "Periodic maintenance checks by network administrators",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts are legally binding in the same way traditional contracts are.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which blockchain platform is most renowned for its smart contract capabilities?",
                    answers: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contracts can be used to create decentralized applications, also known as BLANK, which operate on a blockchain network.",
                    correctAnswer: "DApps",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Once deployed, the code of a smart contract on the blockchain can be altered by the original creator at any time.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a potential benefit of using smart contracts over traditional contracts?",
                    answers: [
                      "They require more intermediaries",
                      "They are slower to execute",
                      "They reduce the likelihood of fraud and errors",
                      "They are more expensive to implement",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To interact with a smart contract, users typically need to send a transaction with the necessary BLANK to trigger the contract's functions.",
                    correctAnswer: "gas or fees",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Externally Owned Accounts (EOAs)",
        units: [
          {
            name: "Understanding EOAs",
            description:
              "Introduction to EOAs\n" +
              "Externally Owned Accounts (EOAs) are a fundamental concept in blockchain. They represent user-controlled accounts with a unique address. EOAs are different from smart contracts, as they are externally owned and controlled by individual users, making them a cornerstone for peer-to-peer transactions on the blockchain.\n" +
              "\n" +
              "EOA Transactions\n" +
              "EOAs are used for initiating transactions on the blockchain. Users can send and receive digital assets and interact with smart contracts through their EOAs. Transactions from EOAs are cryptographically signed to verify authenticity and ownership, ensuring secure and tamper-proof operations.\n" +
              "\n" +
              "EOA Use Cases\n" +
              "EOAs serve various use cases in the blockchain ecosystem. They are primarily used for managing and transferring digital assets, making payments, and participating in decentralized applications (dApps). EOAs are essential for users looking to engage in peer-to-peer transactions, secure their digital assets, and exercise control over their blockchain activities.\n",
            steps: [
              {
                name: "Introduction to EOAs",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary characteristic of an Externally Owned Account (EOA)?",
                    answers: [
                      "It is controlled by a private key",
                      "It is controlled by a public key",
                      "It requires multiple signatures for transactions",
                      "It is managed by a centralized authority",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "EOAs are typically managed by a centralized authority for increased security.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary role of the private key associated with an EOA?",
                    answers: [
                      "Verifying the balance of the account",
                      "Encrypting transaction data",
                      "Controlling the account and signing transactions",
                      "Acting as the public address of the account",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "The public key associated with an EOA is used for verifying the digital signatures on transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "In the context of EOAs, transactions require the digital signature of the BLANK key.",
                    correctAnswer: "Private",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary benefit of using an EOA for managing cryptocurrency funds?",
                    answers: [
                      "Reduced control over account security",
                      "Increased reliance on centralized authorities",
                      "Enhanced control and security through private key ownership",
                      "Faster transaction processing",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "EOA Transactions",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "EOAs are commonly used for transferring cryptocurrency between users and for signing transactions. They are controlled by the account holder's BLANK.",
                    correctAnswer: "private key",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "When an EOA initiates a cryptocurrency transfer, which key is used to sign the transaction for verification?",
                    answers: [
                      "Public key",
                      "Password",
                      "Private key",
                      "Assets",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To initiate a transaction from an EOA, the account holder must use their BLANK to sign the transaction.",
                    correctAnswer: "private key",
                  },
                  {
                    type: "true-false",
                    question:
                      "EOAs can initiate transactions by signing them with their public keys.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role does the public key associated with an EOA play in transactions?",
                    answers: [
                      "It serves as the recipient's address for cryptocurrency transfers.",
                      "It verifies the transaction by checking the balance.",
                      "It encrypts the transaction data for security.",
                      "It signs the transaction for verification.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "The assets associated with an EOA are used to sign transactions for security.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "EOA Use Cases",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: If you lose the private key, you lose access to your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If somebody gets your private key, they gain control of your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If you lose the private key associated with your EOA, you lose access to your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If somebody gains access to your private key, they gain control of your EOA account.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "EOAs provide users with control over their accounts through the use of their private keys, which must be kept BLANK to prevent unauthorized access.",
                    correctAnswer: "secure",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: EOAs are commonly used for executing smart contracts in blockchain networks.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question: "In which scenario is an EOA primarily used?",
                    answers: [
                      " For executing smart contracts",
                      " For generating public keys",
                      " For recording transactions and managing account balances",
                      " For managing centralized databases",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Smart Accounts",
        units: [
          {
            name: "What Are Smart Accounts?",
            description:
              "Smart Accounts are a transformative advancement in blockchain technology, offering a dynamic alternative to the traditional Externally Owned Accounts (EOAs) that have been the standard for Ethereum users. Where EOAs are limited to basic transactions and are entirely controlled by an individual's private keys, Smart Accounts introduce a new level of programmability and security to digital asset management.\n" +
              "\n" +
              "At the heart of Smart Accounts is the ability to execute complex logic and automate processes. This programmability opens up a world of possibilities, from setting up recurring payments and executing transactions based on specific conditions, to sophisticated interactions with other smart contracts. The automation capabilities of Smart Accounts stand in stark contrast to the static nature of EOAs, which require manual operation for each action.\n" +
              "\n" +
              "Security is another domain where Smart Accounts greatly surpass traditional EOAs. By incorporating advanced features such as multi-signature protocols, Smart Accounts require consensus among multiple authorized users before transactions can be processed. This multi-layered approach to security significantly reduces the risks associated with the single point of failure inherent in the private key model of EOAs.\n" +
              "\n" +
              "Furthermore, Smart Accounts are designed with modularity in mind, allowing users to enhance their accounts with additional functionalities. These can include setting transaction limits, creating account recovery mechanisms, and defining permission structures for different users. This level of customization ensures that Smart Accounts can adapt to the diverse needs and security requirements of their users, something EOAs cannot offer.\n" +
              "The interoperability of Smart Accounts with decentralized applications (dApps) is yet another advantage. They are built to interact directly with the burgeoning ecosystem of dApps on the Ethereum network, facilitating a seamless user experience. This direct interaction capability streamlines the process of engaging with various sectors of the decentralized web, from finance to gaming, without relying on intermediaries.\n" +
              "\n" +
              "In essence, Smart Accounts represent a leap forward in the way users interact with the Ethereum blockchain. They not only enhance the capabilities of traditional EOAs but also redefine the potential of digital asset management, providing users with a secure, flexible, and efficient means of navigating the decentralized landscape.\n",
            steps: [
              {
                name: "Smart Accounts",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Smart Accounts enhance the capabilities of traditional EOAs by:",
                    answers: [
                      "Allowing only cryptocurrency transactions.",
                      "Enabling custom logic and programmability.",
                      "Reducing transaction speeds.",
                      "Limiting the types of transactions.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart Accounts can implement a social recovery mechanism. You could get back your assets even if you lose your private key.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart Accounts enhance the capabilities of traditional EOAs by enabling BLANK.",
                    correctAnswer: "custom logic, transactions",
                  },
                ],
              },
              {
                name: "EOA Transactions",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "EOAs are commonly used for transferring cryptocurrency between users and for signing transactions. They are controlled by the account holder's BLANK.",
                    correctAnswer: "private key",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "When an EOA initiates a cryptocurrency transfer, which key is used to sign the transaction for verification?",
                    answers: [
                      "Public key",
                      "Password",
                      "Private key",
                      "Assets",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "To initiate a transaction from an EOA, the account holder must use their BLANK to sign the transaction.",
                    correctAnswer: "private key",
                  },
                  {
                    type: "true-false",
                    question:
                      "EOAs can initiate transactions by signing them with their public keys.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What role does the public key associated with an EOA play in transactions?",
                    answers: [
                      " It serves as the recipient's address for cryptocurrency transfers.",
                      " It verifies the transaction by checking the balance.",
                      " It encrypts the transaction data for security.",
                      " It signs the transaction for verification.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "The assets associated with an EOA are used to sign transactions for security.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "EOA Use Cases",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: If you lose the private key, you lose access to your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If somebody gets your private key, they gain control of your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If you lose the private key associated with your EOA, you lose access to your account.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If somebody gains access to your private key, they gain control of your EOA account.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "EOAs provide users with control over their accounts through the use of their private keys, which must be kept BLANK to prevent unauthorized access.",
                    correctAnswer: "secure",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: EOAs are commonly used for executing smart contracts in blockchain networks.",
                    correctAnswer: false,
                  },
                ],
              },
            ],
          },
          {
            name: "Understanding ERC-4337",
            description:
              "Introduction to ERC-4337\n" +
              "ERC-4337 is a groundbreaking Ethereum Improvement Proposal that introduces the concept of account abstraction to the Ethereum blockchain. This proposal aims to simplify the user experience by abstracting away the complexities of blockchain interactions, making it more accessible to everyday users. Account abstraction blurs the lines between contract accounts and Externally Owned Accounts (EOAs), allowing for more flexible and user-friendly account types.\n" +
              "\n" +
              "Account Abstraction Capabilities of ERC-4337\n" +
              "The account abstraction capabilities of ERC-4337 offer a transformative approach to how users interact with the Ethereum network. By allowing smart contract wallets to act with the same autonomy as EOAs, ERC-4337 enables a new class of accounts that can directly initiate transactions without the need for external triggers. This capability allows for the creation of accounts that can, for example, pay for their own transaction fees with tokens other than ETH, or even perform automatic transactions in response to certain events.\n" +
              "\n" +
              "One of the most significant enhancements ERC-4337 brings to the table is the ability for users to own accounts that can incorporate complex logic and operations, similar to smart contracts, while maintaining the ease of use associated with traditional EOAs. This means users can benefit from features like recovery options, batched transactions, and programmable payments without needing to understand the underlying smart contract code.\n" +
              "Moreover, ERC-4337 facilitates a more secure user experience. By leveraging the abstraction layer, users can implement customized security protocols within their accounts, such as multi-factor authentication or automated fraud detection mechanisms, which were previously difficult or impossible to achieve with standard EOAs.\n" +
              "\n" +
              "In conclusion, ERC-4337 represents a significant step forward in Ethereum's evolution, offering a more intuitive and powerful way for users to manage their digital identities and assets. Its account abstraction capabilities not only enhance the functionality and security of user accounts but also pave the way for a more inclusive and user-friendly blockchain ecosystem.\n",
            steps: [
              {
                name: "Step 1: Introduction to ERC-4337",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: ERC-4337 is a standard that enables account abstraction and smart contract accounts.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Account abstraction simplifies the user experience by allowing users to interact with the blockchain using familiar authentication methods like BLANK or Email addresses.",
                    answers: [
                      "Usernames",
                      "Private keys",
                      "Biometric authentication",
                      "Decentralized Identities",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: ERC-4337 requires an infrastructure-level change to be implemented on Ethereum.",
                    correctAnswer: false,
                  },
                ],
              },
            ],
          },
          {
            name: "The Impact of Smart Accounts on Web3 Adoption",
            description:
              "The impact of smart accounts on Web3 adoption is both substantial and multifaceted, with various factors influencing its specific outcomes. These considerations span several domains:\n" +
              "\n" +
              "Enhanced Security: Smart accounts, rooted in blockchain technology, bring robust security to Web3. Leveraging cryptographic principles and decentralized networks, they significantly reduce the risk of unauthorized access and tampering. This heightened security fosters increased user trust in Web3 applications.\n" +
              "\n" +
              "Efficient Automation: Smart accounts introduce automation into various processes and transactions. This automation streamlines complex tasks, minimizing the reliance on intermediaries and manual intervention. The result is more efficient and cost-effective operations, making Web3 platforms more attractive to both users and businesses.\n" +
              "\n" +
              "Interoperability: Smart accounts often function seamlessly across diverse blockchain networks, promoting interoperability. Users can access and manage assets and data across multiple platforms, broadening the reach of Web3 and encouraging greater adoption.\n" +
              "\n" +
              "Decentralized Finance (DeFi): Smart accounts are integral to the DeFi ecosystem, offering essential tools for lending, borrowing, trading, and yield farming. The growth of DeFi has been a major driver of Web3 adoption, as users seek decentralized financial services that provide transparency and control over their finances.\n" +
              "\n" +
              "Decentralized Applications (dApps): Many dApps rely on smart accounts for user authentication and facilitating interactions with blockchain networks. The increasing availability of dApps that offer innovative services and experiences attracts users to Web3 platforms.\n" +
              "\n" +
              "Tokenization: Smart accounts empower the creation and management of tokens representing a wide range of assets, from cryptocurrencies to real estate. Tokenization can make traditionally illiquid assets more accessible, potentially broadening Web3's audience.\n" +
              "\n" +
              "Global Accessibility: Web3 and smart accounts transcend geographic boundaries, providing access to financial and digital services for individuals and communities often excluded from traditional financial systems. This inclusivity can significantly drive adoption, particularly in underserved regions.\n" +
              "\n" +
              "Data Privacy and Ownership: Smart accounts place users in control of their data and digital identities, enhancing privacy and ownership of personal information. This autonomy can be a compelling reason for individuals to transition to Web3.\n" +
              "\n" +
              "Innovation and Competition: The dynamic nature of the Web3 ecosystem fosters continuous innovation and competition. Developers create new applications and services, resulting in a broader array of options and improved user experiences, further encouraging adoption.\n" +
              "\n" +
              "In summary, smart accounts are foundational to Web3 technology, and their impact on adoption is profound. They create a more secure, efficient, and user-centric digital environment, offering a range of advantages that attract a diverse audience to embrace Web3 and its decentralized principles.\n",
            steps: [
              {
                name: "Enhancing User Experience with Smart Accounts 1/2",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which feature of Smart Accounts could significantly improve user experience and drive Web3 adoption?",
                    answers: [
                      "Fixed gas prices",
                      "Mandatory private key management",
                      "Simplified transaction processes",
                      "Increased complexity of operations",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart Accounts promote mandatory private key management, making it a requirement for users.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "There are 2 main kinds of 'accounts' BLANK and Smart Contract Accounts. And smart contract wallets, specially enhanced after ERC4337 & account abstraction, are 100X better.",
                    correctAnswer: "EOA",
                  },
                ],
              },
              {
                name: "Enhancing User Experience with Smart Accounts 2/2",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart Accounts can only be used for financial transactions on the blockchain.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Thanks to Smart Accounts, users could make Gasless transactions and Pay gas in any token",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Thanks to Smart Account, users can set up BLANK to facilitate account recovery in case of a lost seed phrase",
                    answers: ["Social Recovery Mechanism", "login", "A Node"],
                    correctAnswer: "Social Recovery Mechanism",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Using Smart Account users can set custom spending limits",
                    correctAnswer: true,
                  },
                ],
              },
            ],
          },
          {
            name: " Building with Smart Accounts",
            description:
              "Building with smart accounts offers several compelling reasons for developers and businesses to leverage this technology. The primary motivations for adopting smart accounts include their inherent security, transparency, automation capabilities, decentralization, interoperability, and access to the growing realm of decentralized finance (DeFi) services. Smart accounts are also instrumental in tokenization, which can make traditionally illiquid assets more accessible to a broader audience.\n" +
              "\n" +
              "Their global reach transcending geographical boundaries, innovative use cases in fields ranging from supply chain management to gaming, and the emphasis on data ownership and privacy are further reasons to consider using smart accounts. In summary, smart accounts empower developers to create secure, efficient, and innovative blockchain-based applications, making them an attractive choice for a variety of use cases across industries.\n",
            steps: [
              {
                name: "Smart Accounts Infrastructure Requirements",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is a key infrastructure requirement for implementing Smart Accounts?",
                    answers: [
                      "Traditional banking systems",
                      "Centralized servers",
                      "Blockchain relayers and bundlers",
                      "Physical hardware modules",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart Accounts primarily rely on traditional banking systems for their operation.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "One of the key infrastructure requirements for implementing Smart Accounts is the use of blockchain BLANK and bundlers.",
                    correctAnswer: "relayers",
                  },
                ],
              },
              {
                name: "Smart Accounts and ERC4337",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "ERC-4337 is a standard that enables account abstraction and smart contract accounts.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Account abstraction simplifies the user experience by allowing users to interact with the blockchain using familiar authentication methods like BLANK or Email addresses.",
                    answers: [
                      "Usernames",
                      "Private keys",
                      "Biometric authentication",
                      "Decentralized Identities",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "ERC-4337 requires an infrastructure-level change to be implemented on Ethereum.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Which feature of Smart Accounts could significantly improve user experience and drive Web3 adoption?",
                    answers: [
                      "Fixed gas prices",
                      "Mandatory private key management",
                      "Simplified transaction processes",
                      "Increased complexity of operations",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts promote mandatory private key management, making it a requirement for users.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "There are 2 main kinds of 'accounts' BLANK and Smart Contract Accounts. And smart contract wallets, specially enhanced after ERC4337 & account abstraction, are 100X better.",
                    correctAnswer: "EOA",
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts can only be used for financial transactions on the blockchain.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "Thanks to Smart Accounts, users could make Gasless transactions and Pay gas in any token.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Thanks to Smart Account, users can set up BLANK to facilitate account recovery in case of a lost seed phrase.",
                    answers: [
                      "Biometric authentication",
                      "A secondary seed phrase",
                      "A new wallet address",
                      "Social Recovery Mechanism",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "Using Smart Accounts, users can set custom spending limits.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is a key infrastructure requirement for implementing Smart Accounts?",
                    answers: [
                      "Traditional banking systems",
                      "Centralized servers",
                      "Blockchain relayers and bundlers",
                      "Physical hardware modules",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts primarily rely on traditional banking systems for their operation.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "One of the key infrastructure requirements for implementing Smart Accounts is the use of blockchain BLANK and bundlers.",
                    answers: ["Blockchain relayers", "Blockchain", "Managers"],
                    correctAnswer: "Blockchain relayers",
                  },
                ],
              },
            ],
          },
          {
            name: " Security Considerations",
            description:
              "Security considerations for smart accounts, also known as externally owned accounts (EOAs), are paramount to ensure the safety and integrity of digital assets and transactions. The security of a smart account begins with the protection of the private key, as it represents the linchpin of security. Safeguarding the private key against unauthorized access or theft is essential, and options such as hardware wallets or secure offline storage solutions provide robust protection.\n" +
              "\n" +
              "Phishing attacks pose a constant threat, as malicious actors create deceptive websites and emails to trick users into revealing private keys or login credentials. It is imperative to verify the authenticity of websites and emails to prevent falling victim to such schemes.\n" +
              "\n" +
              "Additionally, for those interacting with smart contracts through their smart accounts, the thorough auditing of these contracts for vulnerabilities is critical. Unaudited or poorly coded smart contracts can be exploited, potentially leading to the loss of assets.\n" +
              "\n" +
              "Enhancing security further involves implementing two-factor authentication (2FA) wherever possible, adding an extra layer of protection. Vigilance in transaction verification to avoid accidental transfers and keeping wallet software and applications up to date is essential to address evolving security vulnerabilities.\n" +
              "\n" +
              "Preventing malware and viruses from compromising devices is a foundational security measure, requiring the use of reputable antivirus and anti-malware software. Smart account users are encouraged to opt for well-established and reputable wallets and services for account management while avoiding less-known or unverified providers.\n" +
              "\n" +
              "Maintaining secure backups of private keys and wallet recovery information in separate, secure locations ensures recovery options in the event of loss or device damage. For long-term asset storage, cold storage solutions, like hardware wallets or paper wallets, are recommended, as they keep private keys offline and minimize exposure to online threats.\n" +
              "\n" +
              "Secure network usage, a familiarity with the latest security practices and threats in the blockchain and cryptocurrency realm, and vigilance against social engineering attacks are integral aspects of smart account security. Additionally, devising an emergency plan in case of account compromise or lost private keys is a prudent precaution.\n" +
              "\n" +
              "Security is an ongoing and evolving process, demanding vigilance and regular updates to mitigate potential risks in the ever-changing landscape of blockchain and cryptocurrencies.\n",
            steps: [
              {
                name: "Security Advantages of Smart Accounts",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts inherently eliminate all security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts are immune to all potential security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts are by design more secure than EOA.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What are some of the security advantages of Smart Accounts compared to traditional blockchain transactions?",
                    answers: [
                      "They eliminate all security risks.",
                      "They provide enhanced control.",
                      "They are not customizable.",
                      "They can have social security mechanism.",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "Smart Accounts are immune to all potential security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "Addressing Security Challenges",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is a potential security challenge when using Smart Accounts?",
                    answers: [
                      "The immutable nature of smart contracts",
                      "The need for physical security tokens",
                      "The reliance on centralized authentication methods",
                      "The complexity of social recovery mechanisms",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How can the reliance on centralized authentication methods pose a security challenge for Smart Accounts?",
                    answers: [
                      "It enhances decentralization.",
                      "It simplifies user authentication.",
                      "It may create single points of failure and potential vulnerabilities.",
                      "It makes social recovery mechanisms more robust.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If someone steals your private key, it can for sure access your assets on your Smart Account",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Executing the same transaction from a Smart Account is more secure than using an EOA",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: If your Smart Account is audited, it should be more 'secure'",
                    correctAnswer: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Comparing EOAs and Smart Account ",
        units: [
          {
            name: "Differences and Use Cases",
            description:
              "In comparing Externally Owned Accounts (EOAs) with smart accounts, several key distinctions emerge. EOAs are typically controlled by individual users, affording them complete ownership of the associated private keys. This stands in contrast to smart accounts, which exhibit greater versatility by being controllable not only by individuals but also by programmable smart contracts.\n" +
              "\n" +
              "When it comes to interactions, EOAs primarily serve straightforward purposes, such as sending and receiving cryptocurrencies. Smart accounts, however, offer a broader range of possibilities, allowing for intricate automation and the execution of predefined logic. This difference in interaction capability is particularly noteworthy.\n" +
              "\n" +
              "Another significant distinction lies in autonomy. EOAs rely on users to initiate transactions and manual actions, while smart accounts have the capability to operate autonomously based on predefined rules and conditions. This autonomy makes smart accounts particularly well-suited for applications that require automation and decision-making without constant user intervention.\n" +
              "\n" +
              "In terms of flexibility, smart accounts shine. They offer extensive customization options, allowing them to be programmed for a wide array of tasks. This adaptability makes them suitable for various applications, ranging from DeFi and governance to supply chain management.\n" +
              "\n" +
              "In practical use cases, EOAs are commonly employed in personal transactions, wallet management, and user authentication in various applications and decentralized apps (dApps). On the other hand, smart accounts find relevance in more complex scenarios that require automation, such as recurring payments, subscription services, and smart locks. They are integral in DeFi platforms, supporting lending, yield farming, and other financial operations. Smart accounts also play a key role in governance within decentralized autonomous organizations (DAOs), allowing participants to vote and make decisions. Furthermore, they contribute to supply chain management by facilitating the tracking of goods and assets, ensuring transparency and security.\n" +
              "\n" +
              "In summary, while EOAs are well-suited for basic cryptocurrency transactions and wallet management, smart accounts offer enhanced versatility and automation capabilities, making them suitable for a broader range of use cases, including DeFi, governance, and supply chain management.\n",
            steps: [
              {
                name: "EOA vs. Smart Account",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the difference between an Externally Owned Account (EOA) and a Smart Account?",
                    answers: [
                      "EOAs are always controlled by private keys, while Smart Contracts can be controlled by the logic within the contract itself.",
                      "Smart Contracts can hold and execute complex logic, while EOAs cannot.",
                      "EOAs can directly initiate transactions, while Smart Contracts require a triggering transaction from an EOA or another smart contract.",
                      "Smart Contracts can interact with other contracts and execute complex operations, while EOAs are limited to sending transactions and managing balances.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Externally Owned Accounts (EOAs) are always controlled by BLANK, while Smart Contracts can be controlled by the logic within the contract itself.",
                    correctAnswer: "Public keys",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: EOAs can directly initiate transactions on the blockchain, while Smart Contracts require a triggering transaction from an EOA or another smart contract.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart Contracts can hold and execute BLANK logic, while EOAs cannot.",
                    answers: ["arbitrary", "automomus", "free"],
                    correctAnswer: "arbitrary",
                  },
                ],
              },
              {
                name: "When to Use EOAs",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "EOAs are typically used for individual account management and transactions, where user control and BLANK are essential.",
                    correctAnswer: "direct interaction with the blockchain",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: EOAs' private key can be stored in a hardware wallet.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: EOAs can be controlled by more than 1 private key.",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "When to Use Smart Contracts",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Smart contracts are suitable for scenarios where you need automated and trustless execution of actions based on predefined rules. They are particularly useful in cases involving multiple parties and where BLANK are required.",
                    answers: [
                      "programmable logic or complex conditions",
                      "no logic",
                      "programmable condition",
                    ],
                    correctAnswer: "programmable logic or complex conditions",
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Smart contracts can be used for securing assets with custom logic.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In what scenarios are Smart Contracts particularly useful?",
                    answers: [
                      "When the outcome needs to be randomized",
                      "When centralized control is required",
                      "When minimal security is a priority",
                      "When programmable logic is required",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Safe Smart Account ",
        units: [
          {
            name: "What is Safe",
            description:
              "Safe, formerly known as Gnosis Safe, represents a paradigm shift in digital asset management on blockchain networks. It is a platform that transcends the traditional wallet concept, offering a secure and versatile framework for individuals and organizations to manage their cryptocurrencies and interact with decentralized applications (dApps). At its core, Safe is engineered to mitigate the risks associated with single-user accounts by implementing a multi-signature scheme that necessitates multiple confirmations for transaction execution, thereby establishing a robust security protocol.\n" +
              "The Safe ecosystem is a rich tapestry of interconnected components that together create a robust environment for asset management and interaction with the decentralized web. The cornerstone of this ecosystem is the Safe Smart Accounts, which offer a secure and modular approach to asset management. These accounts are designed to be extensible, allowing for\n" +
              "the addition of Safe Modules that provide additional functionalities and customization options to meet the diverse needs of users.\n" +
              "\n" +
              "Within the ecosystem, transactions take on a new level of sophistication. Users can execute batched transactions, enabling more complex operations and smart contract interactions while maintaining stringent security standards. This is facilitated by the underlying Safe Contracts, which are open-source, audited smart contracts that provide the secure foundation for all operations within the Safe environment.\n" +
              "\n" +
              "User experience is a focal point in the Safe ecosystem, with intuitive interfaces available for both web and mobile platforms. These interfaces are crafted to be user-friendly, ensuring that managing digital assets is straightforward and accessible, without compromising on the security that is synonymous with Safe.\n" +
              "\n" +
              "Complementing the core functionalities are Safe Apps, which are integrations of third-party decentralized applications within the Safe interface. This allows users to interact with a wide range of services directly through their Safe account, fostering a seamless and integrated user experience.\n" +
              "\n" +
              "Lastly, the governance of the Safe ecosystem is designed to be democratic and community-centric. It encourages active participation from its users in the decision-making process, ensuring that the ecosystem evolves in a direction that is aligned with the collective will and best interests of its community.\n" +
              "In essence, the Safe ecosystem represents a significant advancement in the way digital assets are managed, offering a secure, adaptable, and user-focused platform that stands as a pillar of the decentralized finance landscape.\n" +
              "\n",
            steps: [
              {
                name: "Safe Introduction",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "How could you describe a Safe Smart Account?",
                    answers: [
                      "Safe Smart Account is a regular Ethereum account that can only store Ether and cannot execute smart contracts.",
                      "Safe Smart Account is a type of hardware wallet specifically designed for secure storage of digital assets.",
                      "Safe Smart Account is an account type that allows anonymous transactions without any trace on the blockchain.",
                      "Safe Smart Account is a blockchain account with enhanced security and features, often used for managing digital assets and executing smart contracts in a secure and customizable manner.",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not Safe?",
                    answers: [
                      "A multi-sig Wallet",
                      "A Modular Account Abstraction stack for developers",
                      "An EOA account",
                      "A Smart Wallet",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question: "Is Safe a multi-sig wallet?",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question: "Is Safe just a multi-sig Wallet?",
                    correctAnswer: false,
                  },
                ],
              },
              {
                name: "Safe Ecosystem",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What are the core components of the Safe ecosystem?",
                    answers: [
                      "Safe Wallets, Safe Transactions, Safe Blocks",
                      "Safe Modules, Safe Guards, Safe Protocols",
                      "Safe App, Safe Code, Safe Security",
                      "Safe{Core} Protocol, Safe{Core} AA SDK, Safe{Core} API",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is not a core component of the Safe ecosystem?",
                    answers: [
                      "Safe Blocks",
                      "Safe Modules",
                      "Safe{Core} Protocol",
                      "Safe{Core} AA SDK",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is a component of the Safe ecosystem?",
                    answers: [
                      "Safe{Core} Execution",
                      "Safe{Core} Transaction",
                      "Safe{Core} Protocol",
                      "Safe{Core} Block",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How do Safe Modules and Safe Guards contribute to the ecosystem?",
                    answers: [
                      "Allow to customize and extend Safe's functionality",
                      "Allow to restrict Safe’s functionality",
                      "Allow to implement moonwalking in Safe transactions.",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
          {
            name: "What is Safe {Core} Protocol",
            description:
              "Understanding the Safe {Core} Protocol\n" +
              "\n" +
              "The Safe {Core} Protocol is the underlying framework that powers the Safe ecosystem, a platform renowned for its robust security features and its flexible management of digital assets on blockchain networks. This protocol is the bedrock upon which the Safe Smart Accounts and the entire suite of Safe tools are built. It defines the fundamental operations, security mechanisms, and the architectural design that enables the creation and management of multi-signature accounts. These accounts are essential for executing transactions that require consensus among multiple parties, thereby ensuring a higher level of security compared to traditional single-owner accounts.\n" +
              "\n" +
              "The Role of Safe Factory\n" +
              "\n" +
              "The Safe Factory is a critical component of the Safe ecosystem. It is a smart contract that facilitates the creation of new Safe Smart Accounts. By using the Safe Factory, users can deploy new accounts quickly and efficiently, with all the necessary security parameters already in place. The factory ensures that each new account adheres to the strict security standards set by the Safe {Core} Protocol, providing peace of mind for users knowing that their assets are protected by a consistent and reliable security framework.\n" +
              "\n" +
              "Utilizing a Safe Smart Account\n" +
              "\n" +
              "Using a Safe Smart Account is a straightforward process that offers users a secure way to manage their digital assets. Once an account is created through the Safe Factory, users can add multiple owners to the account and set the required threshold of signatures needed to authorize transactions. This multi-signature feature is at the heart of the account's security, ensuring that no single point of failure can compromise the assets. Users can interact with decentralized applications, execute transactions, and manage their funds with the assurance that each action requires consensus, thereby providing a robust shield against unauthorized access and potential security breaches.\n" +
              "\n" +
              "In conclusion, the Safe {Core} Protocol is the foundation of a secure, flexible, and user-centric ecosystem that is revolutionizing the way we interact with digital assets on the blockchain. Through the Safe Factory and the use of Safe Smart Accounts, the protocol offers a secure and efficient framework for asset management that is trusted by users and organizations worldwide.\n" +
              "\n",
            steps: [
              {
                name: "Safe {Core} Protocol and Protocol Kit",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary role of Safe {Core} Protocol?",
                    answers: [
                      "Storing cryptocurrency securely",
                      "Making smart accounts secure, portable, and composable",
                      "Regulating blockchain transactions",
                      "Enabling multi-signature transactions",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not the purpose of the Protocol Kit?",
                    answers: [
                      " Managing Safe accounts",
                      " Enabling transaction execution",
                      "Creating Safe accounts",
                      "Providing gasless transactions",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In the context of the protocol kit, choose the correct option",
                    answers: [
                      "There are two versions of the Safe contracts: Safe.sol that does not trigger events to save gas and SafeL2.sol.",
                      "There is just one Safe.sol.",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
              {
                name: "About Safe Factory",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the Safe Factory?",
                    answers: [
                      "The Safe Factory is a smart contract that facilitates the creation of new Safe accounts.",
                      "The Safe Factory is an assembly plant where physical safes or vaults are manufactured for secure storage of valuables.",
                      "The Safe Factory is a smart contract deploying Safe Modules",
                      "The Safe Factory is a smart contract that manages Safe transactions to transfer tokens",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "The Safe Factory deploys Proxy smart contracts having the same smart contract logic with different BLANK?",
                    answers: ["Storage", "Memory", "Logic", "Call"],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Does the proxy pattern affect the Safe{Core} Protocol's performance?",
                    answers: [
                      "No, The proxy pattern improves the contract upgrade process, reducing gas costs.",
                      "No, The proxy pattern allows the Safe{Core} Protocol to adapt to changing requirements easily.",
                      "Yes, The proxy pattern enhances security by separating contract logic from storage.",
                      "Yes, The proxy pattern may limit the Safe{Core} Protocol's ability to perform complex actions, potentially slowing it down",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "Using a Safe Smart Account",
                questions: [
                  {
                    type: "interaction-safe-deploy",
                    question:
                      "Do you want to deploy your first Safe Smart Account?",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-transfer",
                    question:
                      "Let's make your first transaction with your Safe",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-addSigner",
                    question: "Let's add a new Safe owner",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-transfer",
                    question: "Do you want to try to make a transfer now?",
                    answers: [],
                    correctAnswer: 1,
                  },
                ],
              },
            ],
          },
          {
            name: "Safe {Core} AA SDK",
            description:
              "Introduction to Safe {Core} AA SDK\n" +
              "The Safe {Core} AA SDK, standing for Account Abstraction Software Development Kit, is a comprehensive toolkit designed for developers looking to integrate the robust features of the Safe {Core} Protocol into their applications. This SDK simplifies the process of interacting with the Safe infrastructure, allowing for the seamless creation, management, and execution of transactions within Safe Smart Accounts. It serves as a bridge between the complex underlying blockchain technology and the developer's interface, ensuring that the robust security and flexibility of the Safe ecosystem are easily accessible.\n" +
              "\n" +
              "Features of Safe{Core} AA SDK Kits\n" +
              "The Safe {Core} AA SDK Kits are modular sets of tools within the SDK that cater to various aspects of the Safe ecosystem. These kits provide developers with pre-built functionalities, such as account creation, transaction management, and signature collection. By utilizing these kits, developers can rapidly deploy Safe features in their applications without needing to build complex infrastructure from scratch. Each kit is designed to be interoperable, ensuring that developers can mix and match components to suit their specific needs while maintaining the integrity and security of the Safe {Core} Protocol.\n" +
              "\n" +
              "The Functionality of Safe Factory within the SDK\n" +
              "The Safe Factory is an integral part of the Safe {Core} AA SDK. It is a component that allows developers to programmatically generate new Safe Smart Accounts for their users. The Safe Factory automates the deployment process, ensuring that each new account is instantiated with the correct configuration and adheres to the security standards of the Safe {Core} Protocol. This automation is crucial for developers who aim to provide a consistent and secure user experience at scale, as it eliminates the potential for human error during the account creation process.\n" +
              "\n" +
              "In essence, the Safe {Core} AA SDK is a powerful toolset that empowers developers to harness the security and flexibility of the Safe {Core} Protocol within their own applications. It provides a streamlined approach to account management and transaction execution, all while upholding the high-security standards that the Safe ecosystem is known for. Whether for individual use or enterprise solutions, the Safe {Core} AA SDK is a cornerstone for building secure and efficient blockchain-based applications.\n",
            steps: [
              {
                name: "What is Safe {Core} AA SDK",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary purpose of Safe{Core} AA SDK?",
                    answers: [
                      "Creating social media accounts",
                      "Simplifying the use of smart contract accounts",
                      "Enhancing gaming experiences",
                      "Regulating cryptocurrency markets",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is not a primary purpose of Safe{Core} AA SDK?",
                    answers: [
                      "Simplifying the use of smart contract accounts",
                      "Deploying new Safe Accounts",
                      "Creates externally owned accounts",
                      "Buy cryptocurrencies with fiat money",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question: "Is the API kit part of the Safe{Core} AA SDK?",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not part of Safe{Core} AA SDK?",
                    answers: [
                      "Protocol Kit",
                      "Relay Kit",
                      "Onramp Kit",
                      "Smart contracts Kit",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Safe{Core} AA SDK Kit",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which kit is responsible for creating externally owned accounts?",
                    answers: [
                      "Protocol Kit",
                      "Relay Kit",
                      "Auth Kit",
                      "Onramp Kit",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The BLANK kit is responsible for relaying Safe transactions and enabling third-party sponsorship.",
                    correctAnswer: "Protocol Kit",
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The BLANK kit is responsible for managing on and off ramp.",
                    correctAnswer: "Onramp Kit",
                  },
                ],
              },
              {
                name: "Develop with Safe",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "In the context of the ProtocolKit, which is the correct option?",
                    answers: [
                      "const response = await safeSdkOwner2.signTransactionHash(safeTxHash) const signature = await safeService.confirmTransaction(safeTxHash, response.data)",
                      "const signature = await safeService.confirmTransaction(safeTxHash, response.data) const response = await safeSdkOwner2.signTransactionHash(safeTxHash)",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In the context of the Auth Kit, which option is correct?",
                    answers: [
                      "const authKitSignData = await web3AuthModalPack.signIn()",
                      "const authKitSignData = web3AuthModalPack.signIn()",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "In the context of the Relay Kit, is 'const propose = await relayKit.proposeRelayedTransaction(signedSafeTransaction, safeSDK)' correct?",
                    answers: ["yes", "no"],
                    correctAnswer: 1,
                  },
                ],
              },
            ],
          },
          {
            name: "What is Safe {Core} API",
            description:
              "Introduction to Safe {Core} API\n" +
              "The Safe {Core} API is a pivotal element of the Safe infrastructure, providing a standardized interface for interacting with the Safe {Core} Protocol. It is designed to offer developers and users a set of accessible endpoints for managing Safe Smart Accounts and executing transactions within the Safe ecosystem. The API abstracts the complexity of blockchain interactions, making it easier for services to integrate Safe's functionalities, such as wallet creation, transaction initiation, and multi-signature operations, into their platforms.\n" +
              "\n" +
              "Capabilities of the Safe {Core} API\n" +
              "The Safe {Core} API is a versatile tool that serves as the backbone for various operations within the Safe ecosystem. It allows for the retrieval of crucial data regarding Safe Smart Accounts, including their transaction history, balances, and settings. Additionally, the API facilitates the submission and execution of transactions, providing a reliable way to interact with the blockchain while maintaining the security standards of the Safe {Core} Protocol. This level of accessibility and control is essential for developers who require direct and efficient communication with the Safe infrastructure.\n" +
              "III. The Safe Transaction Service\n" +
              "\n" +
              "The Safe Transaction Service is an integral service that works in tandem with the Safe {Core} API. It is responsible for the coordination and relay of multi-signature transactions within the Safe ecosystem. The service tracks pending transactions, collects signatures from designated signatories, and ensures that transactions are executed once the required threshold of approvals is met. This service is crucial for maintaining the integrity of the multi-signature process, providing a streamlined and secure transaction flow for Safe Smart Accounts.\n" +
              "\n" +
              "In summary, the Safe {Core} API, in conjunction with the Safe Transaction Service, forms a comprehensive suite of tools for developers and users to interact with the Safe ecosystem. It simplifies the process of managing digital assets on the blockchain, ensuring that the robust security features of the Safe {Core} Protocol are accessible and easy to integrate into third-party services and applications. Through these tools, the Safe ecosystem continues to provide a secure and user-friendly platform for digital asset management and decentralized application interaction.\n",
            steps: [
              {
                name: "Safe{Core} API",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary purpose of the Safe{Core} API?",
                    answers: [
                      "Providing gaming instructions",
                      "Offering information about Safe accounts",
                      "Enabling social media interactions",
                      "Regulating digital asset ownership",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What kind of data can developers access through the Safe{Core} API?",
                    answers: [
                      "Weather forecasts",
                      "Social media posts",
                      "Information related to Safe accounts and transactions",
                      "Cryptocurrency prices",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Does the Safe{Core} API provide valuable data about Safe accounts and transactions?",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Safe Transaction Service",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "In which activity the Safe Transaction Service is not involved?",
                    answers: [
                      "Keeping track of Safe Transactions",
                      "Collecting off-chain signatures",
                      "Informing owners about pending transactions",
                      "Executing Smart contract transactions",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "The Safe Transaction Service is responsible for BLANK of Safe Transactions.",
                    answers: ["Tracking", "Managing", "Executing"],
                    correctAnswer: "Tracking",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How does the Safe Transaction Service improve user interactions?",
                    answers: [
                      "The Safe Transaction Service enhances user interactions by allowing users to manage multiple transactions in a single batch, improving efficiency and reducing transaction costs.",
                      "The Safe Transaction Service introduces unnecessary complexity to user interactions by collecting signatures off-chain",
                      "The Safe Transaction Service often results in higher transaction fees, making user interactions costlier compared to traditional methods",
                      "The Safe Transaction Service offers limited flexibility, hindering users from customizing their interactions with the blockchain",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
          {
            name: "Safe Modules",
            description:
              "Introduction to Safe Modules\n" +
              "Safe Modules are a pivotal innovation within the Safe ecosystem, designed to augment the capabilities of Safe Smart Accounts. These modules are essentially smart contracts that, once attached to a Safe Smart Account, extend its functionality beyond the standard features. They enable users to tailor the security and operational aspects of their accounts to fit specific needs and use cases. The modular architecture not only enhances flexibility but also ensures that the core security framework of the Safe Smart Account remains uncompromised.\n" +
              "\n" +
              "Using Safe Modules\n" +
              "Integrating Safe Modules into a Safe Smart Account is a process that offers users a customizable experience. Users can choose from a variety of modules, each providing different features such as daily transaction limits, whitelisted addresses, or even more complex operations like interaction with other decentralized finance (DeFi) protocols.\n" +
              "\n" +
              "To use a Safe Module, a user must first select the appropriate module that suits their requirements. The chosen module is then attached to their Safe Smart Account through a transaction that is confirmed by the account's existing signatories, adhering to the multi-signature protocol. Once attached, the module is ready for use, and the user can benefit from the additional functionalities it provides.\n" +
              "\n" +
              "The flexibility of Safe Modules is a testament to the adaptability of the Safe ecosystem, allowing users to create a highly personalized and secure environment for managing their digital assets. Whether for personal use or within an enterprise setting, Safe Modules offer a powerful way to enhance the utility of Safe Smart Accounts without sacrificing the foundational security that the Safe ecosystem is known for.\n",
            steps: [
              {
                name: "Safe Modules Introduction",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary function of Safe Modules?",
                    answers: [
                      "Extending the Safe's functionality",
                      "Regulating blockchain transactions",
                      "Auditing smart contracts",
                      "Enhancing social media interactions",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Safe Modules can be added or removed by interacting with the BLANK.",
                    answers: ["Module Manager", "Manager", "Guard"],
                    correctAnswer: "Module Manager",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What security considerations should be taken into account when using Safe Modules?",
                    answers: [
                      "Safe Modules are inherently secure and do not require any specific security measures.",
                      "It is unnecessary to audit or test Safe Modules for vulnerabilities as they are automatically protected against all threats.",
                      "Security considerations for Safe Modules should focus on factors such as code audits, regular updates, and ensuring that third-party modules are trusted and free from vulnerabilities.",
                      "Security for Safe Modules primarily involves relying on proprietary security software without the need for external audits or code reviews.",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "Using Safe Modules",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which is the correct method to add a Module interacting with the Module Manager?",
                    answers: [
                      "enableModule",
                      "addModule",
                      "insertModule",
                      "removeModule",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "How to execute a transaction from a module? BLANKTransactionFromModule",
                    answers: ["exec", "send", "test"],
                    correctAnswer: "exec",
                  },
                  {
                    type: "multiple-choice",
                    question: "Choose the correct one",
                    answers: [
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Module",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Module",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
          {
            name: "Safe Guards",
            description:
              "Introduction to Safe Guards\n" +
              "Safe Guards are an integral component of the Safe ecosystem, designed to provide an additional layer of security and control over transactions within Safe Smart Accounts. These are specialized smart contracts that act as checkpoints, enforcing rules and verifying conditions before and after transaction execution. The primary function of Safe Guards is to ensure that all actions taken through a Safe Smart Account adhere to a predefined set of protocols, thereby safeguarding assets against unauthorized or erroneous transactions.\n" +
              "\n" +
              "Safe Guards operate on the principle of trust but verify, allowing account owners to set up custom security parameters that align with their risk management strategies. For instance, a Safe Guard could restrict transactions to certain whitelisted addresses, limit the value of transactions over a specific period, or require additional confirmations under certain conditions. These controls help in mitigating risks associated with digital asset management, especially in a decentralized environment where traditional oversight mechanisms may not be present.\n" +
              "\n" +
              "The implementation of Safe Guards is a testament to the Safe ecosystem's commitment to providing a secure, flexible, and user-centric platform for digital asset management. By enabling users to define and enforce their security measures, Safe Guards empower users with peace of mind, knowing that their assets are protected by a robust and customizable security infrastructure.\n",
            steps: [
              {
                name: "Introduction to Safe Guards",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Why are Safe Guards introduced in Safe Contracts?",
                    answers: [
                      "To reduce transaction fees",
                      "To restrict the standard `n`-out-of-`m` signature scheme",
                      "To enhance transaction security",
                      "To promote cryptocurrency mining",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Safe Guards can be added or removed by interacting with the BLANK.",
                    correctAnswer: "Guard Manager",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What security considerations should be taken when adding a Guard to your Safe?",
                    answers: [
                      "There are no security considerations when adding a Guard to your Safe, as Guards are always perfectly secure.",
                      "Guards do not have the power to block Safe transaction execution; their role is purely advisory and has no impact on transaction security.",
                      "A broken Guard cannot cause a denial of service for a Safe, as the system automatically bypasses malfunctioning Guards.",
                      "A Safe Guard does have full power to block Safe transaction execution, and a broken Guard can cause a denial of service for a Safe.",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Using Safe Modules",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which is the correct method to add a Module interacting with the Module Manager?",
                    answers: [
                      "enableModule",
                      "addModule",
                      "insertModule",
                      "removeModule",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "How to execute a transaction from a module? BLANKTransactionFromModule",
                    answers: ["exec", "send", "test"],
                    correctAnswer: "exec",
                  },
                  {
                    type: "multiple-choice",
                    question: "Choose the correct one",
                    answers: [
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Module",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Module",
                    ],
                    correctAnswer: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Scaling Ethereum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna dignissim, pulvinar quam quis, cursus orci. Pellentesque blandit tellus a neque tincidunt placerat. Sed lacinia eleifend neque vitae interdum. Nullam at leo justo. Pellentesque sollicitudin tortor velit, vitae imperdiet lectus malesuada sit amet. Ut ligula ligula, volutpat et tortor ut, aliquet efficitur eros. Sed condimentum fermentum vulputate. Donec eu eros maximus, scelerisque tellus sit amet, vulputate turpis. Fusce mattis odio id blandit maximus. Morbi quis ultricies lacus. Nam ullamcorper nunc erat, in rhoncus lectus scelerisque quis.",
    image: "/polygon.png",
    nftImage: "/course-3-nft.png",
    sections: [
      {
        name: "Scaling L1",
        units: [
          {
            name: "Ethereum Scalability",
            description:
              "Ethereum, as a decentralized platform, has revolutionized the way we think about digital transactions and smart contracts. However, its scalability has been a significant challenge. The network can only handle around 15 transactions per second (tps), which is far from sufficient for global finance and decentralized applications (dApps) that aspire to cater to millions of users. This limitation leads to network congestion, slow transaction times, and high gas fees, which are the costs associated with executing transactions and smart contracts on the Ethereum blockchain.\n" +
              "\n" +
              "The core of the scalability problem lies in the blockchain trilemma, which posits that a blockchain system can only at most have two of the following three properties: decentralization, security, and scalability. Ethereum has so far prioritized security and decentralization over scalability, which has resulted in the network's limited throughput.\n" +
              "\n" +
              "To address these issues, several solutions have been proposed and implemented. One of the main strategies is Layer 2 scaling solutions, which operate on top of the Ethereum blockchain (Layer 1) and handle transactions off-chain. These solutions include state channels, sidechains, plasma chains, and rollups. Each of these solutions approaches the scaling challenge differently, with various trade-offs between speed, cost, and complexity.",
            steps: [
              {
                name: "Layer 1s and blockchain trilemma",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "Layer 1 blockchains, such as Ethereum and Bitcoin, serve as the base blockchains for various layer 2 networks.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What desirable properties does the blockchain trilemma address, and how does it relate to the concept of layer 2 networks?",
                    answers: [
                      " Scalability, security, and decentralization; the blockchain trilemma suggests that a blockchain can achieve all three properties without trade-offs.",
                      " Decentralization, security, and scalability; the blockchain trilemma suggests that a simple blockchain architecture can only achieve two out of these three properties, and layer 2 networks aim to improve scalability without sacrificing security or decentralization.",
                      " Speed, centralization, and accessibility; the blockchain trilemma emphasizes the need for increased speed and accessibility at the cost of decentralization.",
                      " Efficiency, simplicity, and complexity; layer 2 networks aim to add complexity to blockchain systems.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary goal of layer 2 solutions in the context of Ethereum scalability?",
                    answers: [
                      " To replace layer 1 blockchains like Ethereum.",
                      " To make the blockchain more complex.",
                      " To reduce transaction throughput.",
                      " To increase transaction throughput (higher transactions per second) without sacrificing decentralization or security.",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Layer 2 Networks",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is Layer 1 (L1) in the context of Ethereum, and what role does it play in the Ethereum ecosystem?",
                    answers: [
                      " Layer 1 is a layer of smart contracts built on top of Ethereum.",
                      " Layer 1 is the base blockchain and the foundation for Layer 2 solutions.",
                      " Layer 1 refers to off-chain scaling solutions for Ethereum.",
                      " Layer 1 is a separate blockchain entirely unrelated to Ethereum.",
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: The blockchain trilemma suggests that a blockchain can simultaneously achieve decentralization, security, and scalability without trade-offs.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How many transactions per second (TPS) can Ethereum Mainnet (Layer 1) process, and why can this limitation lead to congestion and higher transaction fees?",
                    answers: [
                      " Ethereum Mainnet can process thousands of TPS, preventing congestion.",
                      " Ethereum Mainnet can process hundreds of TPS, leading to lower transaction fees.",
                      " Ethereum Mainnet can process less than hundreds TPS, which can cause congestion and high fees.",
                      " Ethereum Mainnet can process an unlimited number of TPS, ensuring low fees at all times.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: The primary goal of Layer 2 (L2) solutions is to increase transaction throughput without compromising decentralization or security.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "How do Layer 2 projects rely on Ethereum for data availability?",
                    answers: [
                      " Layer 2 projects store the transaction data on Layer 1.",
                      " Layer 2 projects operate entirely independently of Ethereum.",
                      " Layer 2 projects ignore data availability, focusing on speed.",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "Can you explain the difference between Layer 1 and Layer 2 in the context of Ethereum, and provide examples of Layer 2 solutions?",
                    answers: [
                      " Layer 1 is a faster version of Ethereum, and Layer 2 includes all Ethereum smart contracts.",
                      " Layer 1 is a term used in Ethereum but doesn't have real-world applications, while Layer 2 is where all transactions occur.",
                      " Layer 1 is the foundational Ethereum blockchain, and Layer 2 is a separate blockchain extending Ethereum. Examples of Layer 2 include 'rollups.'",
                      " Layer 1 and Layer 2 are interchangeable terms in the Ethereum ecosystem, describing the same concept.",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
            ],
          },
          {
            name: "How to scale Ethereum",
            description:
              "Ethereum's scalability is a pressing issue as the platform struggles to handle an increasing number of transactions. The network's limited capacity to process transactions quickly and cheaply has led to a search for solutions that can expand its throughput without compromising on security or decentralization.\n" +
              "\n" +
              "Layer 1 Scaling\n" +
              "\n" +
              "Layer 1 scaling solutions involve changes to the base protocol to increase the blockchain's capacity. This can include increasing the block size to hold more transactions or improving the efficiency of the consensus mechanism. Ethereum's transition to Ethereum 2.0 is a part of its Layer 1 scaling strategy, which includes the introduction of shard chains to spread the network's load across 64 new chains and the switch to a proof-of-stake consensus mechanism, which is expected to improve throughput and energy efficiency.\n" +
              "\n" +
              "Layer 2 Scaling\n" +
              "\n" +
              "Layer 2 scaling solutions are built on top of the Ethereum blockchain and are designed to take the burden off the main chain. These solutions include:\n" +
              "\n" +
              "State Channels: These are two-way communication channels between parties that allow them to conduct transactions with each other directly and without the need for blockchain confirmations, except for the initial and final transactions. This is ideal for applications with high transaction volumes between a few users.\n" +
              "\n" +
              "Sidechains: Independent blockchains that run parallel to the Ethereum main chain, sidechains have their own consensus mechanisms and block parameters. They are connected to Ethereum via two-way pegs, allowing assets to be moved between the sidechains and the main chain.\n" +
              "\n" +
              "Plasma: A framework for building scalable applications, Plasma creates an unlimited number of child chains, each of which can host a large number of transactions. Periodically, the root of the transaction tree from these child chains is committed to the main Ethereum blockchain.\n" +
              "\n" +
              "Rollups: Rollups perform transaction execution outside the main chain (off-chain) but post transaction data on-chain. They come in two types: Optimistic Rollups and ZK Rollups. Optimistic Rollups assume transactions are valid unless proven otherwise, while ZK Rollups use cryptographic proofs to validate transactions without revealing any underlying data.\n" +
              "\n" +
              "Sharding\n" +
              "\n" +
              "Sharding is a process that breaks the main blockchain into smaller partitions, known as shards, each capable of processing transactions and smart contracts independently of one another. This parallel processing capability significantly increases the network's overall capacity. Ethereum 2.0 plans to implement sharding to improve its scalability.\n" +
              "\n" +
              "Hybrid Solutions\n" +
              "\n" +
              "Some projects are exploring hybrid solutions that combine Layer 1 and Layer 2 scaling. These solutions use Layer 1 for security and decentralization while leveraging Layer 2 for high throughput and low transaction costs.\n" +
              "\n" +
              "Off-Chain Agreements\n" +
              "\n" +
              "Another approach to scaling is the use of off-chain agreements with on-chain settlement. Parties can transact freely off-chain and only interact with the blockchain to settle the final state. This reduces the burden on the network while still providing the security guarantees of the blockchain.\n" +
              "\n" +
              "Scaling Through Interoperability\n" +
              "\n" +
              "Interoperability protocols enable different blockchains to communicate and transact with one another. By spreading the transaction load across multiple chains, these protocols can effectively scale the network.\n" +
              "\n" +
              "The Future of Ethereum Scaling\n" +
              "\n" +
              "The future of Ethereum scaling is a combination of Layer 1 and Layer 2 solutions, along with the continued development of new technologies. The Ethereum community is actively experimenting with various scaling solutions, and the successful implementation of these will be crucial for Ethereum to support a global user base and a new wave of decentralized applications.\n" +
              "\n" +
              "In conclusion, scaling Ethereum is a multifaceted challenge that requires a combination of innovative Layer 1 and Layer 2 solutions, improved consensus mechanisms, and new frameworks for off-chain transactions. The community's collaborative effort in addressing these challenges is vital for Ethereum's evolution as a foundational platform for decentralized applications and smart contracts.",
            steps: [
              {
                name: "Understanding Layer 2 Scaling",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is Layer 2 (L2) scaling in the context of Ethereum, and how does it contribute to improving scalability?",
                    answers: [
                      " Layer 2 scaling enhances the base blockchain's security.",
                      " Layer 2 scaling introduces a new layer of blockchain, completely separate from Ethereum.",
                      " Layer 2 scaling solutions handle transactions off Ethereum Layer 1, increasing transaction throughput while maintaining Ethereum's security.",
                      " Layer 2 scaling primarily focuses on reducing transaction fees.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: Layer 2 solutions process transactions exclusively on Ethereum Layer 1.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What does the 'blockchain trilemma' state, and how does it relate to Ethereum's scalability?",
                    answers: [
                      " The blockchain trilemma suggests that Ethereum can achieve all three aspects: decentralization, security, and scalability without any trade-offs.",
                      " The blockchain trilemma is unrelated to Ethereum's scalability.",
                      " The blockchain trilemma states that a blockchain can achieve two out of three aspects, and achieving all three is challenging. Scalability often requires sacrificing decentralization or security.",
                      " The blockchain trilemma emphasizes the need for specialized hardware to enhance Ethereum's scalability.",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "Understanding Layer 2 Solutions and Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "How do Layer 2 solutions, such as rollups, contribute to Ethereum's scalability, and what are the key types of rollups?",
                    answers: [
                      " Layer 2 solutions introduce parallel blockchains that function independently, reducing congestion on Ethereum.",
                      " Layer 2 solutions ignore Ethereum's Layer 1, creating a separate ecosystem.",
                      " Layer 2 solutions bundle multiple transactions into a single Layer 1 transaction, reducing fees and relying on Ethereum's security. The main types of rollups are optimistic and zero-knowledge.",
                      " Layer 2 solutions process all transactions on Ethereum Layer 1 without making any changes to the network.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Layer 2 scaling solutions, such as rollups, bundle multiple transactions into a single transaction on Ethereum Layer 1. This helps distribute transaction fees, making it BLANK for each user.",
                    answers: ["cheaper", "expensive", "bigger"],
                    correctAnswer: "cheaper",
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Ethereum's Layer 2 solutions inherit the security of Ethereum Layer 1 by submitting transaction data onto Layer 1. If an invalid transaction is suspected, a BLANK is conducted to confirm its validity.",
                    answers: [
                      "fault-proof verification",
                      "Proofs",
                      "Zero-knowledge",
                    ],
                    correctAnswer: "fault-proof verification",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "L2 Rollups",
        units: [
          {
            name: "Type of L2 Rollups",
            description:
              "Layer 2 (L2) solutions are pivotal enhancements designed to scale the Ethereum network. They are essentially separate blockchains that extend Ethereum while inheriting its robust security features. Let's delve into the types of L2 rollups, which are among the most promising scaling solutions.\n" +
              "\n" +
              "Rollups are a class of Layer 2 solutions that process and store transaction data on a separate chain, then post the transaction data back to Ethereum. This method leverages the security of Ethereum while offloading the computational burden, allowing for increased transaction throughput and reduced fees. Rollups come in two primary forms: Optimistic Rollups and Zero-Knowledge Rollups.\n" +
              "\n" +
              "Optimistic Rollups operate on the principle of optimism - that all transactions are presumed valid unless proven otherwise. They allow for the execution of smart contracts at scale by assuming transactions are valid by default and only running computation, via a fraud proof, in the event of a challenge. This model significantly reduces the on-chain computation burden, as only transaction data is posted to the main chain.\n" +
              "\n" +
              "Zero-Knowledge Rollups (ZK-Rollups), on the other hand, use cryptographic proofs to validate transactions. They execute transactions off-chain and generate a validity proof, which is then posted to the Ethereum mainnet. This proof attests to the correctness of the entire batch of transactions, ensuring that only valid state transitions are accepted. ZK-Rollups are particularly noted for their ability to maintain privacy and for their potential to offer even greater scalability improvements than Optimistic Rollups.\n" +
              "\n" +
              "Both types of rollups aim to maintain the decentralized and secure ethos of Ethereum while significantly increasing its capacity to process transactions. By batching hundreds of transactions into a single one on the main chain, they spread the cost of Layer 1 fees across many users, making transactions more affordable.\n" +
              "\n" +
              "In addition to these, there are also Generalized Layer 2s, which function similarly to Ethereum but at a lower cost, and Application-Specific Layer 2s, which are optimized for particular use cases to bring enhanced performance.\n" +
              "\n" +
              "As the Ethereum ecosystem continues to evolve, Layer 2 solutions like rollups are becoming increasingly crucial in addressing the blockchain trilemma, striking a balance between decentralization, security, and scalability.",
            steps: [
              {
                name: "Exploring Layer 2 Rollup Types",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What are the two primary types of Layer 2 rollups for Ethereum?",
                    answers: [
                      " Generalized and specialized rollups",
                      " zk and zk-Rollups",
                      " Optimistic and zk-Rollups",
                      " Plasma and state channels",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "In optimistic rollups, transactions are always considered valid without the need for verification.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Zero-knowledge rollups use BLANK proofs where transactions are computed off-chain and then compressed data is supplied to Ethereum Mainnet as a proof of their validity.",
                    correctAnswer: "zero-knowledge",
                  },
                ],
              },
              {
                name: "Comparing Optimistic and Zero-Knowledge Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary difference between optimistic and zero-knowledge rollups?",
                    answers: [
                      " Optimistic rollups always require zero-knowledge proofs for transactions.",
                      " Zero-knowledge rollups assume transactions are valid without verification.",
                      " Optimistic rollups use validity proofs and allow for challenges if transactions are suspected to be invalid",
                      " Zero-knowledge rollups rely on central authorities to validate transactions.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Fault proofs are used in both optimistic and zero-knowledge rollups to confirm transaction validity.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Optimistic rollups are called 'optimistic' because transactions are BLANK to be valid and can be challenged if necessary.",
                    correctAnswer: "assumed",
                  },
                ],
              },
            ],
          },
          {
            name: "Optimistic Rollups",
            description:
              "Optimistic Rollups are a transformative Layer 2 scaling solution designed to alleviate the congestion on the Ethereum mainnet by handling transactions off-chain and periodically submitting them to Ethereum. This technology is named 'optimistic' because it operates under the assumption that all transactions are valid by default, and only verifies them if a challenge is raised.\n" +
              "\n" +
              "How Optimistic Rollups Work:\n" +
              "Optimistic Rollups run parallel to the main Ethereum chain, on a separate layer, where they execute transactions and smart contracts. These rollups bundle (or 'roll up') hundreds of transactions into a single transaction. The state of these transactions is recorded on the L2, but only the transaction data without execution proofs is posted to the main Ethereum chain. This is where the 'optimism' comes in: it is assumed that all transactions are valid unless proven otherwise.\n" +
              "\n" +
              "Fraud Proofs:\n" +
              "The security model of Optimistic Rollups relies on fraud proofs. If someone believes a transaction is fraudulent, they can submit a fraud proof. The system then verifies the proof by executing the transaction's computation on-chain. If the transaction is indeed invalid, it is rejected, and the original submitter is penalized. This dispute resolution mechanism is a critical component that ensures the integrity of the rollup.\n" +
              "\n" +
              "Benefits of Optimistic Rollups:\n" +
              "\n" +
              "Scalability: By moving computation and state storage off-chain, Optimistic Rollups can significantly increase the number of transactions per second (TPS) that Ethereum can handle.\n" +
              "Lower Fees: As transactions are batched together, the cost of gas fees is amortized over many transactions, leading to lower fees for individual users.\n" +
              "EVM Compatibility: Optimistic Rollups are compatible with the Ethereum Virtual Machine (EVM), which means that existing smart contracts and tools can be used without any changes.\n" +
              "Decentralization: They maintain a high degree of decentralization, as the rollup chain is secured by the underlying Ethereum network.\n" +
              "Drawbacks:\n" +
              "One notable drawback of Optimistic Rollups is the 'challenge period,' a waiting time for withdrawals to ensure that fraudulent transactions can be challenged. This can lead to delays when moving assets back to the Ethereum mainnet.\n" +
              "\n" +
              "Current State and Future:\n" +
              "Optimistic Rollups are already in use with several projects and are proving to be a viable option for scaling Ethereum. As they continue to develop, they are expected to integrate more deeply with Ethereum, offering a seamless user experience while maintaining the network's security and decentralization.\n" +
              "\n" +
              "In summary, Optimistic Rollups represent a significant step forward in the quest to scale Ethereum. They offer a practical solution to the blockchain trilemma by providing a balance between scalability, security, and decentralization, enabling Ethereum to support a much larger ecosystem of decentralized applications.",
            steps: [
              {
                name: "Comparing Optimistic and Zero-Knowledge Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary difference between optimistic and zero-knowledge rollups?",
                    answers: [
                      " Optimistic rollups always require zero-knowledge proofs for transactions.",
                      " Zero-knowledge rollups assume transactions are valid without verification.",
                      " Optimistic rollups use validity proofs and allow for challenges if transactions are suspected to be invalid",
                      " Zero-knowledge rollups rely on central authorities to validate transactions.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Fault proofs are used in both optimistic and zero-knowledge rollups to confirm transaction validity.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Optimistic rollups are called 'optimistic' because transactions are BLANK to be valid and can be challenged if necessary.",
                    correctAnswer: "assumed",
                  },
                ],
              },
              {
                name: "Advantages of Optimistic Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary advantage of optimistic rollups?",
                    answers: [
                      " Reduced transaction fees",
                      " Enhanced security through cryptographic proofs",
                      " High scalability",
                      " Efficiently processing a large number of transactions while allowing challenges to ensure validity",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "Fault proofs are used in optimistic rollups to confirm the validity of transactions.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Optimistic rollups rely on a BLANK system to dispute transactions that may be invalid.",
                    correctAnswer: "challenge-based",
                  },
                ],
              },
            ],
          },
          {
            name: "ZK Rollups",
            description:
              "Zero-Knowledge Rollups (ZK-Rollups) are a cutting-edge Layer 2 scaling solution that enhances the throughput of the Ethereum network by processing transactions off-chain and then posting cryptographic proofs to the main chain. These proofs, known as zero-knowledge proofs, validate the correctness of all transactions in a batch without revealing any underlying data, ensuring privacy and security.\n" +
              "\n" +
              "How ZK-Rollups Work:\n" +
              "ZK-Rollups bundle a large number of off-chain transactions into a single transaction. Instead of posting all transaction data on the blockchain, they generate and submit a cryptographic proof—such as a SNARK (Succinct Non-Interactive Argument of Knowledge) or a STARK (Scalable Transparent Argument of Knowledge)—to the main chain. This proof confirms that the batch of transactions is valid and that the resulting state after these transactions is correct.\n" +
              "\n" +
              "Benefits of ZK-Rollups:\n" +
              "\n" +
              "Enhanced Scalability: By moving computation off-chain and reducing the on-chain data footprint, ZK-Rollups can process thousands of transactions per second, far exceeding the capacity of the Ethereum mainnet.\n" +
              "Increased Privacy: The zero-knowledge proof mechanism allows transaction validation without revealing any transaction details, thus maintaining user privacy.\n" +
              "Reduced Gas Costs: With transactions batched together, the cost of gas fees is distributed across many transactions, significantly lowering the cost per transaction.\n" +
              "Immediate Finality: Unlike Optimistic Rollups, ZK-Rollups do not require a challenge period, as the validity proof itself guarantees the correctness of transactions, leading to faster finality.\n" +
              "Challenges and Limitations:\n" +
              "While ZK-Rollups offer many advantages, they also come with challenges. The generation of zero-knowledge proofs is computationally intensive and can be more complex to implement than Optimistic Rollups. Additionally, supporting general smart contract execution is more difficult with ZK-Rollups, although advancements are being made in this area.\n" +
              "\n" +
              "Current and Future Developments:\n" +
              "ZK-Rollups are rapidly evolving, with new techniques being developed to make proof generation more efficient and to expand the types of computations they can support. Projects are also working on ways to make ZK-Rollups more accessible to developers, such as by improving tooling and compatibility with the Ethereum Virtual Machine (EVM).\n" +
              "\n" +
              "In conclusion, ZK-Rollups are a promising solution for scaling Ethereum. They offer a combination of high throughput, low costs, and privacy preservation, which are critical for the widespread adoption of blockchain technology. As the technology matures, it is expected to play a central role in the next generation of decentralized applications.",
            steps: [
              {
                name: "Distinguishing zk-Rollups from Optimistic Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What distinguishes zk-rollups from optimistic rollups?",
                    answers: [
                      " zk-rollups assume transaction validity.",
                      " zk-rollups require on-chain execution.",
                      " zk-rollups rely on cryptographic proofs to validate transactions.",
                      " zk-rollups process transactions off-chain.",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "True or False: In zk-rollups, transactions are assumed to be valid, and cryptographic proofs are used to validate them.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "ZK-rollups leverage BLANK for transaction verification.",
                    answers: [
                      "Zero-knowledge proofs",
                      "Proofs",
                      "Zero-knowledge",
                    ],
                    correctAnswer: "Zero-knowledge proofs",
                  },
                ],
              },
              {
                name: "Benefits and Characteristics of zk-Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary benefit of zk-rollups?",
                    answers: [
                      " Reduced transaction fees",
                      " Speedy on-chain execution",
                      " High scalability",
                      " Enhanced privacy and security through cryptographic proofs",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question:
                      "In zk-rollups, transactions are processed on layer 1.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "ZK-rollups are characterized by their ability to provide BLANK while ensuring the validity of transactions.",
                    answers: [
                      "Privacy and security through cryptographic proofs",
                      "Privacy through cryptographic proofs",
                      "Security through cryptographic proofs",
                    ],
                    correctAnswer:
                      "Privacy and security through cryptographic proofs",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Polygon zkEVM",
        units: [
          {
            name: "EVM equivalence",
            description:
              "Polygon zkEVM represents a groundbreaking step in the evolution of blockchain scalability solutions. It is a Layer 2 protocol that operates on top of the Ethereum blockchain, aiming to alleviate the network's limitations regarding transaction speed and cost. The zkEVM, or Zero-Knowledge Ethereum Virtual Machine, is Polygon's approach to implementing a ZK-Rollup. This technology allows for the bundling of multiple transactions into a single transaction on the Ethereum main chain, significantly reducing the load and increasing the throughput.\n" +
              "\n" +
              "The core concept of zkEVM revolves around zero-knowledge proofs, a form of cryptographic proof that allows one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself. In the context of Polygon zkEVM, these proofs are used to validate the correctness of transactions processed off-chain, ensuring that only legitimate transaction data is recorded on the Ethereum main chain.\n" +
              "\n" +
              "The role of Polygon zkEVM is multifaceted. It not only enhances the scalability of Ethereum by offloading transaction processing to a secondary layer but also maintains a high degree of security and decentralization. By doing so, it addresses the blockchain trilemma, which posits that a blockchain system can only at most have two of the following three properties: decentralization, security, and scalability. Polygon zkEVM aims to achieve all three by leveraging zero-knowledge proofs.\n" +
              "\n" +
              "One of the main advantages of Polygon zkEVM is its compatibility with the Ethereum Virtual Machine. This means that developers can deploy their existing Ethereum smart contracts on Polygon zkEVM without any modifications. This EVM compatibility is a significant boon, as it lowers the barrier to entry for developers and encourages the migration of decentralized applications (dApps) to this more scalable layer.\n" +
              "\n" +
              "Furthermore, Polygon zkEVM provides immediate transaction finality. Unlike other scaling solutions that may require a waiting period for transaction confirmation, the use of zero-knowledge proofs allows for the quick verification of transaction batches. This immediate finality is crucial for user experience, as it enables seamless interactions with dApps without the typical delays associated with blockchain transactions.",
            steps: [
              {
                name: "EVM Equivalence 1/2",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What role does Polygon zkEVM play in the context of Ethereum scalability?",
                    answers: [
                      " Enforcing centralized computing solutions",
                      " Offering enhanced data storage for Ethereum",
                      " Leveraging cryptographic zero-knowledge proofs for off-chain transactions' validity",
                      " Expanding Ethereum's decentralized network",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Polygon zkEVM offers scalability without compromising BLANK.",
                    correctAnswer: "Security",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is one of the benefits of using Polygon zkEVM for developers?",
                    answers: [
                      " Reduced security compared to Ethereum",
                      " Reduced compatibility with existing smart contracts",
                      " EVM-equivalence, allowing the deployment of existing smart contracts",
                      " Complete control over user funds",
                    ],
                    correctAnswer: 2,
                  },
                ],
              },
              {
                name: "EVM Equivalence 2/2",
                questions: [
                  {
                    type: "true-false",
                    question:
                      "Polygon zkEVM aims to maintain opcode compatibility with the Ethereum Virtual Machine (EVM).",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Polygon zkEVM ensures the correctness of off-chain computations by employing BLANK as validity proofs.",
                    answers: ["Zero-knowledge proof", "Proofs", "Tokens"],
                    correctAnswer: "Zero-knowledge proofs",
                  },
                  {
                    type: "true-false",
                    question:
                      "Polygon zkEVM transactions do not require zero-knowledge proofs for validity.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Polygon zkEVM offers scalability without compromising BLANK.",
                    answers: ["Speed", "Security", "Storage"],
                    correctAnswer: "Security",
                  },
                ],
              },
            ],
          },
          {
            name: "zkEVM",
            description:
              "Scalability is at the heart of the Polygon zkEVM's value proposition. Ethereum, as a Layer 1 blockchain, has been plagued by network congestion, leading to high transaction fees and slower processing times. Polygon zkEVM tackles these issues head-on by processing transactions off-chain and then committing them to the Ethereum main chain in batches. This process significantly reduces the computational burden on the main chain, allowing for a higher volume of transactions to be processed in a shorter amount of time.\n" +
              "\n" +
              "The zero-knowledge aspect of Polygon zkEVM is critical to its operation. Zero-knowledge proofs, particularly zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge), are used to attest to the validity of transactions without revealing the actual transaction data. This not only ensures privacy but also reduces the data footprint on the Ethereum main chain, further contributing to scalability.\n" +
              "\n" +
              "In terms of actual scaling potential, Polygon zkEVM can significantly increase Ethereum's transaction throughput. While Ethereum's main chain processes roughly 15 transactions per second, Layer 2 solutions like Polygon zkEVM can handle several thousand transactions per second. This represents a substantial improvement in performance, making Ethereum a more viable platform for large-scale dApp deployment and high-frequency trading platforms.\n" +
              "\n" +
              "Moreover, the scalability provided by Polygon zkEVM does not come at the cost of security. The cryptographic underpinnings of zero-knowledge proofs provide a robust security model, ensuring that even as transactions are processed more efficiently, the integrity of the network remains intact. This balance of scalability and security is what sets Polygon zkEVM apart from other scaling solutions and makes it a promising avenue for Ethereum's growth.\n" +
              "\n" +
              "In conclusion, Polygon zkEVM is a sophisticated technological innovation that offers a practical solution to Ethereum's scalability challenges. By leveraging zero-knowledge proofs, it ensures that the Ethereum network can handle a much larger volume of transactions, paving the way for broader adoption and more complex blockchain applications. With its EVM compatibility and focus on maintaining the decentralized ethos of blockchain, Polygon zkEVM stands as a pivotal development in the quest for a scalable, secure, and user-friendly blockchain ecosystem.",
            steps: [
              {
                name: "Polygon zkEVM Overview",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What does zkEVM stand for in the context of Polygon's Layer 2 solution?",
                    answers: [
                      " Zero-Knowledge Encryption Validation Model",
                      " Zipped Kernel Execution Virtual Machine",
                      " Zero-Knowledge Ethereum Virtual Machine",
                      " Zigzag Kite-Edge Velocity Model",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Polygon zkEVM emulates the Ethereum Virtual Machine (EVM) while recreating all existing EVM opcodes.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Polygon zkEVM is designed to offer EVM BLANK for deploying existing Ethereum smart contracts.",
                    answers: ["Equivalence", "Compatibility", "Coexistence"],
                    correctAnswer: "Equivalence",
                  },
                ],
              },
              {
                name: "EVM Equivalence & ZK-Rollups",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "What is the main goal of Zero-Knowledge Rollups (ZK-Rollups) in the context of Polygon zkEVM?",
                    answers: [
                      " To replace Ethereum's base layer",
                      " To achieve zero-fee transactions",
                      " To improve the scalability and transactions per second (TPS) of Ethereum",
                      " To implement a centralized security model",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "true-false",
                    question:
                      "Polygon zkEVM uses verifiable zero-knowledge proofs to validate the correctness of off-chain computations.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "With Polygon zkEVM, users can deposit assets from Ethereum and transact off-chain while ensuring the operators of zkEVM can't steal user funds, thus inheriting the BLANK of Ethereum.",
                    correctAnswer: "Security",
                  },
                ],
              },
            ],
          },
          {
            name: "Interact with Polygon zkEVM",
            steps: [
              {
                name: "Playing around on Polygon zkEVM",
                questions: [
                  {
                    type: "interaction-p-zkevm-receive",
                    question:
                      "Receive some money on your account on Polygon zkEVM",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-p-zkevm-deploy",
                    question:
                      "Deploy your first smart contract on Polygon zkEVM",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-p-zkevm-read",
                    question: "Read your smart contract Polygon zkEVM",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-p-zkevm-write",
                    question:
                      "Update the state of your smart contract Polygon zkEVM",
                    answers: [],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-p-zkevm-view",
                    question:
                      "Check your transaction on Polygon zkEVM block explorer",
                    answers: [],
                    correctAnswer: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Fuel Network",
        units: [
          {
            name: "Introduction to Fuel Network",
            description:
              "Fuel Network emerges as a groundbreaking modular execution layer, purpose-built to significantly amplify the scalability and operational efficiency of the Ethereum blockchain. As a Layer 2 solution, it directly addresses the core challenges faced by Ethereum, such as network congestion and high transaction fees, which have been barriers to the blockchain's scalability and user adoption. The modularity of Fuel Network is its cornerstone, strategically decoupling the execution of transactions from data availability and consensus mechanisms. This innovative approach allows for specialized optimization of each component, fostering a more agile and robust network capable of handling a higher throughput of transactions with lower latency and cost.\n" +
              "\n" +
              "At the heart of Fuel Network's technical prowess is FuelVM, a custom-designed virtual machine that departs from Ethereum's account-based model and instead adopts the UTXO (Unspent Transaction Output) model. This choice is pivotal, as it enables transactions to be processed in parallel, thereby enhancing the network's capacity and speed. Complementing FuelVM is Sway, a Rust-inspired programming language tailored for the Fuel ecosystem, which empowers developers to craft smart contracts with efficiency and security in mind.\n" +
              "\n" +
              "Key features of the Fuel Network include its high-performance execution environment, compatibility with Ethereum assets and smart contracts, and a developer-friendly ecosystem. These attributes are designed to attract and support a wide range of decentralized applications and services, from DeFi protocols to NFT marketplaces, without compromising on the decentralization and security principles that are fundamental to blockchain technology.\n" +
              "\n" +
              "Fuel Network's main goals are multifaceted: to provide a scalable and efficient platform for the burgeoning world of decentralized applications, to reduce the entry barriers for developers and users alike by lowering costs and improving transaction speeds, and to foster a rich ecosystem where innovation can thrive. By achieving these objectives, Fuel Network aspires to be at the forefront of the next wave of blockchain evolution, where the full potential of decentralized technologies can be realized on a global scale.",
            steps: [
              {
                name: "What is Fuel Network?",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Fuel Network is designed to improve Ethereum's:",
                    answers: [
                      "A) Privacy",
                      "B) Scalability and efficiency",
                      "C) Token value",
                      "D) Smart contract size",
                    ],
                    correctAnswer: "B",
                  },
                  {
                    type: "true-false",
                    question:
                      "Fuel Network operates as a Layer 2 scaling solution for Ethereum.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Fuel Network's Modular Design",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Fuel Network's design is __________, separating execution from data availability and consensus.",
                    correctAnswer: "modular",
                  },
                  {
                    type: "true-false",
                    question:
                      "Fuel Network's modular design leads to increased transaction costs.",
                    correctAnswer: false,
                  },
                ],
              },
            ],
          },
          {
            name: "FuelVM and Sway",
            description:
              "FuelVM is the execution engine at the core of the Fuel Network, renowned for its exceptional efficiency and performance in smart contract execution. It represents a paradigm shift from the traditional Ethereum Virtual Machine (EVM) by implementing a UTXO-based model, which is a departure from Ethereum's account-based system. This UTXO model is instrumental in enabling concurrent transaction processing, which significantly enhances the network's throughput. FuelVM is designed with a focus on simplicity and determinism, which reduces the complexity of transaction execution and minimizes potential attack vectors, thereby bolstering the network's security.\n" +
              "\n" +
              "One of the standout features of FuelVM is its deterministic gas model, which provides developers with predictable transaction costs, a stark contrast to the variable fees on the Ethereum mainnet. This predictability, along with the high-speed execution of smart contracts, positions FuelVM as a powerful engine for developers looking to build scalable decentralized applications without the bottlenecks associated with traditional blockchain platforms.\n" +
              "\n" +
              "Complementing the capabilities of FuelVM is Sway, a domain-specific language crafted for the Fuel ecosystem. Drawing inspiration from the Rust programming language, Sway is designed to be inherently secure and conducive to writing high-performance code. It is tailored to leverage the unique features of FuelVM, allowing developers to write smart contracts and decentralized applications that are both efficient and optimized for the modular architecture of the Fuel Network.\n" +
              "\n" +
              "Programming with Sway on FuelVM offers developers several advantages. It provides a type-safe environment, reducing the likelihood of bugs and vulnerabilities that can be exploited in smart contracts. Sway also introduces a suite of tools and libraries specifically designed for blockchain development, streamlining the process of creating, testing, and deploying smart contracts on the Fuel Network.\n" +
              "\n" +
              "In essence, FuelVM and Sway together form a robust foundation for the Fuel Network, enabling it to achieve its vision of a scalable, efficient, and developer-friendly blockchain ecosystem. FuelVM's efficiency in transaction processing and Sway's optimization for smart contract development are key to unlocking the next level of blockchain innovation, where the focus shifts from merely overcoming the limitations of existing technology to pushing the boundaries of what decentralized systems can achieve.",
            steps: [
              {
                name: "Exploring FuelVM",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "FuelVM is known for:",
                    answers: [
                      "A) High transaction costs",
                      "B) Low scalability",
                      "C) High efficiency in smart contract execution",
                      "D) Incompatibility with Ethereum",
                    ],
                    correctAnswer: "C",
                  },
                  {
                    type: "true-false",
                    question: "FuelVM uses the UTXO model for transactions.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Programming with Sway",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Sway is a programming language designed specifically for BLANK.",
                    correctAnswer: "Fuel Network",
                  },
                  {
                    type: "true-false",
                    question:
                      "Sway is based on Rust and is used for writing smart contracts on Fuel Network.",
                    correctAnswer: true,
                  },
                ],
              },
            ],
          },
          {
            name: "Fuel Network's Ecosystem",
            description:
              "The Fuel Network's ecosystem is a burgeoning landscape of innovation, characterized by a diverse array of projects and decentralized applications (dApps) that leverage its high-performance modular execution layer. This ecosystem is designed to support a wide range of use cases, from DeFi protocols and NFT marketplaces to gaming and social media platforms, all benefiting from the scalability and efficiency that Fuel Network provides.\n" +
              "\n" +
              "Central to the Fuel Network's ecosystem is its compatibility with Ethereum, allowing developers to port existing Ethereum dApps to Fuel or create new ones that can interact seamlessly with the Ethereum blockchain. This interoperability is crucial for developers who want to take advantage of Fuel's performance benefits without leaving the Ethereum ecosystem entirely.\n" +
              "\n" +
              "One of the flagship projects within the Fuel ecosystem is SwaySwap, a decentralized exchange (DEX) that exemplifies the capabilities of the network. SwaySwap is akin to Uniswap but operates with the enhanced performance and lower transaction costs afforded by the Fuel Network. It serves as a proof of concept for the kind of complex, resource-intensive applications that can run more efficiently on Fuel's modular execution layer.\n" +
              "\n" +
              "Using Sway within the Fuel ecosystem offers developers a specialized toolset for creating dApps that are not only performant but also secure and maintainable. Sway's syntax and semantics are designed to prevent common programming errors that can lead to security vulnerabilities, making it an attractive choice for developers who prioritize the safety of their smart contracts. Additionally, Sway's tooling ecosystem includes features like integrated testing frameworks and package managers, which streamline the development workflow from inception to deployment.\n" +
              "\n" +
              "Moreover, Sway is designed to be modular, much like the Fuel Network itself. This modularity in the programming language allows developers to create reusable components, which can significantly speed up the development process and foster a collaborative environment where developers can share and leverage each other's code.\n" +
              "\n" +
              "In summary, the Fuel Network's ecosystem is a fertile ground for dApp development, offering a high-performance alternative to Ethereum's mainnet. With projects like SwaySwap leading the charge, it demonstrates the practical benefits of the network's modular design. Programming with Sway within this ecosystem not only enhances the efficiency and scalability of dApps but also brings a new level of security and developer ergonomics to the blockchain space. As more developers and projects flock to the Fuel Network, it is poised to become a hub of blockchain innovation, where the limitations of the past give way to the possibilities of the future.\n" +
              "\n" +
              "\n" +
              "\n" +
              "\n",
            steps: [
              {
                name: "Projects on Fuel Network",
                questions: [
                  {
                    type: "multiple-choice",
                    question:
                      "Which of the following is a decentralized application on Fuel Network?",
                    answers: [
                      "A) SwaySwap",
                      "B) EtherDelta",
                      "C) CryptoKitties",
                      "D) MakerDAO",
                    ],
                    correctAnswer: 0,
                  },
                  {
                    type: "true-false",
                    question:
                      "SwaySwap is similar to Uniswap and runs on the Fuel devnet.",
                    correctAnswer: true,
                  },
                ],
              },
              {
                name: "Using SwaySwap",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question:
                      "SwaySwap allows users to swap native assets and pool resources on the __________.",
                    correctAnswer: "Fuel devnet",
                  },
                  {
                    type: "true-false",
                    question:
                      "SwaySwap is currently deployed on the Ethereum mainnet.",
                    correctAnswer: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
