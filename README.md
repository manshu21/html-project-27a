**_Custom Hook - useFetch_**

This project is made to understand **Custom Hooks in React**.

In this project, I created a custom hook called `useFetch` which is used to fetch data from an API.

**_What I Learned_**

1.  How to create a custom hook in React
2.  How to use `useState`
3.  How to use `useEffect`
4.  How to fetch data using JavaScript `fetch()`
5.  How to handle loading state
6.  How to handle errors
7.  How to display API data in React

**_ API Used_**

For this project, I used the JSONPlaceholder dummy API.

API:

`https://jsonplaceholder.typicode.com/photos`

## How `useFetch` Works

The `useFetch` hook takes an API URL as an argument.

```jsx
const { data, loading, error } = useFetch(
  "https://jsonplaceholder.typicode.com/photos",
);
```

It returns three things:

- `data` → API se aane wala data
- `loading` → Data load ho raha hai ya nahi
- `error` → Agar API me error aaye to error message

**_Project Features_**

### 1. Fetch Data

The custom hook uses `fetch()` to get data from the API.

### 2. Loading

Jab data load ho raha hota hai, screen par:

```text
Loading...
```

show hota hai.

### 3. Error Handling

Agar API se data fetch nahi hota, to error message show hota hai.

### 4. Display Data

API se data aane ke baad, data ko cards ke form me display kiya gaya hai.

**_Technologies Used_**

1. React
2. JavaScript
3. CSS
4. Fetch API
5. JSONPlaceholder API

**_Project Structure_**

```text
src/
│
├── App.jsx
├── App.css
└── main.jsx
```

**_How to Run the Project_**

First, install the dependencies:

```bash
npm install
```

Then start the project:

```bash
npm run dev
```

After that, open the localhost link shown in the terminal.
