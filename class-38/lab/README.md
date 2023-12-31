# LAB - Redux - Asynchronous Actions

**Virtual Store Phase 3:**  Connect the Virtual Store to an API to retrieve live data from your data source, using `thunk` to enable asynchronous actions.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'storefront' repository, in a branch called 'thunk'.

## Business Requirements

Refer to the [Virtual Store System Overview](../../apps-and-libraries/store/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.

## Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements and workflow.

- Continue to use Material UI Components for layout and styling.
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart.
- Continue to use multiple reducers.

### Proposed File Structure

Utilizes [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/) conventions.

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── public
├── src
│   ├── __tests__
│   │   └── App.test.jsx (integration test)
│   ├── Components
│   │   ├── Categories
│   │   │   ├── Categories.test.jsx (unit test)
│   │   │   └── index.jsx
│   │   ├── Footer
│   │   │   ├── Footer.test.jsx
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.test.jsx
│   │   │   └── index.jsx
│   │   ├── SimpleCart
│   │   │   ├── index.jsx
│   │   │   └── SimpleCart.test.jsx
│   │   └── Products
│   │       ├── index.jsx
│   │       └── Products.test.jsx
│   ├── store
│   │   ├── cart.js
│   │   ├── categories (notice structure with unit test)
│   │   │   ├── categories.test.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── products.js
│   ├── App.jsx
│   ├── App.scss
│   └── main.jsx
├── .gitignore
├── .eslintrc.json
├── package.json
└── README.md
```

### Notes on State Management

- You will need to use `useEffect()` to dispatch a load action on the initial page load.
  - This will need to use `thunk` as it will be asynchronous.
- When adding/removing/updating `products` in the cart, the action/reducer will need to update the `product` on the server.
  - Perform the appropriate `post`, `put`, or `delete` via API call (using thunk in an async action) on each of these actions as performed by the users.

> **NOTE:** When write operations happen in the cart, the products are changed permanently (inventory count changes on the server), your product list in state will be instantly out of sync with what's on the server. How (or when) will you re-sync the state of your application with the state of the persisted data on the server?  Perhaps ensure that only products that have an available inventory of > 0 can be shown on the application as users browse the categories.

### Testing

- Behavioral tests are required to assert all user stories are properly completed and operational.
- Consider leveraging a chatbot as needed. 

> You have permission to use a chatbot to write tests for code blocks of your choice.  Practice engineering optimal prompts to engage AI.  Anytime you utilize AI, be sure and document the actual contribution made by AI along with the prompt you used to generate the response in your `README.md`.

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations.
