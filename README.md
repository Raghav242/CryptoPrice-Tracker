# Crypto Price Tracker - Work Trial Task

## Objective
This project evaluates your ability to work with Next.js, API integration, state management, and documentation using Docusaurus.

### Task Overview
The task involves creating a **Crypto Price Tracker** that consists of:
- A **web dashboard** (built with Next.js) to display live cryptocurrency prices.
- A **developer documentation page** (created with Docusaurus) explaining the implementation approach, API integration, state management, and challenges faced.

---

## Project Structure
This project consists of two main parts:
1. **/web-app**: A Next.js web application that fetches and displays live cryptocurrency prices.
2. **/docs**: A Docusaurus documentation that explains the setup, approach, and other technical details.

---

## Features
### Web App (Next.js)
- Displays the latest prices of 5 cryptocurrencies (e.g., Bitcoin, Ethereum, Litecoin, etc.).
- Fetches live data using the [CoinGecko API](https://www.coingecko.com/).
- Implements a search bar to filter the cryptocurrencies displayed.
- Includes a "Refresh" button to manually fetch the updated prices.
- State management using **React Query** for efficient data fetching, caching, and synchronization.
- Displays a loading spinner while fetching data to improve the user experience.

### Documentation (Docusaurus)
- Comprehensive setup guide to run both the web app and the documentation site.
- Detailed explanation of the API integration, covering how the live cryptocurrency data is fetched and updated.
- A clear breakdown of the state management approach and why **React Query** was chosen.
- A section on the challenges faced during the project and the solutions implemented.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
