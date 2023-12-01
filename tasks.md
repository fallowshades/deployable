# Fullstack Hamoria

## front End

### front 3 layers

#### Layer 0 v0.0.1

[x]all tools for development with a team (secure n-scalled)
---[x]developter: emmet, react-native snippets
---[x]arcitecur: built with vite to configure proxy
---[x]testing: easier w same css. (troubleshot)
[x]color root node with favvicon and title (packages to color decending nedos)
---[x]Test: app does render

#### Layer 1 v0.0.2

Story: basic navigation
[x]Data context support: set up router
---[x]static test
---[x]create pages to render dynamically
---[x]Test: can navigate with url

[x]Interior Points
---[x]index to but pages inside homeLayout for shared maintenance
---[x]Link interior points
---[x]Test: can navigate with user interaction

[x]Errors bubble up
---[x]errors from internal errors
---[x]Test: ???

Story: advanced navigation
[x]shared parent responsibility
---[x]navigate 1 active
---[x]Test: sharedLayout has a default page
---[x]Navigation depend 404 error and later user privileges
---[x]test bas redirect url
[x] default FormRow components

#### Layer 2 v0.0.3

[]global context

parts: App, dashboard layout, Navbar

[]partitioned logic of nav and body
---[x]Layout fixed/relative 2 column set up (app, dashboard)
---[x]main wrapper for m/n scaled prop drilling and nav privilege (dashboard, navbar)
---[x]m-scaled navigation of existing content extend context (utils/link, smalSidebar, navLinks)

---[]Conditional Containers
-----[x] nav links are aware of non default sidebar (smalsidebar, navlinks)
-----[x]nav toggle sidebar default/non default and set conditional user?.name for logout container (navbar, logoutContainer)

---

parts: (navbar, ThemeToggle, DachboardContext, index.css, app)

[x]Navigate and local storage
---[x]insert theam when app access local storage

## Backend

### White and black box v0.1.0

#### White box is monitored

pages: (server, package.json, -rm test.js)

[x]set up server
---[x]Test log
[x]es6 modules
---[x]test named imports

#### Remote black boxes

pages: (server, .env .package.json)

[x]Nodemon and express
---[x]Test: server is running
[x]Basic Express server accept JSON
---[x]Test: accept JSON
[x]Morgan and doteEnv
---[x]Test: set up DoteENV during dev || production

### proper remote set up for identification of achievements v0.1.1

#### successive Flow

pages: (server)

[x]basic Crud with Middleware
---[x]Test: all crud methods as if was server

#### Erroneous flow

pages: (server)

[x]white and black box error flow support routes
---[x]Test something went wrong
---[c]set up routes

pages: (server, model)

[x]Connection dependence
---[x]constants with domain restrictions
---[x]Test create model

pages: (ErrorHandlerMiddleware, customError, AuthController)

[x]Expressive module application with middleware (type,status domain restrictions)
---[x]status codes
---[x]errorHandlerMiddleware
---[x]CustomError bad requests

### Effective validate data v0.1.2

#### type Domain restriction

pages: (server, validationMiddleware, achievementRouter, utils/constants/achievementModel, )

[x]general validation
---[x]creation validation
---[x]validate id

#### user Domain restrictions

Pages: (userModel, routeStructure, validationMiddleware, auth router/controller)

[x]Validate initial user
[x]validate different types of users

### Identifying structure v0.1.3

#### Higher order user concerns (secure data identification)

Pages: ()

[x]hash security for success and errors
---[x]Test: registered password is encrypted
[x]comparator and certificate for user
[x]Store connected tables/documents

#### proper remote set up for public documents/tables (identiable data/permission LifeCycle)

Pages: ()

[x]Middleware interpretation
---[x]Identity is extracted from cookie
[x]Permission granted/rejected

### Identifying workload v0.1.4

[x]User privilaged actions
---[x]Test, patch,get user/data
[x]Fullstack development
---[x]Test call backend through proxy
---[x]test custom instance axios

## Privileged pages

### Register Page v0.2.0

Pages: (Register, DashboardLayout, Login)

[x]vertical scaling
---[x]action handled by parent router

[]horizontal scaling
---[x]errors encapsulated managment with hook (less catch code in context)
---[x]response data is interprited from Object.fromEntities
---[x]vertical session encapsulated in require attribute (register user)
---[x]horizontal sessiion encapsulated in useNavigate hook and disable attribute (navigational state)
---[x]horizontal scaling not encapsulated is caught feedback. (Readt toastify) -[x]Log in user (unChecked errors, 3rd type error)
---[x]navigational effect caused by response redirect.
---[x]is second child element in parent router with similar session managment -[x]useAction data hook (checked errors)
---[x]checked session errors conditional password length return caught as feedback.

### Dashboard page v0.2.1

Pages (DashboardLayout)

[x]Loaders (redirect before page render)
---[x]encapsulate the mounted useEffect
[x]getCurrent (common cause = jwt issues)
---[x]what is passed down Outlet with useLoaderData

### Jobs page v0.2.2

Pages: (AddAchievement, App, AllAchievements, SearchContainer, EditAchievement, DeleteAchievement)

---[x]support tree transfor objects
---[x]create transfor lifeCycle
---[x]context map presentational data dynamically

### Admin page v0.2.3

Pages: (Admin, App, NavLink, Stat Item, StatItemWrapper)

[x]special network Application
---[x]use dashboardContext to access role
---[x]state item with user data as input (from loader data)

### Profile page v0.2.4

#### Connecction using string format

Pages: (util/public, server, userModel)
di
[z]both front and backend together with backend acting as control of upload
---[z]concern in time of development and production
---[z]concern local space notification \_Directory
---[z]how does server controll data with string

#### reception to response

Pages: (Profile, MulterMiddleware, userRouter)

[z]path to presentatioal destination
---[z]accept attribute
---[z]challanges with size pressentational ctrl session and content type

#### Life Cycle

Pages: (.env, server, userController, LogoutContainer, submitBtn )

[z]Source transmition
---[z]ready dst to persist data, since hosted server limitation.
---[z]a method to transmit (mb callback)
---[z]connected onto additional node (name, key, secrete)
---[z]redundancy

#### opt deploy

Pages (multerMiddleware, userController)

### test user v0.2.5

Pages: (PostMan, Login)

[z]test user
---[z]front static async

Pages: (AuthMiddleware, populate)

[]require
---[z]back accumulate extra user properties for later checking.

### stats page v0.2.6

Pages: (AchievementController, stats, app, statsContainer, chartsContainer, areaChart, barChart)

[]tool to extract table data
---[x]1 column (reduce) (count, default)
---[x]set of columns (map) (date, conditional active)

### All Jobs page v0.2.7

#### req.url and params

Pages: (AchievementController, pages/AllAchievements, searchContainer, FormRow, Debounce)

[x]params to send request
---[x]interactive session ctrl link to url reset.
---[x]automatic session search value set with context hook

#### from() multiple return

Pages: (AchievementContainer, PageBtnContainer)

[x]pagination of response data
---[x]consideration of existence.
---[x]shifted array/range is dependent on url

## Deployable

### Deploy v0.3.0

[x]Local vs production build
---[x]no default values
[x]consider img upload

### Query optimization v0.3.1

[x]set up optimization'
---[x]default options
[x]Dashboard showMe invalidation
---[x] Login/dashboard/profile
[x]achievement
---[x]what static/dynamic
---[x]who axios interceptors

### new iteration1 within v0.3.2

[x] css extended with tailwind and daisyui
---[x]files to scan
---[x]plugins require daisyui

---

[x]confirm content scan for auth components (fixed)¨

---

[x]global state (navigation)
---[x]conditional header
---[x] sidebar with tiny changes to css
---[x]navLink component that fetch different data what/who
---[x]default sidebar

### setup convenient db to setup frontend v0.3.3

[x]set up practice data
---[x]aboute page
---[x]hero carossel
---[x]url

### set all what w provided db v0.3.4

[x]feature home load
---[x] container fill up load from featureHome
---[x] filters add on params
---[x] load return {key: value}

### set single what provided db v0.3.5

[]
---[]grid view also vissible from feature home
---[]path relative to single item

### imitate backend v0.3.6

[]from e-commerence-api
---[x]name-->title
---[x]price
---[x]description
---[x]image
---[x]category
---[x]company
---[x]colors
---[x]featured
---[x]freeShipping
---[]inventory
---[]avrageRating
---[]numOfReviews
---[]user
---[x]timestamp
[]extra
---[]puublishedAt

### validate imiteted backend v0.3.7

## auth transactions

### transaction bag v0.4.0

\_parts: CartSlice, store, main, singleSign, navbar

### authStore v0.4.1

[]
---[] move theame preference
---[] move user auth

### doCheckout v0.4.2

[]
---[] loader with store validate privilage
---[] 401 and 403 auth

### orders v0.4.3

### optimize v0.4.4

### review v0.4.5

[]review
[]populate
[]trigger

### imitate order db v0.4.6

## Add all routes for documentation

### add prefix db v0.5.0

### add hand orientation db v0.5.1

### add course query database db v0.5.2

[]no routes
---[] crud controller
---[] domain controller
---[] tuple controller
---[] place controller
---[] item controller
[]so routes

### add word db v0.5.3

### add reference db v0.5.4

### add course db v0.5.5

### documentation tools v0.5.6
