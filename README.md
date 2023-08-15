# Cypress Automation Framework

This repository contains an end-to-end test automation framework built with [Cypress](https://www.cypress.io/)

The framework follows the Page Object pattern and includes reusable commands.

## Prerequisites

- [Node.js](https://nodejs.org/en) installed on your local machine.
- [Git](https://git-scm.com/) installed on your local machine.

## Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/saiferdima/cypressTests.git
```

2. Navigate to the cloned directory:

```bash
cd cypressTests
```

3. Install the dependencies:

```bash
npm install

```

## Running the Tests

1. To run the tests in interactive mode, run:

```bash
npx cypress open

```

This will open the Cypress Test Runner, where you can select which test file(s) to run and see the test results.

2. To run the tests in headless moderun:

```bash
npx cypress run

```

This will run all the tests in headless mode and generate  report in the cypressTests\results directory.

## Project Structure

The project structure follows the following convention:

- 'cypress/e2e/demo': This directory contains the test(spec) files.
- 'cypress/e2e/pages': This directory contains the page object files.
- 'cypress/support/commands.js': This file contains the reusable custom commands used across the test files.
- 'cypress/fixtures: This directory contains the test data used in the test files.
- 'cypress/support/index.d.ts: This file includes custom comands docs.
