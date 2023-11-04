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

  {
    id: "Smart Account",
    name: "EOAs and Smart Accounts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna dignissim, pulvinar quam quis, cursus orci. Pellentesque blandit tellus a neque tincidunt placerat. Sed lacinia eleifend neque vitae interdum. Nullam at leo justo. Pellentesque sollicitudin tortor velit, vitae imperdiet lectus malesuada sit amet. Ut ligula ligula, volutpat et tortor ut, aliquet efficitur eros. Sed condimentum fermentum vulputate. Donec eu eros maximus, scelerisque tellus sit amet, vulputate turpis. Fusce mattis odio id blandit maximus. Morbi quis ultricies lacus. Nam ullamcorper nunc erat, in rhoncus lectus scelerisque quis.",
    image: "/metamask.png",
    nftImage: "/course-1-nft.png",
    sections: [
      {
        name: "Cryptography in Blockchain: Understanding Public and Private Keys",
        units: [
          {
            name: "Fundamentals of Cryptography",
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
                    correctAnswer: 2,
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
                    correctAnswer: 3,
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
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "Authentication in cryptography is primarily concerned with:",
                    answers: [
                      "Ensuring data confidentiality",
                      "Confirming the identity of communicating parties",
                      "Generating secure encryption keys ",
                      "Increasing the speed of data transmission",
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is the main function of encryption in cryptography?",
                    answers: [
                      "Data compression",
                      "Data destruction",
                      "Data transformation to make it unreadable",
                      "Data optimization for storage",
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "What role does a Public Key Infrastructure (PKI) play in cryptography?",
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
                    correctAnswer: 2,
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
                    correctAnswer: 3,
                  }
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
            name: "Public and Private Key Cryptography",
            steps: [
              {
                name: "The Role of Keys in Blockchain",
                questions: [
                  {
                    type: "fill",
                    question:
                      "Fill the gaps: In blockchain, a _______ key is used to encrypt data, while a _______ key is used to decrypt it.",
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
            name: "Security and Vulnerabilities",
            steps: [
              {
                name: "Key Security Best Practices",
                questions: [
                
                  {
                    type: "true-false",
                    question:"True or False: Writing down your private key on paper and storing it in a secure location is a bad security practice.",
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
                    correctAnswer: 3,
                  },
                  {
                    type: "fill-in-the-gap",
                    question:
                      "Best practices for key security recommend avoiding the storage of private keys in easily accessible locations or using ___________ methods..",
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
                    correctAnswer: 3,
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
                      "Best practices for private key security also include regularly ___________ private keys and checking for any signs of unauthorized access or compromise.",
                    correctAnswer: "Monitoring",
                  },
                  {
                    type: "multiple-choice",
                    question:
                      "What is the primary purpose of hardware wallets in ensuring private key security?",
                    answers: [
                      "To make private keys more easily accessible.",
                      "To encrypt private keys for added protection.",
                      "To keep private keys offline and secure from online threats. ✅",
                      "To generate new private keys automatically.",
                    ],
                    correctAnswer: 3,
                  },
                ],
              },
              {
                name: "Potential Vulnerabilities",
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
                name: "Potential Vulnerabilities",
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
            ],
          },
        ],
      },
      {
        name: "Externally Owned Accounts (EOAs)",
        units: [
          {
            name: "Understanding EOAs",
            steps: [
              {
                name: "Introduction to EOAs",
                questions: [
                    {
                        type: "multiple-choice",
                        question: "What is the primary characteristic of an Externally Owned Account (EOA)?",
                        answers: [
                            "A) It is controlled by a private key",
                            "B) It is controlled by a public key",
                            "C) It requires multiple signatures for transactions",
                            "D) It is managed by a centralized authority",
                        ],
                        correctAnswer: 0,
                    },
                    {
                        type: "true-false",
                        question: "EOAs are typically managed by a centralized authority for increased security.",
                        correctAnswer: false,
                    },
                    {
                        type: "multiple-choice",
                        question: "What is the primary role of the private key associated with an EOA?",
                        answers: [
                            "A) Verifying the balance of the account",
                            "B) Encrypting transaction data",
                            "C) Controlling the account and signing transactions",
                            "D) Acting as the public address of the account",
                        ],
                        correctAnswer: 2,
                    },
                    {
                        type: "true-false",
                        question: "The public key associated with an EOA is used for verifying the digital signatures on transactions.",
                        correctAnswer: true,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "In the context of EOAs, transactions require the digital signature of the ___________ key.",
                        correctAnswer: "Private",
                    },
                    {
                        type: "multiple-choice",
                        question: "What is the primary benefit of using an EOA for managing cryptocurrency funds?",
                        answers: [
                            "A) Reduced control over account security",
                            "B) Increased reliance on centralized authorities",
                            "C) Enhanced control and security through private key ownership",
                            "D) Faster transaction processing",
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
                        question: "EOAs are commonly used for transferring cryptocurrency between users and for signing transactions. They are controlled by the account holder's ___________.",
                        correctAnswer: "private key",
                    },
                    {
                        type: "multiple-choice",
                        question: "When an EOA initiates a cryptocurrency transfer, which key is used to sign the transaction for verification?",
                        answers: [
                            "A) Public key",
                            "B) Password",
                            "C) Private key",
                            "D) Assets",
                        ],
                        correctAnswer: 2,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "To initiate a transaction from an EOA, the account holder must use their ___________ to sign the transaction.",
                        correctAnswer: "private key",
                    },
                    {
                        type: "true-false",
                        question: "EOAs can initiate transactions by signing them with their public keys.",
                        correctAnswer: false,
                    },
                    {
                        type: "multiple-choice",
                        question: "What role does the public key associated with an EOA play in transactions?",
                        answers: [
                            "A) It serves as the recipient's address for cryptocurrency transfers.",
                            "B) It verifies the transaction by checking the balance.",
                            "C) It encrypts the transaction data for security.",
                            "D) It signs the transaction for verification.",
                        ],
                        correctAnswer: 0,
                    },
                    {
                        type: "true-false",
                        question: "The assets associated with an EOA are used to sign transactions for security.",
                        correctAnswer: false,
                    },
                ],
              },
              {
                name: "EOA Use Cases",
                questions: [
                    {
                        type: "true-false",
                        question: "True or False: If you lose the private key, you lose access to your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If somebody gets your private key, they gain control of your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If you lose the private key associated with your EOA, you lose access to your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If somebody gains access to your private key, they gain control of your EOA account.",
                        correctAnswer: true,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "EOAs provide users with control over their accounts through the use of their private keys, which must be kept ___________ to prevent unauthorized access.",
                        correctAnswer: "secure",
                    },
                    {
                        type: "true-false",
                        question: "True or False: EOAs are commonly used for executing smart contracts in blockchain networks.",
                        correctAnswer: false,
                    },
                    {
                        type: "multiple-choice",
                        question: "In which scenario is an EOA primarily used?",
                        answers: [
                            "A) For executing smart contracts",
                            "B) For generating public keys",
                            "C) For recording transactions and managing account balances",
                            "D) For managing centralized databases",
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
            steps: [
              {
                name: "Smart Accounts",
                questions: [
                    {
                        type: "multiple-choice",
                        question: "Smart Accounts enhance the capabilities of traditional EOAs by:",
                        answers: [
                            "A) Allowing only cryptocurrency transactions.",
                            "B) Enabling custom logic and programmability.",
                            "C) Reducing transaction speeds.",
                            "D) Limiting the types of transactions.",
                        ],
                        correctAnswer: 1,
                    },
                    {
                        type: "true-false",
                        question: "True or False: Smart Accounts can implement a social recovery mechanism. You could get back your assets even if you lose your private key.",
                        correctAnswer: true,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "Smart Accounts enhance the capabilities of traditional EOAs by enabling ___________ and programmability, which means they can execute a wide range of _______________.",
                        correctAnswer: "custom logic, transactions",
                    },
                ],
              },
              {
                name: "EOA Transactions",
                questions: [
                    {
                        type: "fill-in-the-gap",
                        question: "EOAs are commonly used for transferring cryptocurrency between users and for signing transactions. They are controlled by the account holder's ___________.",
                        correctAnswer: "private key",
                    },
                    {
                        type: "multiple-choice",
                        question: "When an EOA initiates a cryptocurrency transfer, which key is used to sign the transaction for verification?",
                        answers: [
                            "A) Public key",
                            "B) Password",
                            "C) Private key",
                            "D) Assets",
                        ],
                        correctAnswer: 2,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "To initiate a transaction from an EOA, the account holder must use their ___________ to sign the transaction.",
                        correctAnswer: "private key",
                    },
                    {
                        type: "true-false",
                        question: "EOAs can initiate transactions by signing them with their public keys.",
                        correctAnswer: false,
                    },
                    {
                        type: "multiple-choice",
                        question: "What role does the public key associated with an EOA play in transactions?",
                        answers: [
                            "A) It serves as the recipient's address for cryptocurrency transfers.",
                            "B) It verifies the transaction by checking the balance.",
                            "C) It encrypts the transaction data for security.",
                            "D) It signs the transaction for verification.",
                        ],
                        correctAnswer: 0,
                    },
                    {
                        type: "true-false",
                        question: "The assets associated with an EOA are used to sign transactions for security.",
                        correctAnswer: false,
                    },
                ],
              },
              {
                name: "EOA Use Cases",
                questions: [
                    {
                        type: "true-false",
                        question: "True or False: If you lose the private key, you lose access to your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If somebody gets your private key, they gain control of your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If you lose the private key associated with your EOA, you lose access to your account.",
                        correctAnswer: true,
                    },
                    {
                        type: "true-false",
                        question: "True or False: If somebody gains access to your private key, they gain control of your EOA account.",
                        correctAnswer: true,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "EOAs provide users with control over their accounts through the use of their private keys, which must be kept ___________ to prevent unauthorized access.",
                        correctAnswer: "secure",
                    },
                    {
                        type: "true-false",
                        question: "True or False: EOAs are commonly used for executing smart contracts in blockchain networks.",
                        correctAnswer: false,
                    },
                    {
                        type: "multiple-choice",
                        question: "In which scenario is an EOA primarily used?",
                        answers: [
                            "A) For executing smart contracts",
                            "B) For generating public keys",
                            "C) For recording transactions and managing account balances",
                            "D) For managing centralized databases",
                        ],
                        correctAnswer: 2,
                    },
                ],
              },
            ],
          },
          {
            name: "Understanding ERC-4337",
            steps: [
              {
                name: "Step 1: Introduction to ERC-4337",
                questions: [
                    {
                        type: "true-false",
                        question: "True or False: ERC-4337 is a standard that enables account abstraction and smart contract accounts.",
                        correctAnswer: true,
                    },
                    {
                        type: "multiple-choice",
                        question: "Account abstraction simplifies the user experience by allowing users to interact with the blockchain using familiar authentication methods like _________ or Email addresses.",
                        answers: ["Usernames", "Private keys", "Biometric authentication", "Decentralized Identities"],
                        correctAnswer: 0,
                    },
                    {
                        type: "true-false",
                        question: "True or False: ERC-4337 requires an infrastructure-level change to be implemented on Ethereum.",
                        correctAnswer: false,
                    },
                ],
              },
            ],
          },
          {
            name: "The Impact of Smart Accounts on Web3 Adoption",
            steps: [
              {
                name: "Enhancing User Experience with Smart Accounts 1/2",
                questions: [
                    {
                        type: "multiple-choice",
                        question: "Which feature of Smart Accounts could significantly improve user experience and drive Web3 adoption?",
                        answers: ["A) Fixed gas prices", "B) Mandatory private key management", "C) Simplified transaction processes", "D) Increased complexity of operations"],
                        correctAnswer: 2,
                    },
                    {
                        type: "true-false",
                        question: "True or False: Smart Accounts promote mandatory private key management, making it a requirement for users.",
                        correctAnswer: false,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "There are 2 main kinds of 'accounts' ____ and Smart Contract Accounts. And smart contract wallets, specially enhanced after ERC4337 & account abstraction, are 100X better.",
                        correctAnswer: "EOA",
                    },
                ],
              },
              {
                name: "Enhancing User Experience with Smart Accounts 2/2",
                questions: [
                    {
                        type: "true-false",
                        question: "True or False: Smart Accounts can only be used for financial transactions on the blockchain.",
                        correctAnswer: false,
                    },
                    {
                        type: "true-false",
                        question: "True or False: Thanks to Smart Accounts, users could make Gasless transactions and Pay gas in any token",
                        correctAnswer: true,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "Thanks to Smart Account, users can set up ________________ to facilitate account recovery in case of a lost seed phrase",
                        correctAnswer: "Social Recovery Mechanism",
                    },
                    {
                        type: "true-false",
                        question: "True or False: Using Smart Account users can set custom spending limits",
                        correctAnswer: true,
                    },
                ],
              },
            ],
          },
          {
            name: " Building with Smart Accounts",
            steps: [
              {
                name: "Smart Accounts Infrastructure Requirements",
                questions: [
                    {
                        type: "multiple-choice",
                        question: "What is a key infrastructure requirement for implementing Smart Accounts?",
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
                        question: "True or False: Smart Accounts primarily rely on traditional banking systems for their operation.",
                        correctAnswer: false,
                    },
                    {
                        type: "fill-in-the-gap",
                        question: "One of the key infrastructure requirements for implementing Smart Accounts is the use of blockchain ________________ and bundlers.",
                        correctAnswer: "relayers",
                    },
                ],
              },
              {
                name: "Smart Accounts and ERC4337",
                questions: [
                  {
                    type: "true-false",
                    question: "ERC-4337 is a standard that enables account abstraction and smart contract accounts.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question: "Account abstraction simplifies the user experience by allowing users to interact with the blockchain using familiar authentication methods like _________ or Email addresses.",
                    answers: ["Usernames", "Private keys", "Biometric authentication", "Decentralized Identities"],
                    correctAnswer: 1,
                  },
                  {
                    type: "true-false",
                    question: "ERC-4337 requires an infrastructure-level change to be implemented on Ethereum.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question: "Which feature of Smart Accounts could significantly improve user experience and drive Web3 adoption?",
                    answers: ["Fixed gas prices", "Mandatory private key management", "Simplified transaction processes", "Increased complexity of operations"],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts promote mandatory private key management, making it a requirement for users.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "There are 2 main kinds of 'accounts' ____ and Smart Contract Accounts. And smart contract wallets, specially enhanced after ERC4337 & account abstraction, are 100X better.",
                    correctAnswer: "EOA",
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts can only be used for financial transactions on the blockchain.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question: "Thanks to Smart Accounts, users could make Gasless transactions and Pay gas in any token.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question: "Thanks to Smart Account, users can set up ________________ to facilitate account recovery in case of a lost seed phrase.",
                    answers: ["Biometric authentication", "A secondary seed phrase", "A new wallet address", "Social Recovery Mechanism"],
                    correctAnswer: 4,
                  },
                  {
                    type: "true-false",
                    question: "Using Smart Accounts, users can set custom spending limits.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is a key infrastructure requirement for implementing Smart Accounts?",
                    answers: ["Traditional banking systems", "Centralized servers", "Blockchain relayers and bundlers", "Physical hardware modules"],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts primarily rely on traditional banking systems for their operation.",
                    correctAnswer: false,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "One of the key infrastructure requirements for implementing Smart Accounts is the use of blockchain ________________ and bundlers.",
                    correctAnswer: "Blockchain relayers",
                  },
                ],
              }
            ],
          },
          {
            name: " Security Considerations",
            steps: [
              {
                name: "Security Advantages of Smart Accounts",
                questions: [
                  {
                    type: "true-false",
                    question: "Smart Accounts inherently eliminate all security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts are immune to all potential security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts are by design more secure than EOA.",
                    correctAnswer: false,
                  },
                  {
                    type: "multiple-choice",
                    question: "What are some of the security advantages of Smart Accounts compared to traditional blockchain transactions?",
                    answers: [
                      "They eliminate all security risks.",
                      "They provide enhanced control.",
                      "They are not customizable.",
                      "They can have social security mechanism."
                    ],
                    correctAnswer: 4,
                  },
                  {
                    type: "true-false",
                    question: "Smart Accounts are immune to all potential security risks associated with blockchain transactions.",
                    correctAnswer: false,
                  },
                ]
              },
              {
                name: "Addressing Security Challenges",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is a potential security challenge when using Smart Accounts?",
                    answers: [
                      "The immutable nature of smart contracts",
                      "The need for physical security tokens",
                      "The reliance on centralized authentication methods",
                      "The complexity of social recovery mechanisms"
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "How can the reliance on centralized authentication methods pose a security challenge for Smart Accounts?",
                    answers: [
                      "It enhances decentralization.",
                      "It simplifies user authentication.",
                      "It may create single points of failure and potential vulnerabilities.",
                      "It makes social recovery mechanisms more robust."
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question: "True or False: If someone steals your private key, it can for sure access your assets on your Smart Account",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question: "True or False: Executing the same transaction from a Smart Account is more secure than using an EOA",
                    correctAnswer: false,
                  },
                  {
                    type: "true-false",
                    question: "True or False: If your Smart Account is audited, it should be more 'secure'",
                    correctAnswer: true,
                  },
                ]
              }
            ],
          },
        ],
      },
      {
        name: "Comparing EOAs and Smart Account ",
        units: [
          {
            name: "Differences and Use Cases",
            steps: [
              {
                name: "EOA vs. Smart Account",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the difference between an Externally Owned Account (EOA) and a Smart Account?",
                    answers: [
                      "A) EOAs are always controlled by private keys, while Smart Contracts can be controlled by the logic within the contract itself. ✅",
                      "B) Smart Contracts can hold and execute complex logic, while EOAs cannot.",
                      "C) EOAs can directly initiate transactions, while Smart Contracts require a triggering transaction from an EOA or another smart contract.",
                      "D) Smart Contracts can interact with other contracts and execute complex operations, while EOAs are limited to sending transactions and managing balances."
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "Externally Owned Accounts (EOAs) are always controlled by ________________, while Smart Contracts can be controlled by the logic within the contract itself.",
                    correctAnswer: "Public keys ✅",
                  },
                  {
                    type: "true-false",
                    question: "True or False: EOAs can directly initiate transactions on the blockchain, while Smart Contracts require a triggering transaction from an EOA or another smart contract.",
                    correctAnswer: true,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "Smart Contracts can hold and execute _______________ logic, while EOAs cannot.",
                    correctAnswer: "Arbitrary ✅",
                  },
                ]
              },
              {
                name: "When to Use EOAs",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question: "EOAs are typically used for individual account management and transactions, where user control and ________________________________ are essential.",
                    correctAnswer: "direct interaction with the blockchain ✅",
                  },
                  {
                    type: "true-false",
                    question: "True or False: EOAs' private key can be stored in a hardware wallet.",
                    correctAnswer: true,
                  },
                  {
                    type: "true-false",
                    question: "True or False: EOAs can be controlled by more than 1 private key.",
                    correctAnswer: false,
                  },
                ]
              },
              {
                name: "When to Use Smart Contracts",
                questions: [
                  {
                    type: "fill-in-the-gap",
                    question: "Smart contracts are suitable for scenarios where you need automated and trustless execution of actions based on predefined rules. They are particularly useful in cases involving multiple parties and where ______________________________ are required.",
                    correctAnswer: "programmable logic or complex conditions ✅",
                  },
                  {
                    type: "true-false",
                    question: "True or False: Smart contracts can be used for securing assets with custom logic.",
                    correctAnswer: true,
                  },
                  {
                    type: "multiple-choice",
                    question: "In what scenarios are Smart Contracts particularly useful?",
                    answers: [
                      "When the outcome needs to be randomized",
                      "When centralized control is required",
                      "When minimal security is a priority",
                      "When programmable logic is required ✅"
                    ],
                    correctAnswer: 3,
                  },
                ]
              }
            ],
          },
        ],
      },
      {
        name: "Safe Smart Account ",
        units: [
          {
            name: "What is Safe",
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
                      "Safe Smart Account is a blockchain account with enhanced security and features, often used for managing digital assets and executing smart contracts in a secure and customizable manner."
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
                      "A Smart Wallet"
                    ],
                    correctAnswer: 1,
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
                ]
              },
              {
                name: "Safe Ecosystem",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What are the core components of the Safe ecosystem?",
                    answers: [
                      "A) Safe Wallets, Safe Transactions, Safe Blocks",
                      "B) Safe Modules, Safe Guards, Safe Protocols",
                      "C) Safe App, Safe Code, Safe Security",
                      "D) Safe{Core} Protocol, Safe{Core} AA SDK, Safe{Core} API"
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not a core component of the Safe ecosystem?",
                    answers: [
                      "A) Safe Blocks",
                      "B) Safe Modules",
                      "D) Safe{Core} Protocol",
                      "Safe{Core} AA SDK"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is a component of the Safe ecosystem?",
                    answers: [
                      "A) Safe{Core} Execution",
                      "B) Safe{Core} Transaction",
                      "C) Safe{Core} Protocol",
                      "D) Safe{Core} Block"
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question: "How do Safe Modules and Safe Guards contribute to the ecosystem?",
                    answers: [
                      "A) Allow to customize and extend Safe's functionality",
                      "B) Allow to restrict Safe’s functionality",
                      "C) Allow to implement moonwalking in Safe transactions."
                    ],
                    correctAnswer: 0,
                  },
                ]
              }
            ],
          },
          {
            name: "What is Safe {Core} Protocol",
            steps: [
              {
                name: "Safe {Core} Protocol and Protocol Kit",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary role of Safe {Core} Protocol?",
                    answers: [
                      "Storing cryptocurrency securely",
                      "Making smart accounts secure, portable, and composable",
                      "Regulating blockchain transactions",
                      "Enabling multi-signature transactions"
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not the purpose of the Protocol Kit?",
                    answers: [
                      "A) Managing Safe accounts",
                      "B) Enabling transaction execution",
                      "C) Creating Safe accounts",
                      "D) Providing gasless transactions"
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "multiple-choice",
                    question: "In the context of the protocol kit, choose the correct option",
                    answers: [
                      "There are two versions of the Safe contracts: Safe.sol that does not trigger events to save gas and SafeL2.sol.",
                      "There is just one Safe.sol."
                    ],
                    correctAnswer: 1,
                  },
                ]
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
                      "The Safe Factory is a smart contract that manages Safe transactions to transfer tokens"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question: "The Safe Factory deploys Proxy smart contracts having the same smart contract logic with different ___?",
                    answers: [
                      "Storage",
                      "Memory",
                      "Logic",
                      "Call"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question: "Does the proxy pattern affect the Safe{Core} Protocol's performance?",
                    answers: [
                      "No, The proxy pattern improves the contract upgrade process, reducing gas costs.",
                      "No, The proxy pattern allows the Safe{Core} Protocol to adapt to changing requirements easily.",
                      "Yes, The proxy pattern enhances security by separating contract logic from storage.",
                      "Yes, The proxy pattern may limit the Safe{Core} Protocol's ability to perform complex actions, potentially slowing it down ✅"
                    ],
                    correctAnswer: 3,
                  }
                ]
              },
              {
                name: "Using a Safe Smart Account",
                questions: [
                  {
                    type: "interaction-safe-deploy",
                    question: "Do you want to deploy your firs Safe Smart Account?",
                    answers: [
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-transfer",
                    question: "Let's make your first transaction with your Safe",
                    answers: [
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-addSigner",
                    question: "Let's add a new Safe owner",
                    answers: [
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "interaction-safe-transfer",
                    question: "Do you want to try to make a transfer now?",
                    answers: [
                    ],
                    correctAnswer: 1,
                  }
                ]
              }
            ],
          },
          {
            name: "Safe {Core} AA SDK",
            steps: [
              {
                name: "What is Safe {Core} AA SDK",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary purpose of Safe{Core} AA SDK?",
                    answers: [
                      "Creating social media accounts",
                      "Simplifying the use of smart contract accounts",
                      "Enhancing gaming experiences",
                      "Regulating cryptocurrency markets"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "multiple-choice",
                    question: "What is not a primary purpose of Safe{Core} AA SDK?",
                    answers: [
                      "Simplifying the use of smart contract accounts",
                      "Deploying new Safe Accounts",
                      "Creates externally owned accounts",
                      "Buy cryptocurrencies with fiat money"
                    ],
                    correctAnswer: 1,
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
                      "Smart contracts Kit"
                    ],
                    correctAnswer: 3,
                  }
                ]
              },
              {
                name: "Safe{Core} AA SDK Kit",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Which kit is responsible for creating externally owned accounts?",
                    answers: [
                      "Protocol Kit",
                      "Relay Kit",
                      "Auth Kit",
                      "Onramp Kit"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "The ___ kit is responsible for relaying Safe transactions and enabling third-party sponsorship.",
                    correctAnswer: "Protocol Kit",
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "The ___ kit is responsible for managing on and off ramp.",
                    correctAnswer: "Onramp Kit",
                  }
                ]
              },
            ],
          },
          {
            name: "What is Safe {Core} API",
            steps: [
              {
                name: "Safe{Core} API",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "What is the primary purpose of the Safe{Core} API?",
                    answers: [
                      "Providing gaming instructions",
                      "Offering information about Safe accounts",
                      "Enabling social media interactions",
                      "Regulating digital asset ownership"
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "multiple-choice",
                    question: "What kind of data can developers access through the Safe{Core} API?",
                    answers: [
                      "Weather forecasts",
                      "Social media posts",
                      "Information related to Safe accounts and transactions",
                      "Cryptocurrency prices"
                    ],
                    correctAnswer: 3,
                  },
                  {
                    type: "true-false",
                    question: "Does the Safe{Core} API provide valuable data about Safe accounts and transactions?",
                    correctAnswer: true,
                  }
                ]
              },
              {
                name: "Safe Transaction Service",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "In which activity the Safe Transaction Service is not involved?",
                    answers: [
                      "Keeping track of Safe Transactions",
                      "Collecting off-chain signatures",
                      "Informing owners about pending transactions",
                      "Executing Smart contract transactions"
                    ],
                    correctAnswer: 4,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "The Safe Transaction Service is responsible for _______________ of Safe Transactions.",
                    correctAnswer: "Tracking",
                  },
                  {
                    type: "multiple-choice",
                    question: "How does the Safe Transaction Service improve user interactions?",
                    answers: [
                      "The Safe Transaction Service enhances user interactions by allowing users to manage multiple transactions in a single batch, improving efficiency and reducing transaction costs.",
                      "The Safe Transaction Service introduces unnecessary complexity to user interactions by collecting signatures off-chain",
                      "The Safe Transaction Service often results in higher transaction fees, making user interactions costlier compared to traditional methods",
                      "The Safe Transaction Service offers limited flexibility, hindering users from customizing their interactions with the blockchain"
                    ],
                    correctAnswer: 1,
                  }
                ]
              }
            ],
          },
          {
            name: "Safe Modules",
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
                      "Enhancing social media interactions"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "Safe Modules can be added or removed by interacting with the ________________.",
                    correctAnswer: "Module Manager",
                  },
                  {
                    type: "multiple-choice",
                    question: "What security considerations should be taken into account when using Safe Modules?",
                    answers: [
                      "Safe Modules are inherently secure and do not require any specific security measures.",
                      "It is unnecessary to audit or test Safe Modules for vulnerabilities as they are automatically protected against all threats.",
                      "Security considerations for Safe Modules should focus on factors such as code audits, regular updates, and ensuring that third-party modules are trusted and free from vulnerabilities. ✅",
                      "Security for Safe Modules primarily involves relying on proprietary security software without the need for external audits or code reviews."
                    ],
                    correctAnswer: 3,
                  }
                ]
              },
              {
                name: "Using Safe Modules",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Which is the correct method to add a Module interacting with the Module Manager?",
                    answers: [
                      "enableModule",
                      "addModule",
                      "insertModule",
                      "removeModule"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "How to execute a transaction from a module? ____TransactionFromModule",
                    correctAnswer: "exec",
                  },
                  {
                    type: "multiple-choice",
                    question: "Choose the correct one",
                    answers: [
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Module",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Module"
                    ],
                    correctAnswer: 2,
                  }
                ]
              }
            ],
          },
          {
            name: "Safe Guards",
            steps: [
              {
                name: "Introduction to Safe Guards",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Why are Safe Guards introduced in Safe Contracts?",
                    answers: [
                      "To reduce transaction fees",
                      "To restrict the standard `n`-out-of-`m` signature scheme",
                      "To enhance transaction security",
                      "To promote cryptocurrency mining"
                    ],
                    correctAnswer: 2,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "Safe Guards can be added or removed by interacting with the ________________.",
                    correctAnswer: "Guard Manager",
                  },
                  {
                    type: "multiple-choice",
                    question: "What security considerations should be taken when adding a Guard to your Safe?",
                    answers: [
                      "There are no security considerations when adding a Guard to your Safe, as Guards are always perfectly secure.",
                      "Guards do not have the power to block Safe transaction execution; their role is purely advisory and has no impact on transaction security.",
                      "A broken Guard cannot cause a denial of service for a Safe, as the system automatically bypasses malfunctioning Guards.",
                      "A Safe Guard does have full power to block Safe transaction execution, and a broken Guard can cause a denial of service for a Safe.✅"
                    ],
                    correctAnswer: 4,
                  }
                ]
              },
              {
                name: "Using Safe Modules",
                questions: [
                  {
                    type: "multiple-choice",
                    question: "Which is the correct method to add a Module interacting with the Module Manager?",
                    answers: [
                      "enableModule",
                      "addModule",
                      "insertModule",
                      "removeModule"
                    ],
                    correctAnswer: 1,
                  },
                  {
                    type: "fill-in-the-gap",
                    question: "How to execute a transaction from a module? ____TransactionFromModule",
                    correctAnswer: "exec",
                  },
                  {
                    type: "multiple-choice",
                    question: "Choose the correct one",
                    answers: [
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Module",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransactionFromModule on the Safe✅",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Safe",
                      "If you have a Module and you want to use the Module’s logic you have to call execTransaction on the Module"
                    ],
                    correctAnswer: 2,
                  }
                ]
              }
            ],
          },
        ],
      }
    ],
  },
];
