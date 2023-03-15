<h1 align="center">Finance app</h1>
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/68236516/225429045-b8257b9d-6b9f-44d6-a331-e1d64a07692c.png">
</p>

<h2 align="center">Basic Overview</h2>
<p>
Have you ever thought about making a list of expenses and earnings for the month? With this application you can list them categorically. The user inserts the gain and/or expense informing the date, description and value. After that, the application lists what was inserted.
</p>

> Made with React.TS + Tailwind.CSS 
<br/>

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/64px-Typescript_logo_2020.svg.png" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" width="50" height="50">
</p>

<h2 align="center">How it works?</h2>

<p align="center">
The user can navigate between months to have their month-by-month control
<p align="center">
<img  src="https://user-images.githubusercontent.com/68236516/225436007-fa32c730-bba9-46fb-9c58-fc58ab51e6a0.png">
</p>
<br/>
<p align="center">
Below there is a panel that calculates the balance between revenue inflows and outflows</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/68236516/225438447-e4cf2867-2743-4aec-b3e6-caa449b018fa.png">
</p>
<p align="center">
Here is the filling form where user can fill input date, select earnings/expenses category, item description and item value
</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/68236516/225444364-eab34316-0bac-4145-8aad-fc8365ecf468.png">
</p>
<p align="center">
The 'Refund' and 'Earn' categories are balance entries. The other categories are expenses. After the user clicks the add button, the item goes to the field below.
</p>
<p align="center">
The field below show all the added items.
</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/68236516/225448433-dd90274a-7d3b-4364-9953-d5f894f0ff5c.png">
</p>

<h2 align="center">Instructions to use</h2>

1. After clone the project (aka `git clone https://github.com/edgarrps/finance-app.git`):
```
npm i
```
2. Install tailwind dependences

```
npm i -D tailwindcss postcss autoprefixer
```

3. And voilá! just run on localhost with:

```
npm run dev
```

<h2 align="center">Important notes/issues</h2>

* For now, it is not possible to save the items in localStorage, this will be implemented soon;

* In some smartphones, the keyboard recognizes `.` and `,` as NaN, not adding decimal values.


