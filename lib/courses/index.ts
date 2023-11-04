import { Course } from "../interfaces";

export const availableCourses: Course[] = [
  {
    id: "intro",
    name: "Introduction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna dignissim, pulvinar quam quis, cursus orci. Pellentesque blandit tellus a neque tincidunt placerat. Sed lacinia eleifend neque vitae interdum. Nullam at leo justo. Pellentesque sollicitudin tortor velit, vitae imperdiet lectus malesuada sit amet. Ut ligula ligula, volutpat et tortor ut, aliquet efficitur eros. Sed condimentum fermentum vulputate. Donec eu eros maximus, scelerisque tellus sit amet, vulputate turpis. Fusce mattis odio id blandit maximus. Morbi quis ultricies lacus. Nam ullamcorper nunc erat, in rhoncus lectus scelerisque quis.",
    image: "/metamask.png",
    nftImage: "/course-1-nft.png",
    sections: [
      {
        name: "Blockchain and Wallets",
        units: [
          {
            name: "Blockchain Introduction - Core Principles",
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
                      "A ________ wallet is a type of cryptocurrency wallet that is always connected to the internet and allows for more convenient transactions.",
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
                      "When using a desktop wallet, it's important to ensure your computer has adequate ________ to prevent unauthorized access and potential malware threats.",
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
                      "In a blockchain transaction, the _________ ensures that the transaction is secure and authentic.",
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
                      "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces, executes, or manages ___________ between parties.",
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
                      "Smart contracts can be used to create decentralized applications, also known as ___________, which operate on a blockchain network.",
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
                      "To interact with a smart contract, users typically need to send a transaction with the necessary ___________ to trigger the contract's functions.",
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
                      "Gas fees in blockchain transactions are calculated based on the computational work required to process and validate a transaction, which is often measured in units of ___________.",
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
                      "Gas fees play a crucial role in preventing ___________ on the blockchain.",
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
    ],
  },
];
